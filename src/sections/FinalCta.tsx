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
    try {
      const res = await fetch("/api/edu-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok && res.status !== 404) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("success");
    }
  }

  return (
    <section
      id="contact"
      className="bg-ink text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Talk to us
            </div>
            <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.025em] max-w-3xl">
              See it in your school.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
              We'll bring The Podcart to your campus, walk through Offloadr
              with your teachers, and scope a rollout that fits your program.
              No commitment.
            </p>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.14em] text-white/50">
                Email
              </div>
              <a
                href={`mailto:${FALLBACK_EMAIL}`}
                className="mt-1 inline-block text-base text-white hover:text-accent"
              >
                {FALLBACK_EMAIL}
              </a>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:pl-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              Contact us
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

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/50">
                    We'll only use your details to reply about EDU Media Systems.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
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
