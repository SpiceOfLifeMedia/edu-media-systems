import type { PropsWithChildren } from "react";
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

function IdentityMockups() {
  return (
    <div className="mt-16">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        What it looks like
      </div>
      <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-ink leading-snug max-w-3xl">
        A quick look at the brand layer schools get.
      </h3>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <MockTile label="Media program logo">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center">
            <div className="h-1 w-10 rounded-full bg-accent" aria-hidden />
            <div className="text-[13px] font-semibold tracking-[-0.01em] text-ink">
              School Media
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-ink-muted">
              Studio · Est. 2026
            </div>
          </div>
        </MockTile>

        <MockTile label="Broadcast identity card">
          <div className="flex h-full w-full flex-col justify-between p-3">
            <div className="flex items-center justify-between">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              <div className="text-[8px] uppercase tracking-[0.18em] text-ink-muted">
                Live
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                On air
              </div>
              <div className="mt-1 text-[12px] font-semibold leading-tight text-ink">
                Year 9 News Weekly
              </div>
            </div>
          </div>
        </MockTile>

        <MockTile label="Thumbnail template">
          <div className="relative h-full w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ink/70 to-accent/40" />
            <div className="absolute left-2 top-2 rounded bg-accent px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white">
              Ep · 04
            </div>
            <div className="absolute bottom-2 left-2 right-2">
              <div className="text-[11px] font-semibold leading-tight text-white">
                The Wellbeing Sit-Down
              </div>
              <div className="mt-0.5 text-[8px] uppercase tracking-[0.18em] text-white/70">
                12 min · podcast
              </div>
            </div>
          </div>
        </MockTile>

        <MockTile label="Lower-third example">
          <div className="flex h-full w-full items-end p-3">
            <div className="w-full">
              <div className="h-px w-8 bg-accent" aria-hidden />
              <div className="mt-1.5 text-[11px] font-semibold leading-tight text-ink">
                Mr. Calloway
              </div>
              <div className="text-[8px] uppercase tracking-[0.18em] text-ink-muted">
                Head of Media
              </div>
            </div>
          </div>
        </MockTile>

        <MockTile label="YouTube channel">
          <div className="flex h-full w-full flex-col">
            <div className="flex h-1/2 w-full items-end bg-gradient-to-r from-accent/30 to-ink/20 px-2 pb-1.5">
              <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink">
                Banner
              </div>
            </div>
            <div className="flex flex-1 items-center gap-2 p-2">
              <div className="h-6 w-6 shrink-0 rounded-full border border-line bg-white" />
              <div className="min-w-0">
                <div className="truncate text-[10px] font-semibold text-ink">
                  School Media
                </div>
                <div className="text-[8px] uppercase tracking-[0.16em] text-ink-muted">
                  4 series · weekly
                </div>
              </div>
            </div>
          </div>
        </MockTile>
      </div>
    </div>
  );
}

function MockTile({
  label,
  children,
}: PropsWithChildren<{ label: string }>) {
  return (
    <figure>
      <div className="aspect-[4/3] overflow-hidden rounded-xl border border-line bg-white">
        {children}
      </div>
      <figcaption className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </figcaption>
    </figure>
  );
}

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
        Every school media program should feel unique to its own community.
        EDU Media Systems is the underlying framework — branding, channels,
        templates and operational support — that schools, networks and
        education departments use to build their own student media identity.
        Adaptable, scalable, school-owned.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <ServiceColumn
          eyebrow="Identity & brand"
          title="A visual identity students recognise as their own."
          body="We build the brand layer that sits around each program — so a student media initiative stops looking like a generic school project and starts looking like a publication students want to be part of. Designed per school, owned by the school."
          items={identityServices}
        />
        <ServiceColumn
          eyebrow="Channel & content"
          title="Set up the channel properly. Keep it organised."
          body="From YouTube setup through to weekly upload workflow and thumbnail systems, we set up the publishing layer so the program runs cleanly without becoming another job for one teacher."
          items={channelServices}
        />
      </div>

      <IdentityMockups />

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
          EDU Media Systems is a scalable framework, not a single
          implementation. Student-led broadcast concepts, modern school
          media initiatives and custom school media identities can all be
          built on the same hardware, software and workflow layer — adapted
          to each school's community and ready to scale across networks,
          regions and education departments.
        </Body>
      </div>
    </Section>
  );
}
