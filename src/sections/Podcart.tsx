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
          <PodcartIllustration />
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

function PodcartIllustration() {
  return (
    <div className="aspect-[4/3] w-full rounded-xl border border-line bg-white p-8 flex items-center justify-center">
      <svg
        viewBox="0 0 320 240"
        className="w-full h-auto text-ink"
        role="img"
        aria-label="Schematic illustration of The Podcart"
      >
        {/* cart top surface */}
        <rect x="40" y="60" width="240" height="14" rx="2" fill="currentColor" opacity="0.08" />
        {/* cart body */}
        <rect x="50" y="74" width="220" height="110" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* shelf lines */}
        <line x1="50" y1="110" x2="270" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="146" x2="270" y2="146" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        {/* mics on top */}
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          <line x1="80" y1="60" x2="80" y2="40" />
          <circle cx="80" cy="34" r="6" />
          <line x1="120" y1="60" x2="120" y2="34" />
          <circle cx="120" cy="28" r="6" />
          <line x1="200" y1="60" x2="200" y2="34" />
          <circle cx="200" cy="28" r="6" />
          <line x1="240" y1="60" x2="240" y2="40" />
          <circle cx="240" cy="34" r="6" />
        </g>
        {/* mixer faders */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.6">
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1={80 + i * 40}
              y1="86"
              x2={80 + i * 40}
              y2="104"
            />
          ))}
        </g>
        {/* screen */}
        <rect x="62" y="116" width="100" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
        {/* recorder */}
        <rect x="180" y="116" width="80" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="128" r="3" fill="currentColor" />
        {/* casters */}
        <circle cx="70" cy="200" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="250" cy="200" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="184" x2="270" y2="184" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
