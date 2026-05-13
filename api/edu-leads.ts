import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { Resend } from "resend";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().default(""),
  school: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1).max(4000),
});

type Lead = z.infer<typeof LeadSchema>;

const RECENT_WINDOW_MS = 24 * 60 * 60 * 1000;
const recentEmails = new Map<string, number>();

function isDuplicate(email: string): boolean {
  const now = Date.now();
  for (const [key, ts] of recentEmails) {
    if (now - ts > RECENT_WINDOW_MS) recentEmails.delete(key);
  }
  const last = recentEmails.get(email);
  if (last && now - last < RECENT_WINDOW_MS) return true;
  recentEmails.set(email, now);
  return false;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildSubject(lead: Lead): string {
  const who = lead.school ? lead.school : lead.name;
  return `[EDU lead] ${who}`;
}

function buildText(lead: Lead): string {
  const lines = [
    `New EDU Media Systems lead`,
    ``,
    `Name:    ${lead.name}`,
    `Email:   ${lead.email}`,
    `Phone:   ${lead.phone || "—"}`,
    `School:  ${lead.school || "—"}`,
    ``,
    `What they're trying to set up:`,
    lead.message,
    ``,
    `Reply to this email to write back to ${lead.name} directly.`,
  ];
  return lines.join("\n");
}

function buildHtml(lead: Lead): string {
  const accent = "#2563eb";
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;color:#0a0a0a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 16px;"><tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
      <tr><td style="background:${accent};height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>
      <tr><td style="padding:32px 32px 8px;">
        <p style="margin:0 0 6px;font-size:11px;letter-spacing:3px;color:${accent};text-transform:uppercase;font-weight:700;">EDU Media Systems</p>
        <p style="margin:0 0 24px;font-size:22px;font-weight:700;color:#0a0a0a;line-height:1.25;">New lead from the website</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ececec;border-radius:6px;margin-bottom:16px;">
          <tr><td style="padding:14px 18px;border-bottom:1px solid #f3f3f3;">
            <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;color:#888;text-transform:uppercase;">From</p>
            <p style="margin:0;font-size:15px;color:#0a0a0a;font-weight:600;">${escapeHtml(lead.name)}${lead.school ? " — " + escapeHtml(lead.school) : ""}</p>
            <p style="margin:2px 0 0;font-size:14px;"><a href="mailto:${escapeHtml(lead.email)}" style="color:${accent};text-decoration:none;">${escapeHtml(lead.email)}</a>${lead.phone ? " · " + escapeHtml(lead.phone) : ""}</p>
          </td></tr>
          <tr><td style="padding:14px 18px;">
            <p style="margin:0 0 6px;font-size:11px;letter-spacing:2px;color:#888;text-transform:uppercase;">What they're trying to set up</p>
            <p style="margin:0;font-size:14px;color:#222;line-height:1.6;white-space:pre-wrap;">${escapeHtml(lead.message)}</p>
          </td></tr>
        </table>
        <p style="margin:0 0 8px;font-size:13px;color:#555;line-height:1.6;">Hit <strong style="color:#0a0a0a;">Reply</strong> to write back to ${escapeHtml(lead.name)} directly.</p>
      </td></tr>
      <tr><td style="padding:16px 32px 24px;border-top:1px solid #f3f3f3;">
        <p style="margin:0;font-size:11px;color:#999;">Sent automatically from edumediasystems.com.au</p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const raw = (req.body ?? {}) as Record<string, unknown>;

  const honeypot = typeof raw.company === "string" ? raw.company.trim() : "";
  if (honeypot) {
    return res.status(200).json({ ok: true });
  }
  const { company: _ignored, ...candidate } = raw;

  const parsed = LeadSchema.safeParse(candidate);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return res.status(400).json({ error: first?.message ?? "Invalid submission" });
  }

  const lead: Lead = { ...parsed.data, email: parsed.data.email.toLowerCase() };

  if (isDuplicate(lead.email)) {
    return res.status(200).json({ ok: true, duplicate: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.EDU_LEAD_TO_EMAIL || "info@edumediasystems.com.au";
  const from = process.env.EDU_LEAD_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("[edu-leads] Missing env: RESEND_API_KEY / EDU_LEAD_FROM_EMAIL");
    return res.status(503).json({ error: "Email service is not configured" });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: lead.email,
      subject: buildSubject(lead),
      text: buildText(lead),
      html: buildHtml(lead),
    });
    if (error) {
      console.error("[edu-leads] Resend error", error);
      return res.status(502).json({ error: "Failed to send message" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[edu-leads] Unexpected error", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
