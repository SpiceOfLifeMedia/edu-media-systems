import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PropsWithChildren,
  type ReactNode,
} from "react";

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

export type TabDef = { id: string; label: string; eyebrow?: string };

export function Tabs({
  tabs,
  defaultId,
  aliases,
  scrollTargetId,
  children,
}: {
  tabs: TabDef[];
  defaultId?: string;
  aliases?: Record<string, string>;
  scrollTargetId?: string;
  children: (activeId: string) => ReactNode;
}) {
  const ids = useMemo(() => new Set(tabs.map((t) => t.id)), [tabs]);
  const fallback = defaultId && ids.has(defaultId) ? defaultId : tabs[0]!.id;
  const resolveHash = (h: string): string | null => {
    const bare = h.replace(/^#/, "");
    if (!bare) return null;
    if (ids.has(bare)) return bare;
    const aliased = aliases?.[bare];
    if (aliased && ids.has(aliased)) return aliased;
    return null;
  };
  const [active, setActive] = useState<string>(fallback);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const apply = (scroll: boolean) => {
      const matched = resolveHash(window.location.hash);
      if (matched) {
        setActive(matched);
        if (scroll && scrollTargetId) {
          const el = document.getElementById(scrollTargetId);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    apply(false);
    const handler = () => apply(true);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const select = (id: string, focus = false) => {
    setActive(id);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = id;
      window.history.replaceState(null, "", url.toString());
    }
    if (focus) tabRefs.current[id]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = tabs.findIndex((t) => t.id === active);
    if (i < 0) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      select(tabs[(i + 1) % tabs.length]!.id, true);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      select(tabs[(i - 1 + tabs.length) % tabs.length]!.id, true);
    } else if (e.key === "Home") {
      e.preventDefault();
      select(tabs[0]!.id, true);
    } else if (e.key === "End") {
      e.preventDefault();
      select(tabs[tabs.length - 1]!.id, true);
    }
  };

  return (
    <div>
      <div className="-mx-6 sm:-mx-8 lg:mx-0 overflow-x-auto">
        <div
          role="tablist"
          aria-label="Explore EDU Media Systems"
          onKeyDown={onKeyDown}
          className="flex min-w-max gap-1 border-b border-line px-6 sm:px-8 lg:px-0"
        >
          {tabs.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                role="tab"
                ref={(el) => {
                  tabRefs.current[t.id] = el;
                }}
                id={`tab-${t.id}`}
                aria-controls={`panel-${t.id}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(t.id)}
                className={`relative px-5 py-4 text-sm font-medium transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-md ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {t.label}
                {isActive ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-t bg-accent"
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="pt-12 sm:pt-14 lg:pt-16"
      >
        {children(active)}
      </div>
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
