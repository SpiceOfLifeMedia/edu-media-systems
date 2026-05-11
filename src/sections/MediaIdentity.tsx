import { Section, H2, Lead, Body, Eyebrow } from "../lib/components";

const identityServices = [
  "Custom media program branding",
  "Logo development",
  "Visual identity creation",
  "School-colour integration",
  "Branded overlays and graphics",
  "Intro / outro packages",
];

const channelServices = [
  "YouTube channel setup",
  "Channel organisation",
  "Upload workflows",
  "Thumbnail templates",
  "Production templates",
  "Rollout guidance",
];

const supportTiers = [
  {
    name: "Essential",
    summary:
      "Foundational media operations support for schools running their own program with light backup from us.",
    points: [
      "System support",
      "Upload workflows",
      "YouTube channel management",
      "Limited editing support",
    ],
  },
  {
    name: "Active Media",
    summary:
      "Ongoing editing allocation and brand assets for schools publishing regularly across the year.",
    points: [
      "Weekly editing allocation",
      "Branded media assets",
      "Workflow support",
      "EMS Live participation",
    ],
    accent: true,
  },
  {
    name: "Full Media Program",
    summary:
      "End-to-end operational partnership for schools running their media program as a core part of school culture.",
    points: [
      "Larger editing allocation",
      "Ongoing strategy support",
      "Activation visits",
      "Operational coaching",
      "Priority support",
    ],
  },
];

function ServiceColumn({
  eyebrow,
  title,
  body,
  items,
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
}) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </div>
      <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-ink leading-snug">
        {title}
      </h3>
      <p className="mt-4 text-base text-ink-muted leading-relaxed max-w-md">
        {body}
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-y-2 text-sm text-ink-muted">
        {items.map((i) => (
          <li key={i} className="flex gap-3">
            <span className="text-accent" aria-hidden>
              —
            </span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MediaIdentity() {
  return (
    <Section id="identity" tone="soft">
      <Eyebrow>Your school's media identity</Eyebrow>
      <H2>More than equipment. A media program students are proud of.</H2>
      <Lead>
        Every school media program should feel unique to its school community.
        EDU Media Systems helps schools build a professional media identity —
        branding, channels, templates and operational support — so the program
        feels real from day one and grows into a part of school culture.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <ServiceColumn
          eyebrow="Identity & brand"
          title="A visual identity students recognise as their own."
          body="We design the brand layer that sits around the program — so it stops looking like a generic school project and starts looking like a real publication students want to be part of."
          items={identityServices}
        />
        <ServiceColumn
          eyebrow="Channel & content"
          title="Set up the channel properly. Keep it organised."
          body="From YouTube setup through to weekly upload workflow and thumbnail systems, we set up the publishing layer so the program runs cleanly without becoming another job for one teacher."
          items={channelServices}
        />
      </div>

      <div className="mt-16 rounded-2xl border border-line bg-white p-8 sm:p-10">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Public or private — your call
        </div>
        <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-ink leading-snug max-w-3xl">
          Schools choose whether their media stays internal or becomes a
          public-facing presence.
        </h3>
        <p className="mt-4 max-w-3xl text-base text-ink-muted leading-relaxed">
          Many schools start with private, internal-only content for safety
          and moderation reasons. Others run a public school channel from day
          one. EDU Media Systems supports both — the workflow, branding and
          editing assistance is the same; only the publishing destination
          changes.
        </p>
      </div>

      <div className="mt-20">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Ongoing support packages
        </div>
        <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-ink leading-snug max-w-3xl">
          Ongoing media operations support — sized to the program, not the
          inbox.
        </h3>
        <p className="mt-5 max-w-2xl text-base text-ink-muted leading-relaxed">
          Flexible recurring packages can include monthly editing
          allocations, media workflow assistance and branded content
          support. Schools step up or down as the program grows. Exact
          editing volumes are scoped per school.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportTiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-7 sm:p-8 ${
                t.accent ? "border-ink bg-white" : "border-line bg-white"
              }`}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                Tier
              </div>
              <h4 className="mt-2 text-lg font-semibold text-ink">
                {t.name}
              </h4>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                {t.summary}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3 text-ink-muted">
                    <span className="text-accent" aria-hidden>
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 max-w-3xl">
        <Body>
          Programs such as PNTV at Prospect North Primary School demonstrate
          how student-led media can become an embedded part of school culture
          when supported by strong branding, workflows and ongoing
          activation.
        </Body>
      </div>
    </Section>
  );
}
