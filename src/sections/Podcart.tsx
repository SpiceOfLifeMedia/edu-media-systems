import { useEffect, useRef } from "react";
import { Section, H2, Lead, Body } from "../lib/components";

const specs = [
  ["Inputs", "4-channel broadcast-grade mixer, four dynamic microphones with stands"],
  ["Recording", "Solid-state multitrack capture with one-press start/stop"],
  ["Vision", "On-cart capture for camera and screen sources, lighting included"],
  ["Storage", "Locked enclosure, dedicated cable management, integrated charging"],
  ["Mobility", "Caster-mounted base sized to clear a standard classroom door"],
  ["Power", "Single-cord power-up; runs from any classroom outlet"],
];

const featureStrip = [
  "Mobile classroom studio",
  "Secure fold-down design",
  "Built for student use",
  "Podcast + video ready",
  "Remote guest capable",
];

export default function Podcart() {
  return (
    <Section id="podcart" eyebrow="The Podcart" tone="soft">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.2fr] lg:gap-20">
        <div>
          <H2>A studio that rolls into the classroom.</H2>
          <Lead>
            The Podcart is a mobile podcast and broadcast cart engineered for
            school environments. It's heavy enough to be stable, light enough
            to move between rooms, and locked tightly enough to survive a
            full term of student use.
          </Lead>

          <div className="mt-10">
            <div className="text-2xl sm:text-3xl font-semibold text-ink leading-tight">
              Podcart packages from{" "}
              <span className="whitespace-nowrap">$14,999 AUD + GST</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-ink-muted leading-relaxed">
              Configured for school environments, rollout support and media
              program setup.
            </p>
          </div>

          <div className="mt-10">
            <Body>
              Configurations available for primary, secondary, and tertiary
              programs. Bundled rollout packages include training, install,
              and Offloadr seats — see the pricing section.
            </Body>
          </div>
        </div>

        <div>
          <PodcartGallery />
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
            {featureStrip.map((f) => (
              <li
                key={f}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-ink"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <ul className="mt-10 divide-y divide-line border-t border-line">
            {specs.map(([k, v]) => (
              <li
                key={k}
                className="grid grid-cols-[8rem_1fr] gap-6 py-4 text-sm"
              >
                <span className="font-medium text-ink">{k}</span>
                <span className="text-ink-muted">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Podcart360 />
    </Section>
  );
}

function Podcart360() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        v.removeAttribute("autoplay");
        v.removeAttribute("loop");
        try {
          v.pause();
          v.currentTime = 0;
        } catch {
          // no-op
        }
      }
    };
    apply();
    const handler = () => apply();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return (
    <div className="mt-20 lg:mt-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:gap-20 lg:items-center">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            360° showcase
          </div>
          <h3 className="mt-4 text-3xl sm:text-4xl font-semibold text-ink leading-[1.1] tracking-[-0.02em] max-w-xl">
            See The Podcart from every angle.
          </h3>
          <p className="mt-5 max-w-md text-base text-ink-muted leading-relaxed">
            A studio you can walk around. The Podcart was engineered for the
            way schools actually use it — wheeled in, wheeled out, opened up,
            packed down. A full turn around the cart, on loop.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          <video
            ref={videoRef}
            src="/podcart-360.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="360 degree view of The Podcart"
            className="block h-full w-full object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  );
}

const frames = [
  { src: "/podcart-2.png", caption: "Roundtable mode — full multi-host kit" },
  { src: "/podcart-1.png", caption: "Compact setup — preview screens deployed" },
  { src: "/podcart-3.png", caption: "Storage open — locked, integrated cabling" },
  { src: "/podcart-4.png", caption: "Closed — wheels into any classroom" },
];

function PodcartGallery() {
  return (
    <div>
      <div
        className="podcart-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth -mx-4 px-4 pb-4"
        aria-label="The Podcart product gallery"
      >
        {frames.map((f, i) => (
          <figure
            key={f.src}
            className="snap-start shrink-0 w-full first:ml-0"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-surface flex items-center justify-center p-4">
              <img
                src={f.src}
                alt={f.caption}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-ink-muted">
              {String(i + 1).padStart(2, "0")} — {f.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-2 text-xs text-ink-muted/80 lg:hidden">
        Swipe to explore →
      </p>
    </div>
  );
}
