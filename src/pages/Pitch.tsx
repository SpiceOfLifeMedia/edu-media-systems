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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: "1.05vw",
        color: INK,
        padding: "0.6vh 1vw",
        border: `1px solid ${LINE}`,
        borderRadius: "9999px",
        background: "rgba(255,255,255,0.025)",
      }}
    >
      {children}
    </span>
  );
}

function ColumnCard({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: SURFACE,
        border: `1px solid ${LINE}`,
        borderRadius: "0.8vw",
        padding: "2.2vw",
        display: "flex",
        flexDirection: "column",
        gap: "1.4vh",
      }}
    >
      <div
        style={{
          fontSize: "0.85vw",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: ACCENT,
          fontWeight: 500,
          marginBottom: "0.4vh",
        }}
      >
        {caption}
      </div>
      {children}
    </div>
  );
}

function Listed({ items }: { items: string[] }) {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
      {items.map((t) => (
        <li key={t} style={{ fontSize: "1.1vw", color: INK }}>
          {t}
        </li>
      ))}
    </ul>
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

  // 03 — WHY NOW
  {
    id: "why-now",
    label: "Why Now",
    render: ({ index, total }) => (
      <Frame eyebrow="03 — Why Now" index={index} total={total}>
        <Eyebrow>Why Now</Eyebrow>
        <Headline size="3.6vw">Communication is becoming one of the most important skills in modern education.</Headline>
        <p style={{ fontSize: "1.45vw", fontWeight: 400, lineHeight: 1.55, color: INK_MUTED, marginTop: "3vh", maxWidth: "58vw" }}>
          Schools are increasingly being asked to develop more than academic outcomes alone. EDU Media Systems exists to help schools operationalise communication, learner agency and student voice through real student-led media infrastructure.
        </p>
        <div style={{ marginTop: "4vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.8vw" }}>
          <ColumnCard caption="Modern Education Is Shifting Toward">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85vw", marginTop: "0.4vh" }}>
              {["Communication","Learner agency","Confidence","Collaboration","Creativity","Student voice","Participation","Wellbeing","Digital capability"].map((t)=>(
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </ColumnCard>
          <ColumnCard caption="While Schools Are Navigating">
            <Listed items={[
              "Fragmented media systems",
              "Rising student disengagement",
              "Inconsistent communication opportunities",
              "Growing expectations around digital literacy",
              "Demand for authentic student participation",
            ]} />
          </ColumnCard>
        </div>
        <p style={{ fontSize: "1.2vw", color: INK, marginTop: "3.5vh", maxWidth: "62vw", lineHeight: 1.5, fontStyle: "italic", letterSpacing: "-0.005em" }}>
          Students don't become confident communicators through worksheets alone. They become confident through repeated, real-world participation.
        </p>
      </Frame>
    ),
  },

  // 04 — THE SOLUTION
  {
    id: "solution",
    label: "The Solution",
    render: ({ index, total }) => (
      <Frame eyebrow="04 — The Solution" index={index} total={total}>
        <Eyebrow>The Solution</Eyebrow>
        <Headline>One connected education media ecosystem.</Headline>
        <SubHead>
          EDU Media Systems combines hardware, workflow software and structured programs into one scalable infrastructure layer for modern schools.
        </SubHead>
        <div style={{ marginTop: "5vh", marginBottom: "3vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.8vw" }}>
          {[
            { caption: "Infrastructure", title: "EDU Media Systems", body: "The connecting layer — programs, identity, training and ongoing support that keep school media systems alive." },
            { caption: "Hardware", title: "The Podcart", body: "Portable student media studio. Rolls between classrooms, built to survive a school week, simple enough for students to operate." },
            { caption: "Software", title: "Offloadr", body: "The missing link between recording and editing — uploads, verifies and organises every file the moment a session ends." },
          ].map((c) => (
            <div
              key={c.title}
              style={{
                background: SURFACE,
                border: `1px solid ${LINE}`,
                borderRadius: "0.9vw",
                padding: "3vw 2.6vw",
                display: "flex",
                flexDirection: "column",
                gap: "1.6vh",
              }}
            >
              <div style={{ fontSize: "0.9vw", letterSpacing: "0.26em", textTransform: "uppercase", color: ACCENT, fontWeight: 500, marginBottom: "0.6vh" }}>{c.caption}</div>
              <div style={{ fontSize: "1.85vw", fontWeight: 600, color: INK, letterSpacing: "-0.01em" }}>{c.title}</div>
              <div style={{ fontSize: "1.15vw", color: INK_MUTED, lineHeight: 1.55 }}>{c.body}</div>
            </div>
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
      <Frame eyebrow="05 — Hardware" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "4vw", alignItems: "center" }}>
          <div>
            <img src={podcartLogo} crossOrigin="anonymous" alt="The Podcart" style={{ height: "2.6vw", marginBottom: "3vh" }} />
            <Headline size="3.4vw">Portable student media infrastructure for modern schools.</Headline>
            <SubHead>
              A complete production setup that rolls between classrooms — built to survive a school week and simple enough for students to operate.
            </SubHead>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.2vh", marginTop: "3vh" }}>
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
                maxWidth: "44vw",
                maxHeight: "78vh",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 2.4vw 3vw rgba(0,0,0,0.55))",
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
      <Frame eyebrow="06 — Software" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <img
              src={offloadrLogo}
              crossOrigin="anonymous"
              alt="Offloadr"
              style={{ height: "2.6vw", marginBottom: "3vh", filter: "brightness(0) invert(1)" }}
            />
            <Headline size="3.4vw">The missing link between recording and editing.</Headline>
            <SubHead>
              Offloadr doesn't record — it takes over when the session ends. It automatically uploads, checksum-verifies and organises every file into a clean, publish-ready project, so teachers and student media teams stop chasing files and start producing.
            </SubHead>
          </div>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.9vw",
              padding: "2.2vw 2.2vw",
              display: "flex",
              flexDirection: "column",
              gap: "1.1vh",
            }}
          >
            {[
              ["Session 042 — Quick 15", "Verified · 8 files · checksum confirmed"],
              ["Assembly Recap — Term 4", "Uploading · 3 of 6 files · resumable"],
              ["Year 5 Podcast — Episode 12", "Publish-ready · share link issued"],
              ["EMS Debate Session", "Processing · audio + 2 cams"],
              ["Parent Reflection Upload", "Verified · ready for review"],
              ["Leadership Interview", "Organised · awaiting teacher review"],
            ].map(([title, status]) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5vh",
                  padding: "1.3vw 1.5vw",
                  borderRadius: "0.55vw",
                  background: "rgba(255,255,255,0.035)",
                  border: `1px solid rgba(245,245,247,0.1)`,
                }}
              >
                <div style={{ fontSize: "1.15vw", color: INK, fontWeight: 500, letterSpacing: "-0.005em" }}>{title}</div>
                <div style={{ fontSize: "0.95vw", color: "rgba(245,245,247,0.7)", fontWeight: 400, letterSpacing: "0.01em" }}>{status}</div>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    ),
  },

  // 07 — HOW OFFLOADR WORKS
  {
    id: "offloadr-flow",
    label: "How Offloadr Works",
    render: ({ index, total }) => (
      <Frame eyebrow="07 — How Offloadr Works" index={index} total={total}>
        <Eyebrow>How Offloadr Works</Eyebrow>
        <Headline size="3.4vw">Five steps. Nothing the editor has to chase.</Headline>
        <SubHead>
          Offloadr is the layer between recording ending and editing beginning. No manual file collection, no fragmented folders, no teacher overhead — every session lands as a clean, verified project.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "flex", alignItems: "stretch", justifyContent: "space-between", gap: "0.6vw" }}>
          {[
            { n: "01", t: "Record", b: "On the same gear you already use. Offloadr stays out of the recording path." },
            { n: "02", t: "Upload", b: "Files land in the right project folder, every time. Resumable if the connection drops." },
            { n: "03", t: "Verify", b: "Checksum per file. A missing-file checklist runs against the expected setup." },
            { n: "04", t: "Handoff", b: "One revocable share link with producer notes attached. No login for the editor." },
            { n: "05", t: "Publish", b: "A clean project ready for YouTube, assemblies, newsletters or classroom reflections." },
          ].map((s, i, arr) => (
            <div key={s.n} style={{ display: "flex", alignItems: "stretch", flex: 1, gap: "0.6vw" }}>
              <div style={{ flex: 1, background: SURFACE, border: `1px solid ${LINE}`, borderRadius: "0.7vw", padding: "1.8vw 1.4vw", display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <div style={{ fontSize: "0.85vw", letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>{s.n}</div>
                <div style={{ fontSize: "1.5vw", fontWeight: 600, color: INK, letterSpacing: "-0.01em" }}>{s.t}</div>
                <div style={{ fontSize: "1vw", color: INK_MUTED, lineHeight: 1.45 }}>{s.b}</div>
              </div>
              {i < arr.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", color: INK_SOFT, fontSize: "1.6vw" }}>→</div>
              )}
            </div>
          ))}
        </div>
      </Frame>
    ),
  },

  // 08 — PRODUCER MODE — LIVE CONFIDENCE
  {
    id: "producer-live",
    label: "Producer Mode — Live",
    render: ({ index, total }) => (
      <Frame eyebrow="08 — Producer Mode" index={index} total={total}>
        <Eyebrow>Producer Mode — Live Confidence</Eyebrow>
        <Headline size="3.8vw">Operational confidence before you press record.</Headline>
        <SubHead>
          Producer Mode runs in the studio. It checks the kit, watches the uploads and tells students and teachers the moment something expected from the session isn't there yet — admin functions stay hidden.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4vw" }}>
          <Card caption="Pre-record" title="Kit checks" body="Audio, cameras, drive and helper app all verified before record." />
          <Card caption="Pre-record" title="Recording readiness" body="A single status — Ready, Warning, or Not ready. No guessing." />
          <Card caption="In session" title="Take organisation" body="Tag take number, talent and mic assignments while it's still fresh." />
        </div>
      </Frame>
    ),
  },

  // 07 — PRODUCER MODE — SESSION INTEGRITY
  {
    id: "producer-post",
    label: "Producer Mode — Session Integrity",
    render: ({ index, total }) => (
      <Frame eyebrow="09 — Producer Mode" index={index} total={total}>
        <Eyebrow>Producer Mode — Session Integrity</Eyebrow>
        <Headline size="3.8vw">Production doesn't end when recording stops.</Headline>
        <SubHead>
          Every file accounted for, every project verified, every gap surfaced before it becomes a Tuesday-morning DM hunt for the missing lav from take 4.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4vw" }}>
          <Card caption="Post" title="Session status" body="Uploads land in real time. You see what's still on a card before anyone leaves the room." />
          <Card caption="Post" title="Project verification" body="What landed is compared against the expected setup for this project." />
          <Card caption="Post" title="Missing-file alerts" body="Flagged before the editor or teacher ever opens the project. Nothing slips." />
        </div>
      </Frame>
    ),
  },

  // 07 — CURRICULUM ALIGNMENT
  {
    id: "curriculum",
    label: "Curriculum Alignment",
    render: ({ index, total }) => (
      <Frame eyebrow="10 — Curriculum Alignment" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <Eyebrow>Aligned With The Future Of Education</Eyebrow>
            <Headline size="3.6vw">Aligned with the future of education.</Headline>
            <p style={{ fontSize: "1.25vw", color: INK_MUTED, marginTop: "4vh", maxWidth: "42vw", lineHeight: 1.6 }}>
              The future direction of education is increasingly focused not only on what students know, but how confidently they can communicate, contribute and participate.
            </p>
            <p style={{ fontSize: "1.25vw", color: INK_MUTED, marginTop: "2.5vh", maxWidth: "42vw", lineHeight: 1.6 }}>
              EDU Media Systems helps schools transform communication and learner agency into practical student experiences — confidence built through repeated participation in authentic communication environments.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2vw" }}>
            {[
              "Learner agency",
              "Communication capability",
              "Oral communication",
              "Authentic speaking environments",
              "Participation",
              "Student voice",
              "Confidence",
              "Digital capability",
            ].map((t) => (
              <div
                key={t}
                style={{
                  border: `1px solid ${LINE}`,
                  background: SURFACE,
                  borderRadius: "0.7vw",
                  padding: "1.9vw 1.7vw",
                  fontSize: "1.2vw",
                  color: INK,
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
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

  // 08 — EDUCATION PROGRAMS
  {
    id: "programs",
    label: "Education Programs",
    render: ({ index, total }) => (
      <Frame eyebrow="11 — Education Programs" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "5vw", alignItems: "start" }}>
          <div>
            <Eyebrow>Education Programs</Eyebrow>
            <Headline size="3.4vw">Structured programs built into the ecosystem.</Headline>
            <SubHead>
              Schools receive structured implementation support and program frameworks to help staff and students confidently launch media initiatives — without inventing the format from scratch.
            </SubHead>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.4vw", marginTop: "1vh" }}>
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
                  border: `1px solid rgba(110,168,255,0.22)`,
                  background: "linear-gradient(180deg, rgba(110,168,255,0.05) 0%, rgba(18,19,22,0.95) 100%)",
                  borderRadius: "0.85vw",
                  padding: "2vw 1.9vw",
                  fontSize: "1.3vw",
                  color: INK,
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                  boxShadow: "0 0.6vw 1.6vw rgba(0,0,0,0.35), inset 0 0 0 1px rgba(110,168,255,0.04)",
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

  // 12 — SCHOOL MEDIA IDENTITY
  {
    id: "media-identity",
    label: "School Media Identity",
    render: ({ index, total }) => (
      <Frame eyebrow="12 — School Media Identity" index={index} total={total}>
        <Eyebrow>Building School Media Identity</Eyebrow>
        <Headline size="3.6vw">
          More than equipment.
          <br />
          A complete school media program.
        </Headline>
        <SubHead>
          EDU Media Systems helps schools build student-led media programs that are properly branded, properly produced and embedded into school culture — programs students genuinely want to participate in.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.4vw" }}>
          <ColumnCard caption="Brand Identity">
            <Listed items={[
              "Custom media branding",
              "Logo development",
              "School-colour integration",
              "Thumbnail templates",
              "Intro and outro packages",
            ]} />
          </ColumnCard>
          <ColumnCard caption="Production & Publishing Systems">
            <Listed items={[
              "Branded production setup",
              "Overlays and graphics",
              "YouTube channel setup",
              "Upload and publishing workflows",
              "Reusable publishing templates",
            ]} />
          </ColumnCard>
        </div>
      </Frame>
    ),
  },

  // 13 — REAL SCHOOL IMPLEMENTATION
  {
    id: "implementation",
    label: "Real School Implementation",
    render: ({ index, total }) => (
      <Frame eyebrow="13 — Real School Implementation" index={index} total={total}>
        <Eyebrow>Designed For Real School Environments</Eyebrow>
        <Headline size="3.6vw">Built around how schools actually operate.</Headline>
        <SubHead>
          EDU Media Systems is designed to integrate into everyday school life — not sit unused in a storage room. A typical week can look like this:
        </SubHead>
        <div style={{ marginTop: "4vh", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1vw" }}>
          {[
            { d: "Mon", t: "Student leadership podcast" },
            { d: "Tue", t: "Quick 15 classroom reflections" },
            { d: "Wed", t: "Assembly recap production" },
            { d: "Thu", t: "EMS Network live participation" },
            { d: "Fri", t: "Student interviews & wellbeing discussions" },
          ].map((day) => (
            <div
              key={day.d}
              style={{
                background: SURFACE,
                border: `1px solid ${LINE}`,
                borderRadius: "0.7vw",
                padding: "1.8vw 1.4vw",
                display: "flex",
                flexDirection: "column",
                gap: "1.2vh",
                minHeight: "10vh",
              }}
            >
              <div style={{ fontSize: "0.85vw", letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>{day.d}</div>
              <div style={{ fontSize: "1.1vw", color: INK, fontWeight: 500, lineHeight: 1.35 }}>{day.t}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "1.05vw", color: INK_SOFT, marginTop: "4vh", maxWidth: "72vw", lineHeight: 1.55 }}>
          Not every session needs a major production or public publishing. Much of the strongest content stays classroom-based, teacher-assessed and parent-shared — oral presentations, literacy reflections, leadership communication, debate programs, event coverage and school storytelling.
        </p>
      </Frame>
    ),
  },

  // 14 — SUBSCRIPTION ECOSYSTEM
  {
    id: "subscription",
    label: "Subscription Ecosystem",
    render: ({ index, total }) => (
      <Frame eyebrow="14 — Subscription Ecosystem" index={index} total={total}>
        <Eyebrow>Why Schools Stay Subscribed</Eyebrow>
        <Headline size="3.6vw">The subscription is the ecosystem.</Headline>
        <SubHead>
          The rollout is only the beginning. EDU Media Systems is designed to provide ongoing activation, support and participation long after installation — so schools never feel: "we have the equipment, but what do we actually do with it?"
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.6vw" }}>
          <ColumnCard caption="Ongoing Support">
            <Listed items={[
              "Implementation guidance",
              "Operational coaching",
              "Editing assistance",
              "Workflow & booking management",
              "Templates and teacher guidance",
              "Publishing & YouTube support",
            ]} />
          </ColumnCard>
          <ColumnCard caption="EMS Network">
            <Listed items={[
              "Interschool podcasts and debates",
              "Live guest sessions and Q&A",
              "Student leadership panels",
              "Cultural and community discussions",
              "Communication initiatives",
              "Media literacy workshops",
            ]} />
          </ColumnCard>
        </div>
        <p style={{ fontSize: "1.2vw", color: INK, marginTop: "5vh", maxWidth: "62vw", lineHeight: 1.55, fontStyle: "italic", letterSpacing: "-0.005em" }}>
          The value is participation, representation and student voice — not celebrity access.
        </p>
      </Frame>
    ),
  },

  // 15 — SCALABILITY — DEPLOYMENT TIERS
  {
    id: "scalability-tiers",
    label: "Scalability — Tiers",
    render: ({ index, total }) => (
      <Frame eyebrow="15 — Scalability" index={index} total={total}>
        <Eyebrow>Built To Scale Across Education</Eyebrow>
        <Headline size="3.8vw">Built to scale — from one classroom to a whole department.</Headline>
        <SubHead>
          Designed from day one for single schools, multi-campus rollouts and department-level deployments — same hardware, same workflows, same software, regardless of footprint.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4vw" }}>
          <Card caption="Tier 1" title="Single school" body="One Podcart, one workflow, one program — operational in a term." />
          <Card caption="Tier 2" title="Multi-campus rollout" body="Standardised deployment across grouped sites with shared identity." />
          <Card caption="Tier 3" title="Department integration" body="Enterprise licensing across regions and education systems." />
        </div>
      </Frame>
    ),
  },

  // 11 — SCALABILITY — OPERATIONAL LAYERS
  {
    id: "scalability-layers",
    label: "Scalability — Layers",
    render: ({ index, total }) => (
      <Frame eyebrow="16 — Scalability" index={index} total={total}>
        <Eyebrow>The Operational Layers</Eyebrow>
        <Headline size="3.8vw">One operating model. Three layers that scale with you.</Headline>
        <SubHead>
          The same infrastructure stack underneath every deployment — so a single school and a multi-region department run on identical foundations.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4vw" }}>
          <Card caption="Layer" title="Portable infrastructure" body="Hardware moves between rooms, sites and events without reconfiguration." />
          <Card caption="Layer" title="Cloud-based workflows" body="Project state, uploads and handoffs accessible from anywhere." />
          <Card caption="Layer" title="Standardised systems" body="One operating model from primary classroom to department office." />
        </div>
      </Frame>
    ),
  },

  // 17 — FINAL VISION
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
