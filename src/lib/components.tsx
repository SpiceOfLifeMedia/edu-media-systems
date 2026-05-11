import type { PropsWithChildren, ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  tone = "default",
  children,
  className = "",
}: PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  tone?: "default" | "soft";
  className?: string;
}>) {
  const bg = tone === "soft" ? "bg-surface" : "bg-bg";
  return (
    <section
      id={id}
      className={`${bg} border-b border-line-soft py-14 sm:py-16 lg:py-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: PropsWithChildren) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-8 bg-accent" aria-hidden />
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {children}
      </span>
    </div>
  );
}

export function H2({ children }: PropsWithChildren) {
  return (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] max-w-3xl">
      {children}
    </h2>
  );
}

export function Lead({ children }: PropsWithChildren) {
  return (
    <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink-muted max-w-2xl">
      {children}
    </p>
  );
}

export function Body({ children }: PropsWithChildren) {
  return (
    <p className="text-base leading-relaxed text-ink-muted">{children}</p>
  );
}

export function PrimaryButton({
  children,
  href = "#contact",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus-visible:bg-accent"
    >
      {children}
    </a>
  );
}

export function SecondaryButton({
  children,
  href = "#podcart",
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
    >
      {children}
    </a>
  );
}

export function Card({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-8 sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-semibold text-ink leading-none">
        {value}
      </div>
      <div className="mt-2 text-sm text-ink-muted">{label}</div>
    </div>
  );
}

export function FeatureRow({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid grid-cols-[3rem_1fr] gap-6 border-t border-line pt-8 first:border-t-0 first:pt-0">
      <div className="text-sm font-mono text-accent pt-1">{index}</div>
      <div>
        <h3 className="text-xl font-semibold text-ink mb-2">{title}</h3>
        <Body>{body}</Body>
      </div>
    </div>
  );
}
