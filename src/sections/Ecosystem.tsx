import { Section, H2, Lead } from "../lib/components";

const pillars = [
  {
    pillar: "Hardware",
    name: "The Podcart",
    body: "A purpose-built mobile recording cart. Microphones, mixer, recording surface, lighting and storage — all locked, charged, and ready to roll into any classroom.",
    href: "#podcart",
  },
  {
    pillar: "Software",
    name: "Offloadr",
    body: "The pipeline that connects recording to finished work. Files come off the cart, get organised by project, and arrive in front of editors and teachers without anyone touching a USB stick.",
    href: "#offloadr",
  },
  {
    pillar: "Workflow",
    name: "Producer Mode",
    body: "A guided producer/editor workflow built into Offloadr. Students learn the real production process — log takes, mark selects, hand off cleanly — instead of guessing at folders.",
    href: "#producer",
  },
];

const programs = [
  "Quick 15 classroom podcasts",
  "Student debates",
  "Leadership interviews",
  "Wellbeing discussions",
  "Assembly recaps",
  "Cultural conversations",
  "EMS Network live sessions",
];

export default function Ecosystem() {
  return (
    <Section id="ecosystem" eyebrow="The ecosystem">
      <H2>One system. Three layers. Built to work together.</H2>
      <Lead>
        EDU Media Systems isn't a piece of software or a piece of gear — it's
        the way the two stop fighting each other. Hardware that's actually
        designed for schools, software that's actually designed for the
        recordings it produces, and a workflow that turns both into a
        teachable process.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {pillars.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="group flex flex-col justify-between bg-white p-8 transition-colors hover:bg-accent-soft"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {p.pillar}
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{p.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {p.body}
              </p>
            </div>
            <div className="mt-8 text-sm font-medium text-ink group-hover:text-accent">
              Read more →
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-line bg-white p-8 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Programs students show up for
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-ink leading-[1.15] max-w-md">
              Schools are not left wondering what to record.
            </h3>
            <p className="mt-5 max-w-md text-base text-ink-muted leading-relaxed">
              EMS comes with a starter program library and ongoing prompts so
              teachers always have a session to run, a format to follow, and
              a reason for students to step up to the microphone.
            </p>
            <p className="mt-4 max-w-md text-sm text-ink-muted leading-relaxed">
              Teachers reserve The Podcart through a simple in-school booking
              and scheduling layer — so the cart stops being "whoever grabs
              it first" and starts running like a shared studio.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
            {programs.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink">
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                  aria-hidden
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
