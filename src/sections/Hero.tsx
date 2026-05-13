import { PrimaryButton, SecondaryButton } from "../lib/components";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line-soft pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
                For schools · Hardware + Software + Workflow
              </span>
            </div>

            <h1 className="mt-6 text-[40px] sm:text-6xl lg:text-[64px] font-semibold leading-[1.02] tracking-[-0.03em]">
              Studio-grade media,
              <br />
              built for schools.
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl text-ink-muted leading-relaxed">
              EDU Media Systems gives schools a complete production stack —
              purpose-built hardware on wheels, a software pipeline that
              turns recordings into finished work, and a producer workflow
              that lets students publish without losing an afternoon to file
              management.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#contact">Book a demo</PrimaryButton>
              <SecondaryButton href="#podcart">View The Podcart</SecondaryButton>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:h-full">
            <img
              src="/podcart-1.png"
              alt="The Podcart — mobile recording cart for schools"
              className="block h-auto w-full max-w-[480px] object-contain sm:max-w-[560px] lg:max-w-full"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-20 sm:grid-cols-4 sm:gap-8">
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
