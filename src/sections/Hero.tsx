import { PrimaryButton, SecondaryButton } from "../lib/components";
import heroImage from "../assets/edu-hero-ecosystem.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line-soft bg-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-[60%]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(15,23,42,0.045), rgba(15,23,42,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 pt-16 sm:pt-20 lg:pt-24 lg:min-h-[820px] lg:flex lg:items-center">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] lg:gap-8 w-full">
          <div className="lg:pr-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
                Student-led media · for schools
              </span>
            </div>

            <h1 className="mt-6 text-[40px] sm:text-6xl lg:text-[64px] font-semibold leading-[1.02] tracking-[-0.03em]">
              Modern student
              <br />
              media, built to last
              <br />
              in real schools.
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl text-ink-muted leading-relaxed">
              EDU Media Systems helps schools build sustainable student-led
              media programs — production hardware students can actually use,
              a workflow platform teachers can actually run, and the support
              to keep it going week after week.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#contact">Book a demo</PrimaryButton>
              <SecondaryButton href="#explore">See the ecosystem</SecondaryButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
              <span>Podcart · production hub</span>
              <span aria-hidden className="text-line">·</span>
              <span>Offloadr · workflow</span>
              <span aria-hidden className="text-line">·</span>
              <span>Subscription · support</span>
            </div>
          </div>

          <div className="relative lg:h-full lg:flex lg:items-center">
            <div className="block lg:hidden -mx-6 sm:-mx-8 overflow-hidden">
              <div className="relative h-[360px] sm:h-[440px]">
                <img
                  src={heroImage}
                  alt="A school student presenting to camera in front of a green screen, with The Podcart production hub"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "78% center", transform: "scale(1.15)" }}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            <img
              src={heroImage}
              alt="The EDU Media Systems ecosystem — Podcart production hub, lighting, cameras, and a school student presenting to a green screen"
              className="hidden lg:block w-full h-auto object-contain lg:scale-[1.18] lg:origin-center lg:translate-x-4"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-8 border-t border-line-soft pt-10">
          <PillarLink label="The Podcart" sub="Production hub" href="#podcart" />
          <PillarLink label="Offloadr" sub="Workflow platform" href="#offloadr" />
          <PillarLink label="School identity" sub="Branding & channel" href="#identity" />
          <PillarLink label="Partnerships" sub="Onboarding & support" href="#partnerships" />
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
