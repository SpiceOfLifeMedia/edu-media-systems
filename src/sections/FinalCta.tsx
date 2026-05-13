import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FALLBACK_EMAIL = "info@edumediasystems.com.au";

export default function FinalCta() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[key];
        return next;
      });
    }
  }

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "Tell us a little about your school.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setErrors({});
    try {
      const res = await fetch("/api/edu-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        let message = `Couldn't send your message (HTTP ${res.status}).`;
        try {
          const data = (await res.json()) as { error?: string };
          if (data?.error) message = data.error;
        } catch {
          // ignore JSON parse failure
        }
        setErrors({ form: message });
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrors({
        form: "Couldn't reach the server. Please try again, or email us at " + FALLBACK_EMAIL + ".",
      });
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-ink text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Reach us directly
            </div>
            <a
              href={`mailto:${FALLBACK_EMAIL}`}
              className="mt-4 inline-block text-xl sm:text-2xl font-medium text-white underline-offset-4 hover:underline"
            >
              {FALLBACK_EMAIL}
            </a>

            <div className="mt-12">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Sound familiar?
              </div>
              <ul className="mt-6 space-y-5">
                {[
                  {
                    t: "Equipment sitting in an empty room",
                    b: "Cameras, mics and a mixer bought years ago — barely touched because no one knows how to run them as a program.",
                  },
                  {
                    t: "Recordings disappearing between classes",
                    b: "Files end up on a student's SD card or a personal Drive. Nothing handed off, nothing finished, nothing published.",
                  },
                  {
                    t: "One passionate teacher carrying everything",
                    b: "When that teacher leaves, the whole program leaves with them. There's no system anyone else can pick up.",
                  },
                  {
                    t: "Wanting a media program but no idea where to start",
                    b: "You've seen what other schools are doing. You don't have the time to figure out the gear, the workflow and the rollout from scratch.",
                  },
                ].map((p) => (
                  <li key={p.t} className="border-l-2 border-accent pl-5">
                    <div className="text-base font-semibold text-white leading-snug">
                      {p.t}
                    </div>
                    <div className="mt-1.5 text-sm text-white/60 leading-relaxed">
                      {p.b}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:pl-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Or send us the details
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.015em]">
              Tell us about your school.
            </h3>

            {status === "success" ? (
              <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] p-8">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Thanks
                </div>
                <p className="mt-3 text-lg font-medium text-white">
                  Your message is in.
                </p>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  We'll be in touch within one business day. If it's urgent,
                  email us directly at{" "}
                  <a
                    href={`mailto:${FALLBACK_EMAIL}`}
                    className="text-white underline-offset-4 hover:underline"
                  >
                    {FALLBACK_EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={(v) => update("name", v)}
                  error={errors.name}
                  autoComplete="name"
                  required
                />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    error={errors.email}
                    autoComplete="email"
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    error={errors.phone}
                    autoComplete="tel"
                  />
                </div>
                <Field
                  label="School"
                  name="school"
                  value={form.school}
                  onChange={(v) => update("school", v)}
                  error={errors.school}
                  autoComplete="organization"
                />
                <Field
                  label="What are you trying to set up?"
                  name="message"
                  value={form.message}
                  onChange={(v) => update("message", v)}
                  error={errors.message}
                  multiline
                  required
                />

                {errors.form ? (
                  <div className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {errors.form}
                  </div>
                ) : null}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  autoComplete?: string;
  error?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  multiline,
  autoComplete,
  error,
}: FieldProps) {
  const baseClasses =
    "w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-base text-white placeholder-white/30 outline-none transition-colors focus:border-white/60 focus:bg-white/[0.06]";
  const borderClass = error ? "border-red-400/70" : "border-white/15";

  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.14em] text-white/55">
        {label}
        {required ? <span className="ml-1 text-accent">*</span> : null}
      </span>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={4}
          className={`mt-2 ${baseClasses} ${borderClass} resize-y`}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          autoComplete={autoComplete}
          className={`mt-2 ${baseClasses} ${borderClass}`}
        />
      )}
      {error ? (
        <span className="mt-1.5 block text-xs text-red-300">{error}</span>
      ) : null}
    </label>
  );
}
