import { PrimaryButton, SecondaryButton } from "../lib/components";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line-soft pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-44"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="mb-12">
          <img
            src="/edu-logo-black.png"
            alt="EDU Media Systems"
            className="h-12 sm:h-14 w-auto"
          />
        </div>

        <h1 className="text-[40px] sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] max-w-4xl">
          Studio-grade media,
          <br />
          built for schools.
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-ink-muted leading-relaxed">
          EDU Media Systems gives schools a complete production stack —
          purpose-built hardware on wheels, a software pipeline that turns
          recordings into finished work, and a producer workflow that lets
          students publish without losing an afternoon to file management.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <PrimaryButton href="#contact">Book a demo</PrimaryButton>
          <SecondaryButton href="#podcart">View The Podcart</SecondaryButton>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-24 sm:grid-cols-4 sm:gap-8">
          <PillarLink label="The Podcart" sub="Hardware" href="#podcart" />
          <PillarLink label="Offloadr" sub="Software" href="#offloadr" />
          <PillarLink label="Producer Mode" sub="Workflow" href="#producer" />
          <PillarLink label="Remote Collab" sub="Distribution" href="#remote" />
        </div>
      </div>
    </section>
  );
}

function PillarLink({
  label,
  sub,
  href,
}: {
  label: string;
  sub: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group block border-t border-ink/15 pt-4 transition-colors hover:border-accent"
    >
      <div className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
        {sub}
      </div>
      <div className="mt-1 text-base font-semibold text-ink group-hover:text-accent">
        {label}
      </div>
    </a>
  );
}
