import { Section, H2, Lead, Body } from "../lib/components";

const specs = [
  ["Inputs", "4-channel broadcast-grade mixer, four dynamic microphones with stands"],
  ["Recording", "Solid-state multitrack capture with one-press start/stop"],
  ["Vision", "On-cart capture for camera and screen sources, lighting included"],
  ["Storage", "Locked enclosure, dedicated cable management, integrated charging"],
  ["Mobility", "Caster-mounted base sized to clear a standard classroom door"],
  ["Power", "Single-cord power-up; runs from any classroom outlet"],
];

export default function Podcart() {
  return (
    <Section id="podcart" eyebrow="The Podcart" tone="soft">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <H2>A studio that rolls into the classroom.</H2>
          <Lead>
            The Podcart is a mobile podcast and broadcast cart engineered for
            school environments. It's heavy enough to be stable, light enough
            to move between rooms, and locked tightly enough to survive a
            full term of student use.
          </Lead>

          <div className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              From
            </span>
            <span className="text-2xl font-semibold text-ink">
              $14,999 AUD
            </span>
            <span className="text-sm text-ink-muted">+ GST</span>
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
    </Section>
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
