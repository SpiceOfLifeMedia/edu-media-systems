import { useEffect, useRef, type PropsWithChildren } from "react";
import {
  Body,
  Eyebrow,
  FeatureRow,
  H2,
  Lead,
  Section,
  Tabs,
  type TabDef,
} from "../lib/components";

const tabs: TabDef[] = [
  { id: "podcart", label: "The Podcart", eyebrow: "Hardware" },
  { id: "offloadr", label: "Offloadr", eyebrow: "Software" },
  { id: "workflow", label: "Workflow", eyebrow: "Producer mode + collaboration" },
  { id: "identity", label: "Identity", eyebrow: "Brand, channel & support" },
  { id: "subscription", label: "Subscription", eyebrow: "Structure & ongoing partnership" },
];

export default function Explore() {
  return (
    <Section id="explore" eyebrow="Explore EDU Media Systems" tone="soft">
      <H2>One system. The full picture.</H2>
      <Lead>
        Hardware that's actually designed for schools, software that's actually
        designed for the recordings it produces, and a workflow that turns both
        into a teachable process. Pick a layer to dig into.
      </Lead>

      <div className="mt-12 sm:mt-14 lg:mt-16">
        <Tabs
          tabs={tabs}
          defaultId="podcart"
          scrollTargetId="explore"
          aliases={{
            producer: "workflow",
            remote: "workflow",
            ecosystem: "workflow",
            pricing: "subscription",
            hardware: "podcart",
            software: "offloadr",
          }}
        >
          {(active) => {
            const tab = tabs.find((t) => t.id === active)!;
            return (
              <div>
                <div className="mb-10 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" aria-hidden />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {tab.eyebrow}
                  </span>
                </div>
                {active === "podcart" ? <PodcartPanel /> : null}
                {active === "offloadr" ? <OffloadrPanel /> : null}
                {active === "workflow" ? <WorkflowPanel /> : null}
                {active === "identity" ? <IdentityPanel /> : null}
                {active === "subscription" ? <SubscriptionPanel /> : null}
              </div>
            );
          }}
        </Tabs>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* PODCART                                                            */
/* ------------------------------------------------------------------ */

const podcartSpecs = [
  ["Inputs", "4-channel broadcast-grade mixer, four dynamic microphones with stands"],
  ["Recording", "Solid-state multitrack capture with one-press start/stop"],
  ["Vision", "On-cart capture for camera and screen sources, lighting included"],
  ["Storage", "Locked enclosure, dedicated cable management, integrated charging"],
  ["Mobility", "Caster-mounted base sized to clear a standard classroom door"],
  ["Power", "Single-cord power-up; runs from any classroom outlet"],
];

const podcartFeatureStrip = [
  "Mobile classroom studio",
  "Secure fold-down design",
  "Built for student use",
  "Podcast + video ready",
  "Remote guest capable",
];

const podcartFrames = [
  { src: "/podcart-2.png", caption: "Roundtable mode — full multi-host kit" },
  { src: "/podcart-1.png", caption: "Compact setup — preview screens deployed" },
  { src: "/podcart-3.png", caption: "Storage open — locked, integrated cabling" },
  { src: "/podcart-4.png", caption: "Closed — wheels into any classroom" },
];

function PodcartPanel() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.2fr] lg:gap-20">
        <div>
          <H2>A studio that rolls into the classroom.</H2>
          <Lead>
            The Podcart is a mobile podcast and broadcast cart engineered for
            school environments. It's heavy enough to be stable, light enough
            to move between rooms, and locked tightly enough to survive a full
            term of student use.
          </Lead>

          <div className="mt-10">
            <Body>
              Configurations available for primary, secondary, and tertiary
              programs. Bundled rollout packages include training, install,
              and Offloadr seats — scoped per school.
            </Body>
          </div>
        </div>

        <div>
          <PodcartGallery />
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
            {podcartFeatureStrip.map((f) => (
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
            {podcartSpecs.map(([k, v]) => (
              <li key={k} className="grid grid-cols-[8rem_1fr] gap-6 py-4 text-sm">
                <span className="font-medium text-ink">{k}</span>
                <span className="text-ink-muted">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Podcart360 />
    </div>
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

function PodcartGallery() {
  return (
    <div>
      <div
        className="podcart-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth -mx-4 px-4 pb-4"
        aria-label="The Podcart product gallery"
      >
        {podcartFrames.map((f, i) => (
          <figure key={f.src} className="snap-start shrink-0 w-full first:ml-0">
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

/* ------------------------------------------------------------------ */
/* OFFLOADR                                                           */
/* ------------------------------------------------------------------ */

const offloadrFeatures = [
  {
    index: "01",
    title: "Capture lands in the right project",
    body: "Recordings come off the cart and arrive automatically inside the right class, project, and episode — no folder-naming gymnastics.",
  },
  {
    index: "02",
    title: "Every file accounted for",
    body: "Tracks, takes, camera, and screen capture are all visible in one timeline. If something didn't make it across, you know immediately.",
  },
  {
    index: "03",
    title: "Publish-ready projects",
    body: "Selects, notes, and source files arrive packaged as organised school media workflows — teacher-ready, student-ready, classroom-ready exports.",
  },
  {
    index: "04",
    title: "History the school owns",
    body: "Projects don't disappear with the teacher. Every episode, every season, every class is searchable from one place.",
  },
];

function OffloadrPanel() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
      <div>
        <H2>The missing link between recording and editing.</H2>
        <Lead>
          Offloadr is the software side of EDU Media Systems. It takes the
          mess between "we recorded something" and "it's published" and turns
          it into a workflow students can actually follow — and teachers can
          actually grade.
        </Lead>
        <div className="mt-10">
          <a
            href="https://www.useoffloadr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
          >
            Visit Offloadr
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      <div className="space-y-10">
        {offloadrFeatures.map((f) => (
          <FeatureRow key={f.index} {...f} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* WORKFLOW (Producer Mode + Remote Collab + Programs)                */
/* ------------------------------------------------------------------ */

const producerSteps = [
  {
    n: "Step 01",
    t: "Producer plans the episode",
    b: "Run sheet, segments, guests, and roles defined before the cart even rolls in.",
  },
  {
    n: "Step 02",
    t: "Cart records, Offloadr captures",
    b: "Multitrack audio and video stream into the project automatically. The producer marks selects live as the session runs.",
  },
  {
    n: "Step 03",
    t: "Editor receives a clean handoff",
    b: "Selects, notes, and source files arrive in the editor's queue — packaged exactly the way a real production house works.",
  },
];

const collabPoints = [
  {
    t: "Across classes",
    b: "A media class can hand a project to an English class to write companion material — without anyone needing to be in the same room.",
  },
  {
    t: "Across schools",
    b: "Inter-school collaborations, shared interview projects, regional broadcasting clubs — all using the same project structure.",
  },
  {
    t: "Across roles",
    b: "Industry editors, journalists, and producers can be invited into a single project as guests, with view-only or edit access scoped to that project.",
  },
];

const programsList = [
  "Quick 15 classroom podcasts",
  "Student debates",
  "Leadership interviews",
  "Wellbeing discussions",
  "Assembly recaps",
  "Cultural conversations",
  "EMS Network live sessions",
];

function WorkflowPanel() {
  return (
    <div>
      <H2>The way real studios run, taught at school.</H2>
      <Lead>
        Producer mode turns a class of students into an actual production team.
        One student produces, others record, another edits — each role has its
        own view, its own checklist, and its own deliverables inside Offloadr.
        By the end of the term, every student has worked every seat.
      </Lead>

      <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {producerSteps.map((s) => (
          <li key={s.n} className="bg-white p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {s.n}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-ink">{s.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.b}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 max-w-2xl">
        <Body>
          Designed with working producers and editors so the workflow students
          learn is the same one used in commercial studios — not a watered
          down "education version".
        </Body>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Remote collaboration
          </div>
          <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-ink leading-[1.15] max-w-md">
            Schools that learn together publish together.
          </h3>
          <p className="mt-5 max-w-md text-base text-ink-muted leading-relaxed">
            Recordings made on one Podcart can be picked up, finished, or
            re-versioned by a student, teacher, or industry mentor anywhere.
            EDU Media Systems is built so a single project can span classrooms,
            campuses, and external collaborators without fragmenting into a
            dozen drives.
          </p>
          <div className="mt-6 max-w-md">
            <Body>
              The same access controls schools already trust. Nothing
              public-by-default; every collaboration is explicitly invited.
            </Body>
          </div>
        </div>
        <div className="space-y-8">
          {collabPoints.map((p) => (
            <div key={p.t} className="border-l-2 border-accent pl-6">
              <h3 className="text-lg font-semibold text-ink">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {p.b}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-2xl border border-line bg-white p-8 sm:p-10 lg:p-12">
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
              teachers always have a session to run, a format to follow, and a
              reason for students to step up to the microphone.
            </p>
            <p className="mt-4 max-w-md text-sm text-ink-muted leading-relaxed">
              Teachers reserve The Podcart through a simple in-school booking
              and scheduling layer — so the cart stops being "whoever grabs it
              first" and starts running like a shared studio.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
            {programsList.map((p) => (
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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* IDENTITY                                                           */
/* ------------------------------------------------------------------ */

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

function IdentityPanel() {
  return (
    <div>
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
          Flexible recurring packages can include monthly editing allocations,
          media workflow assistance and branded content support. Schools step
          up or down as the program grows. Exact editing volumes are scoped
          per school.
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
              <h4 className="mt-2 text-lg font-semibold text-ink">{t.name}</h4>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                {t.summary}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3 text-ink-muted">
                    <span className="text-accent" aria-hidden>—</span>
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
          implementation. Student-led broadcast concepts, modern school media
          initiatives and custom school media identities can all be built on
          the same hardware, software and workflow layer — adapted to each
          school's community and ready to scale across networks, regions and
          education departments.
        </Body>
      </div>
    </div>
  );
}

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
            <span className="text-accent" aria-hidden>—</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SUBSCRIPTION (Pricing)                                             */
/* ------------------------------------------------------------------ */

const subscriptionIncludes = [
  "Business-hours support",
  "First-term activation guidance",
  "Technical support visits where required",
  "Media program templates",
  "YouTube setup & support",
  "Optional editing support",
  "EMS Network access",
];

const scopeTiers = [
  {
    eyebrow: "Hardware",
    name: "The Podcart",
    summary: "Self-contained mobile studio, fully assembled and ready for the classroom.",
    features: [
      "Mobile recording cart, fully assembled",
      "4-channel mixer, four microphones, lighting",
      "Locked storage and integrated power",
      "Configurations for primary, secondary and tertiary",
    ],
  },
  {
    eyebrow: "Software",
    name: "Offloadr",
    summary: "Producer-mode pipeline that turns recordings into publish-ready projects schools own.",
    features: [
      "Unlimited projects per school",
      "Producer mode and publish-ready handoff",
      "Remote collaboration and guest access",
      "School-owned project history",
    ],
    accent: true,
  },
  {
    eyebrow: "Rollout",
    name: "Whole-program partnership",
    summary: "Hardware, software and ongoing operational support — sized to your program, not a template.",
    features: [
      "Podcart hardware (one or more)",
      "Offloadr seats and onboarding",
      "Teacher training and student activation",
      "Curriculum-mapped starter projects",
    ],
  },
];

function SubscriptionPanel() {
  return (
    <div>
      <H2>Built as long-term infrastructure, not a one-off purchase.</H2>
      <Lead>
        EDU Media Systems is sold as a long-term system. Schools choose the
        entry point that fits their program — hardware-only, software-only, or
        a full partnership that includes training and ongoing support. Every
        rollout is scoped per school.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {scopeTiers.map((t) => (
          <div
            key={t.name}
            className={`flex flex-col rounded-2xl border p-8 sm:p-10 ${
              t.accent ? "border-ink bg-white" : "border-line bg-white"
            }`}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {t.eyebrow}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-ink">{t.name}</h3>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed">
              {t.summary}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex gap-3 text-ink-muted">
                  <span className="text-accent" aria-hidden>—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-line pt-5 text-xs uppercase tracking-[0.14em] text-ink-muted">
              Pricing scoped per school
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-line bg-white p-8 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              The subscription is the program
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-ink leading-[1.15] max-w-md">
              Not just software. An operational layer behind the program.
            </h3>
            <p className="mt-5 max-w-md text-base text-ink-muted leading-relaxed">
              The Offloadr subscription is what keeps a school media program
              alive after the equipment lands — activation, templates, channel
              setup, optional editing help and access to the wider EMS Network
              of schools.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
            {subscriptionIncludes.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-ink">
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                  aria-hidden
                />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 max-w-2xl">
        <Body>
          Every school's setup is scoped individually. Final scope depends on
          school size, number of carts, and program ambition — pricing is
          discussed directly so it reflects what your program actually needs.
        </Body>
      </div>
    </div>
  );
}
