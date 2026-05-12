import { useEffect, useMemo, useState, type ReactElement } from "react";

const base = import.meta.env.BASE_URL;
const eduLogo = `${base}pitch/edu-logo.png`;
const offloadrLogo = `${base}pitch/offloadr-logo.png`;
const podcartLogo = `${base}pitch/podcart-logo.png`;
const podcartHero = `${base}podcart-hero.png`;

type SlideRender = (props: { index: number; total: number }) => ReactElement;

type SlideEntry = {
  id: string;
  label: string;
  render: SlideRender;
};

const ACCENT = "#6ea8ff";
const INK = "#f5f5f7";
const INK_MUTED = "rgba(245,245,247,0.62)";
const INK_SOFT = "rgba(245,245,247,0.42)";
const LINE = "rgba(245,245,247,0.08)";
const SURFACE = "#121316";
const BG = "#0a0a0b";

function Frame({
  children,
  eyebrow,
  index,
  total,
  align = "left",
}: {
  children: React.ReactNode;
  eyebrow?: string;
  index: number;
  total: number;
  align?: "left" | "center";
}) {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{
        padding: "8vh 10vw 6vh 10vw",
        backgroundColor: BG,
        color: INK,
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ color: INK_SOFT, fontSize: "0.9vw", letterSpacing: "0.18em", textTransform: "uppercase" }}
      >
        <span>{eyebrow ?? "EDU Media Systems"}</span>
        <span>
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div
        className={`flex-1 flex flex-col ${align === "center" ? "items-center text-center justify-center" : "justify-center"}`}
        style={{ paddingTop: "4vh" }}
      >
        {children}
      </div>
      <div
        className="flex items-center justify-between"
        style={{ color: INK_SOFT, fontSize: "0.85vw", letterSpacing: "0.16em", textTransform: "uppercase" }}
      >
        <span>edumediasystems.com.au</span>
        <span>Pitch Deck — 2026</span>
      </div>
    </div>
  );
}

function Headline({ children, size = "5.4vw" }: { children: React.ReactNode; size?: string }) {
  return (
    <h1
      style={{
        fontSize: size,
        fontWeight: 600,
        letterSpacing: "-0.03em",
        lineHeight: 1.02,
        color: INK,
        textWrap: "balance" as const,
      }}
    >
      {children}
    </h1>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "1.6vw",
        fontWeight: 400,
        lineHeight: 1.45,
        color: INK_MUTED,
        marginTop: "3vh",
        maxWidth: "60vw",
        textWrap: "pretty" as const,
      }}
    >
      {children}
    </p>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "1vw",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: ACCENT,
        marginBottom: "3vh",
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li
      style={{
        fontSize: "1.5vw",
        lineHeight: 1.5,
        color: INK,
        paddingLeft: "1.6vw",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: 0,
          top: "0.7vw",
          width: "0.55vw",
          height: "0.55vw",
          borderRadius: "9999px",
          background: ACCENT,
          opacity: 0.85,
        }}
      />
      {children}
    </li>
  );
}

function Card({
  title,
  body,
  caption,
}: {
  title: string;
  body: string;
  caption?: string;
}) {
  return (
    <div
      style={{
        background: SURFACE,
        border: `1px solid ${LINE}`,
        borderRadius: "0.8vw",
        padding: "2.6vw 2.4vw",
        display: "flex",
        flexDirection: "column",
        gap: "1.4vh",
      }}
    >
      {caption && (
        <div
          style={{
            fontSize: "0.85vw",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: ACCENT,
            fontWeight: 500,
          }}
        >
          {caption}
        </div>
      )}
      <div style={{ fontSize: "1.7vw", fontWeight: 600, color: INK, letterSpacing: "-0.01em" }}>{title}</div>
      <div style={{ fontSize: "1.15vw", color: INK_MUTED, lineHeight: 1.5 }}>{body}</div>
    </div>
  );
}

function LogoRow() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4vw",
        opacity: 0.85,
      }}
    >
      <img
        src={eduLogo}
        crossOrigin="anonymous"
        alt="EDU Media Systems"
        style={{ height: "2.4vw", width: "auto" }}
      />
      <span style={{ width: 1, height: "2vw", background: LINE }} />
      <img
        src={podcartLogo}
        crossOrigin="anonymous"
        alt="The Podcart"
        style={{ height: "2.4vw", width: "auto" }}
      />
      <span style={{ width: 1, height: "2vw", background: LINE }} />
      <img
        src={offloadrLogo}
        crossOrigin="anonymous"
        alt="Offloadr"
        style={{ height: "2.4vw", width: "auto", filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
}

const slides: SlideEntry[] = [
  // 01 — HERO
  {
    id: "cover",
    label: "Cover",
    render: ({ index, total }) => (
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: "10vh 10vw", backgroundColor: BG, color: INK }}
      >
        <div className="flex items-center justify-between" style={{ color: INK_SOFT, fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <img src={eduLogo} crossOrigin="anonymous" alt="EDU Media Systems" style={{ height: "2.6vw" }} />
          <span>{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div
            style={{
              fontSize: "0.95vw",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: "5vh",
              fontWeight: 500,
            }}
          >
            Pitch Deck — 2026
          </div>
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 0.94,
              color: INK,
              maxWidth: "80vw",
            }}
          >
            EDU Media Systems
          </h1>
          <p
            style={{
              fontSize: "1.7vw",
              color: INK_MUTED,
              marginTop: "4vh",
              maxWidth: "55vw",
              lineHeight: 1.4,
            }}
          >
            Modern media infrastructure for student voice, communication and digital learning.
          </p>
        </div>
        <div className="flex items-end justify-between">
          <LogoRow />
          <div style={{ fontSize: "0.9vw", color: INK_SOFT, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            edumediasystems.com.au
          </div>
        </div>
      </div>
    ),
  },

  // 02 — THE PROBLEM
  {
    id: "problem",
    label: "The Problem",
    render: ({ index, total }) => (
      <Frame eyebrow="02 — The Problem" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "5vw", alignItems: "start" }}>
          <div>
            <Eyebrow>The Problem</Eyebrow>
            <Headline>
              Schools are missing modern media infrastructure.
            </Headline>
            <SubHead>
              Student voice is becoming central to modern education, but the systems behind it haven't caught up. Equipment is fragmented, workflows are improvised, and programs depend on individual staff to keep them alive.
            </SubHead>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1.6vh", marginTop: "1vh" }}>
            <Bullet>Most schools lack scalable media systems</Bullet>
            <Bullet>Teachers are overloaded managing workflows</Bullet>
            <Bullet>Student voice opportunities are inconsistent</Bullet>
            <Bullet>Building a professional digital media program is hard</Bullet>
            <Bullet>Existing systems are fragmented and difficult to manage</Bullet>
          </ul>
        </div>
      </Frame>
    ),
  },

  // 03 — THE SOLUTION
  {
    id: "solution",
    label: "The Solution",
    render: ({ index, total }) => (
      <Frame eyebrow="03 — The Solution" index={index} total={total}>
        <Eyebrow>The Solution</Eyebrow>
        <Headline>One connected education media ecosystem.</Headline>
        <SubHead>
          EDU Media Systems combines hardware, workflow software and structured programs into one scalable infrastructure layer for modern schools.
        </SubHead>
        <div style={{ marginTop: "6vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.6vw" }}>
          {[
            { caption: "Infrastructure", title: "EDU Media Systems", body: "The connecting layer — programs, identity, training and ongoing support that keep school media systems alive." },
            { caption: "Hardware", title: "The Podcart", body: "Portable student media studio. Rolls between classrooms, built to survive a school week, simple enough for students to operate." },
            { caption: "Software", title: "Offloadr", body: "Media workflow software that turns recording sessions into clean, editor-ready projects automatically." },
          ].map((c) => (
            <Card key={c.title} caption={c.caption} title={c.title} body={c.body} />
          ))}
        </div>
      </Frame>
    ),
  },

  // 04 — THE PODCART
  {
    id: "podcart",
    label: "The Podcart",
    render: ({ index, total }) => (
      <Frame eyebrow="04 — Hardware" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <img src={podcartLogo} crossOrigin="anonymous" alt="The Podcart" style={{ height: "2.6vw", marginBottom: "3vh" }} />
            <Headline>Portable student media infrastructure designed for modern schools.</Headline>
            <SubHead>
              A complete production setup that rolls between classrooms — built to survive a school week and simple enough for students to operate.
            </SubHead>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.4vh", marginTop: "4vh" }}>
              <Bullet>Portable production setup</Bullet>
              <Bullet>Podcasting and video recording</Bullet>
              <Bullet>Mobile deployment between rooms</Bullet>
              <Bullet>School event coverage ready</Bullet>
              <Bullet>Flexible classroom integration</Bullet>
            </ul>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src={podcartHero}
              crossOrigin="anonymous"
              alt="The Podcart hero render"
              style={{
                width: "100%",
                maxWidth: "38vw",
                height: "auto",
                borderRadius: "0.8vw",
                border: `1px solid ${LINE}`,
                background: SURFACE,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </Frame>
    ),
  },

  // 05 — OFFLOADR SOFTWARE
  {
    id: "offloadr",
    label: "Offloadr",
    render: ({ index, total }) => (
      <Frame eyebrow="05 — Software" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <img
              src={offloadrLogo}
              crossOrigin="anonymous"
              alt="Offloadr"
              style={{ height: "2.6vw", marginBottom: "3vh", filter: "brightness(0) invert(1)" }}
            />
            <Headline>Media workflow software built for education environments.</Headline>
            <SubHead>
              The operational layer that turns a recording session into a clean, editor-ready project — automatically.
            </SubHead>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.4vh", marginTop: "4vh" }}>
              <Bullet>Automatic media uploads</Bullet>
              <Bullet>Editor handoff systems</Bullet>
              <Bullet>Storage management</Bullet>
              <Bullet>Student producer dashboards</Bullet>
              <Bullet>Cloud-based accessibility</Bullet>
            </ul>
          </div>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.8vw",
              padding: "2.4vw",
              display: "flex",
              flexDirection: "column",
              gap: "1.4vh",
            }}
          >
            {[
              ["Session 042 — Quick 15", "Verified · 8 files · 12.4 GB"],
              ["Assembly Recap — Term 4", "Uploading · 3 of 6 files"],
              ["Year 5 Podcast — Episode 12", "Ready for editor handoff"],
              ["Leadership Interview", "Organised · awaiting review"],
            ].map(([title, status]) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.2vw 1.4vw",
                  borderRadius: "0.5vw",
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${LINE}`,
                }}
              >
                <div style={{ fontSize: "1.05vw", color: INK, fontWeight: 500 }}>{title}</div>
                <div style={{ fontSize: "0.95vw", color: INK_MUTED }}>{status}</div>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    ),
  },

  // 06 — PRODUCER MODE
  {
    id: "producer",
    label: "Producer Mode",
    render: ({ index, total }) => (
      <Frame eyebrow="06 — Producer Mode" index={index} total={total}>
        <Eyebrow>Producer Mode</Eyebrow>
        <Headline>Student-friendly production confidence.</Headline>
        <SubHead>
          Designed to empower students without exposing complex system controls. Admin functions stay hidden — students see only what they need to record with confidence.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4vw" }}>
          <Card caption="Live" title="Recording status" body="A clear visual signal showing the session is capturing." />
          <Card caption="Live" title="Audio monitoring" body="Per-mic levels surfaced in plain language." />
          <Card caption="Live" title="Camera connectivity" body="Frame, focus and source confirmed before takes begin." />
          <Card caption="Post" title="Upload status" body="Every file confirmed offloaded and integrity-checked." />
          <Card caption="Live" title="Session timer" body="Visible runtime so sessions stay structured." />
          <Card caption="Post" title="Storage health" body="Free space and project size monitored in-app." />
        </div>
      </Frame>
    ),
  },

  // 07 — CURRICULUM ALIGNMENT
  {
    id: "curriculum",
    label: "Curriculum Alignment",
    render: ({ index, total }) => (
      <Frame eyebrow="07 — Curriculum Alignment" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <Eyebrow>Aligned With The Future Of Education</Eyebrow>
            <Headline size="4.4vw">Aligned with the future of education.</Headline>
            <p style={{ fontSize: "1.35vw", color: INK_MUTED, marginTop: "3vh", maxWidth: "44vw", lineHeight: 1.5 }}>
              Curriculum direction across modern education systems is shifting toward learner agency, wellbeing, confidence, communication, resilience and student voice — alongside traditional academic outcomes.
            </p>
            <p style={{ fontSize: "1.35vw", color: INK_MUTED, marginTop: "2.4vh", maxWidth: "44vw", lineHeight: 1.5 }}>
              EDU Media Systems directly supports this shift by giving schools the infrastructure, workflows and programs to build confident communicators through student-led media.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.4vw" }}>
            {[
              { t: "Confidence", d: "Practiced in real recording environments." },
              { t: "Communication", d: "Articulating ideas with clarity and structure." },
              { t: "Student Voice", d: "Genuine participation in school storytelling." },
            ].map((p) => (
              <div
                key={p.t}
                style={{
                  border: `1px solid ${LINE}`,
                  background: SURFACE,
                  borderRadius: "0.7vw",
                  padding: "2vw 2.2vw",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8vh",
                }}
              >
                <div style={{ fontSize: "1.6vw", fontWeight: 600, color: INK, letterSpacing: "-0.01em" }}>{p.t}</div>
                <div style={{ fontSize: "1.1vw", color: INK_MUTED, lineHeight: 1.5 }}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    ),
  },

  // 08 — EDUCATION PROGRAMS
  {
    id: "programs",
    label: "Education Programs",
    render: ({ index, total }) => (
      <Frame eyebrow="08 — Education Programs" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "5vw", alignItems: "start" }}>
          <div>
            <Eyebrow>Education Programs</Eyebrow>
            <Headline>Structured programs built into the ecosystem.</Headline>
            <SubHead>
              Schools receive structured implementation support and program frameworks to help staff and students confidently launch media initiatives — without inventing the format from scratch.
            </SubHead>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2vw", marginTop: "1vh" }}>
            {[
              "Podcast programs",
              "Student interviews",
              "Debates",
              "Cultural discussions",
              "Media literacy",
              "Communication workshops",
              "Digital storytelling",
              "Leadership opportunities",
            ].map((label) => (
              <div
                key={label}
                style={{
                  border: `1px solid ${LINE}`,
                  background: SURFACE,
                  borderRadius: "0.6vw",
                  padding: "1.6vw 1.6vw",
                  fontSize: "1.25vw",
                  color: INK,
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </Frame>
    ),
  },

  // 09 — SCALABILITY
  {
    id: "scalability",
    label: "Scalability",
    render: ({ index, total }) => (
      <Frame eyebrow="09 — Scalability" index={index} total={total}>
        <Eyebrow>Built To Scale Across Education</Eyebrow>
        <Headline>Built to scale across education.</Headline>
        <SubHead>
          Designed from day one for single schools, multi-campus rollouts and department-level deployments — same hardware, same workflows, same software, regardless of footprint.
        </SubHead>
        <div style={{ marginTop: "6vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4vw" }}>
          <Card caption="Tier 1" title="Single school" body="One Podcart, one workflow, one program — operational in a term." />
          <Card caption="Tier 2" title="Multi-campus rollout" body="Standardised deployment across grouped sites with shared identity." />
          <Card caption="Tier 3" title="Department integration" body="Enterprise licensing across regions and education systems." />
          <Card caption="Layer" title="Portable infrastructure" body="Hardware moves between rooms, sites and events without reconfiguration." />
          <Card caption="Layer" title="Cloud-based workflows" body="Project state, uploads and handoffs accessible from anywhere." />
          <Card caption="Layer" title="Standardised systems" body="One operating model from primary classroom to department office." />
        </div>
      </Frame>
    ),
  },

  // 10 — WHY IT MATTERS
  {
    id: "why",
    label: "Why It Matters",
    render: ({ index, total }) => (
      <Frame eyebrow="10 — Why It Matters" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <Eyebrow>Why It Matters</Eyebrow>
            <Headline size="4.6vw">Communication is becoming a core skill.</Headline>
            <p style={{ fontSize: "1.35vw", color: INK_MUTED, marginTop: "3vh", maxWidth: "44vw", lineHeight: 1.55 }}>
              The future of education is not just academic performance. Schools are increasingly being asked to develop confidence, communication, collaboration, creativity and digital capability alongside curriculum outcomes.
            </p>
            <p style={{ fontSize: "1.35vw", color: INK_MUTED, marginTop: "2.4vh", maxWidth: "44vw", lineHeight: 1.55 }}>
              EDU Media Systems provides schools with the infrastructure to make this practical, scalable and sustainable.
            </p>
          </div>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.8vw",
              padding: "2.6vw",
              display: "flex",
              flexDirection: "column",
              gap: "1.6vh",
            }}
          >
            <div style={{ fontSize: "0.9vw", letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>
              Outcomes
            </div>
            {[
              "Confidence",
              "Communication",
              "Collaboration",
              "Creativity",
              "Digital capability",
            ].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: "1.5vw",
                  color: INK,
                  fontWeight: 500,
                  paddingBottom: "1.2vh",
                  borderBottom: `1px solid ${LINE}`,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </Frame>
    ),
  },

  // 11 — FINAL VISION
  {
    id: "vision",
    label: "Final Vision",
    render: ({ index, total }) => (
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: "10vh 10vw", backgroundColor: BG, color: INK }}
      >
        <div className="flex items-center justify-between" style={{ color: INK_SOFT, fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <img src={eduLogo} crossOrigin="anonymous" alt="EDU Media Systems" style={{ height: "2.6vw" }} />
          <span>{String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              fontSize: "0.95vw",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: "5vh",
              fontWeight: 500,
            }}
          >
            Final Vision
          </div>
          <h1
            style={{
              fontSize: "6.2vw",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              maxWidth: "70vw",
              color: INK,
            }}
          >
            The future of student-led media.
          </h1>
          <p
            style={{
              fontSize: "1.7vw",
              color: INK_MUTED,
              marginTop: "5vh",
              maxWidth: "60vw",
              lineHeight: 1.45,
            }}
          >
            EDU Media Systems is building the infrastructure layer for modern student communication, media literacy and digital storytelling.
          </p>
          <p
            style={{
              fontSize: "1.2vw",
              color: INK_SOFT,
              marginTop: "4vh",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Designed for schools — built for the future.
          </p>
        </div>
        <div className="flex items-end justify-between">
          <LogoRow />
          <div style={{ fontSize: "0.9vw", color: INK_SOFT, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            edumediasystems.com.au
          </div>
        </div>
      </div>
    ),
  },
];

export default function Pitch() {
  const total = slides.length;
  const initialSlide = useMemo(() => {
    if (typeof window === "undefined") return 0;
    const n = Number(new URLSearchParams(window.location.search).get("slide"));
    if (Number.isFinite(n) && n >= 1 && n <= slides.length) return n - 1;
    return 0;
  }, []);
  const [current, setCurrent] = useState(initialSlide);

  const printMode = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).has("print");
  }, []);

  const scrollMode = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).has("scroll");
  }, []);

  const embedMode = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).has("embed");
  }, []);

  useEffect(() => {
    if (!printMode) return;
    const t = window.setTimeout(() => window.print(), 600);
    return () => window.clearTimeout(t);
  }, [printMode]);

  useEffect(() => {
    if (printMode) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setCurrent((c) => Math.min(c + 1, total - 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setCurrent((c) => Math.max(c - 1, 0));
      } else if (e.key === "Home") {
        setCurrent(0);
      } else if (e.key === "End") {
        setCurrent(total - 1);
      } else if (e.key === "Escape") {
        window.location.href = import.meta.env.BASE_URL || "/";
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [printMode, total]);

  if (scrollMode) {
    return (
      <div style={{ background: "#000", minHeight: "100vh" }}>
        {slides.map((s, i) => (
          <iframe
            key={s.id}
            src={`${window.location.pathname}?slide=${i + 1}&embed`}
            title={s.label}
            style={{
              display: "block",
              width: "100vw",
              height: "56.25vw",
              border: 0,
              background: BG,
            }}
          />
        ))}
      </div>
    );
  }

  if (printMode) {
    return (
      <div style={{ background: BG }}>
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="pitch-print-slide"
            style={{
              width: "1920px",
              height: "1080px",
              position: "relative",
              overflow: "hidden",
              pageBreakAfter: "always",
              breakAfter: "page",
              background: BG,
            }}
          >
            <div style={{ position: "absolute", inset: 0, fontSize: "16px" }}>
              {/*
                Inside the print canvas the root is fixed at 1920x1080,
                so vw/vh inside the slides resolve against the viewport,
                not the slide. Wrap each slide in a fixed 1920x1080 box
                where vw/vh map 1:1 by using inline width/height units of
                the parent and scaling via CSS variables.
              */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "1920px",
                  height: "1080px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100vw",
                    height: "100vh",
                    transform: "none",
                  }}
                >
                  {s.render({ index: i + 1, total })}
                </div>
              </div>
            </div>
          </div>
        ))}
        <style>{`
          @page { size: 1920px 1080px; margin: 0; }
          html, body { background: ${BG}; margin: 0; padding: 0; }
          @media print {
            .pitch-print-slide { page-break-after: always; }
          }
        `}</style>
      </div>
    );
  }

  const slide = slides[current];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "min(100vw, calc(100vh * 16 / 9))",
          height: "min(100vh, calc(100vw * 9 / 16))",
          background: BG,
          overflow: "hidden",
        }}
      >
        {slide.render({ index: current + 1, total })}
      </div>
      {!embedMode && <div
        style={{
          position: "fixed",
          bottom: "1.4vh",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.2vw",
          fontSize: "0.85vw",
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        <span>← →</span>
        <span>{slide.label}</span>
        <span>·</span>
        <span>
          {current + 1} / {total}
        </span>
      </div>}
      {!embedMode && <div
        style={{
          position: "fixed",
          top: "1.4vh",
          right: "1.4vw",
          display: "flex",
          alignItems: "center",
          gap: "1.6vw",
          fontSize: "0.85vw",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        <a
          href={`${import.meta.env.BASE_URL || "/"}edu-media-systems-pitch-deck.pdf`}
          download="EDU-Media-Systems-Pitch-Deck.pdf"
          style={{
            background: ACCENT,
            color: "#0a0a0b",
            border: 0,
            padding: "0.7vw 1.1vw",
            fontSize: "0.8vw",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 600,
            cursor: "pointer",
            borderRadius: 2,
            fontFamily: "inherit",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          ↓ Download PDF
        </a>
        <button
          type="button"
          onClick={() => {
            const url = `${window.location.pathname}?scroll`;
            window.open(url, "_blank", "noopener");
          }}
          style={{
            background: "transparent",
            color: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.25)",
            padding: "0.7vw 1.1vw",
            fontSize: "0.8vw",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 500,
            cursor: "pointer",
            borderRadius: 2,
            fontFamily: "inherit",
          }}
        >
          ☰ Scroll View
        </button>
        <a
          href={import.meta.env.BASE_URL || "/"}
          style={{
            color: "rgba(255,255,255,0.55)",
            textDecoration: "none",
          }}
        >
          Esc — Home
        </a>
      </div>}
    </div>
  );
}
