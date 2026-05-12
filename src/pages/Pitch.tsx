import { useEffect, useMemo, useState, type ReactElement } from "react";

const base = import.meta.env.BASE_URL;
const eduLogo = `${base}pitch/edu-logo.png`;
const offloadrLogo = `${base}pitch/offloadr-logo.png`;
const podcartLogo = `${base}pitch/podcart-logo.png`;

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
        <span>Investor Brief — 2026</span>
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
        style={{ height: "2.4vw", width: "auto", filter: "invert(1) brightness(1.1)" }}
      />
      <span style={{ width: 1, height: "2vw", background: LINE }} />
      <img
        src={podcartLogo}
        crossOrigin="anonymous"
        alt="The Podcart"
        style={{ height: "2.4vw", width: "auto", filter: "invert(1) brightness(1.1)" }}
      />
      <span style={{ width: 1, height: "2vw", background: LINE }} />
      <img
        src={offloadrLogo}
        crossOrigin="anonymous"
        alt="Offloadr"
        style={{ height: "2.4vw", width: "auto", filter: "invert(1) brightness(1.1)" }}
      />
    </div>
  );
}

const slides: SlideEntry[] = [
  {
    id: "cover",
    label: "Cover",
    render: ({ index, total }) => (
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: "10vh 10vw", backgroundColor: BG, color: INK }}
      >
        <div className="flex items-center justify-between" style={{ color: INK_SOFT, fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <img
            src={eduLogo}
            crossOrigin="anonymous"
            alt="EDU Media Systems"
            style={{ height: "2.6vw", filter: "invert(1) brightness(1.1)" }}
          />
          <span>
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <div>
          <div
            style={{
              fontSize: "0.95vw",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: "5vh",
              fontWeight: 500,
            }}
          >
            Investor Brief
          </div>
          <h1
            style={{
              fontSize: "7.5vw",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 0.96,
              maxWidth: "70vw",
              color: INK,
            }}
          >
            Student voice.
            <br />
            Professionally delivered.
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
            Modern media infrastructure for schools — hardware, software, and the workflow that holds them together.
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
  {
    id: "problem",
    label: "The Problem",
    render: ({ index, total }) => (
      <Frame eyebrow="01 — The Problem" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "5vw", alignItems: "start" }}>
          <div>
            <Eyebrow>The Problem</Eyebrow>
            <Headline>
              Schools want student media programs.
              <br />
              Most cannot sustain them.
            </Headline>
            <SubHead>
              The equipment shows up. The excitement fades. Within a term the gear is in a cupboard, the files are scattered, and one teacher is left holding the program together.
            </SubHead>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1.6vh", marginTop: "1vh" }}>
            <Bullet>Equipment too complicated for daily classroom use</Bullet>
            <Bullet>Teachers overloaded; no time to manage workflows</Bullet>
            <Bullet>Files scattered across phones, drives and laptops</Bullet>
            <Bullet>Programs depend on one passionate staff member</Bullet>
            <Bullet>No clear path from recording to publishing</Bullet>
            <Bullet>Expensive gear ends up sitting unused</Bullet>
          </ul>
        </div>
      </Frame>
    ),
  },
  {
    id: "why",
    label: "Why It Matters",
    render: ({ index, total }) => (
      <Frame eyebrow="02 — Why This Matters" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "6vw", alignItems: "center" }}>
          <div>
            <Eyebrow>Why This Matters</Eyebrow>
            <Headline>
              Communication is becoming one of the most important skills in education.
            </Headline>
            <SubHead>
              Schools are preparing students for communication-driven futures. EDU Media Systems gives them a practical way to build those skills through authentic media production and student-led participation.
            </SubHead>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.4vw" }}>
            {[
              "Oracy",
              "Student voice",
              "Media literacy",
              "Collaboration",
              "Confidence",
              "Leadership",
            ].map((label) => (
              <div
                key={label}
                style={{
                  border: `1px solid ${LINE}`,
                  background: SURFACE,
                  borderRadius: "0.6vw",
                  padding: "1.8vw 1.6vw",
                  fontSize: "1.35vw",
                  fontWeight: 500,
                  color: INK,
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
  {
    id: "solution",
    label: "The Solution",
    render: ({ index, total }) => (
      <Frame eyebrow="03 — The Solution" index={index} total={total}>
        <Eyebrow>The Solution</Eyebrow>
        <Headline>One connected system for modern school media.</Headline>
        <SubHead>
          Hardware, software, branding, training and ongoing activation — designed to operate as a single ecosystem rather than a pile of parts.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.2vw" }}>
          {[
            { t: "The Podcart", d: "Portable studio hardware" },
            { t: "Offloadr", d: "Upload and project software" },
            { t: "Producer Mode", d: "Confidence dashboard" },
            { t: "EMS Network", d: "Live cross-school sessions" },
            { t: "School Identity", d: "Branding & channels" },
            { t: "Initiatives", d: "Ready-to-run formats" },
            { t: "Training", d: "Onboarding & coaching" },
            { t: "Activation", d: "First-term momentum" },
          ].map((c) => (
            <div
              key={c.t}
              style={{
                border: `1px solid ${LINE}`,
                background: SURFACE,
                borderRadius: "0.6vw",
                padding: "1.8vw 1.4vw",
                display: "flex",
                flexDirection: "column",
                gap: "0.8vh",
              }}
            >
              <div style={{ fontSize: "1.3vw", fontWeight: 600, color: INK, letterSpacing: "-0.01em" }}>{c.t}</div>
              <div style={{ fontSize: "1vw", color: INK_MUTED, lineHeight: 1.45 }}>{c.d}</div>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    id: "podcart",
    label: "The Podcart",
    render: ({ index, total }) => (
      <Frame eyebrow="04 — Hardware" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <img
              src={podcartLogo}
              crossOrigin="anonymous"
              alt="The Podcart"
              style={{ height: "2.6vw", filter: "invert(1) brightness(1.1)", marginBottom: "3vh" }}
            />
            <Headline>A complete student media studio that rolls between classrooms.</Headline>
            <SubHead>
              Foldable, secure and student-friendly. A Mac Mini workstation, integrated screens, professional microphones and remote-guest capability — cable-managed and built to survive a school week.
            </SubHead>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1.4vh" }}>
            <Bullet>Portable media workstation with foldable secure design</Bullet>
            <Bullet>Mac Mini workstation and integrated screens</Bullet>
            <Bullet>Professional microphones, classroom-ready</Bullet>
            <Bullet>Remote guest capability built in</Bullet>
            <Bullet>Cable-managed, student-friendly operation</Bullet>
          </ul>
        </div>
      </Frame>
    ),
  },
  {
    id: "offloadr",
    label: "Offloadr",
    render: ({ index, total }) => (
      <Frame eyebrow="05 — Software" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <img
              src={offloadrLogo}
              crossOrigin="anonymous"
              alt="Offloadr"
              style={{ height: "2.6vw", filter: "invert(1) brightness(1.1)", marginBottom: "3vh" }}
            />
            <Headline>The missing link between recording and editing.</Headline>
            <SubHead>
              Offloadr automatically uploads, verifies, organises and prepares media projects for editor handoff — the operational layer that turns a recording session into a clean project.
            </SubHead>
          </div>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.8vw",
              padding: "2.4vw",
              display: "flex",
              flexDirection: "column",
              gap: "1.6vh",
            }}
          >
            {[
              ["Session 042 — Quick 15", "Verified · 8 files · 12.4 GB"],
              ["Assembly Recap — Term 4", "Uploading · 3 of 6 files"],
              ["Year 5 Podcast — Ep. 12", "Ready for editor handoff"],
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
  {
    id: "producer",
    label: "Producer Mode",
    render: ({ index, total }) => (
      <Frame eyebrow="06 — Workflow" index={index} total={total}>
        <Eyebrow>Producer Mode</Eyebrow>
        <Headline>Simple enough for students. Powerful enough for schools.</Headline>
        <SubHead>
          A confidence dashboard that tells students and teachers exactly what is working — before, during and after a recording.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4vw" }}>
          <Card caption="Live" title="Recording state" body="Students can see at a glance whether the session is capturing." />
          <Card caption="Live" title="Audio status" body="Per-mic levels and signal health surfaced in plain language." />
          <Card caption="Live" title="Video status" body="Frame, focus and source confirmed before takes begin." />
          <Card caption="Post" title="Upload verification" body="Every file confirmed offloaded and integrity-checked." />
          <Card caption="Post" title="Storage health" body="Free space and project size monitored on the workstation." />
          <Card caption="Post" title="Project readiness" body="Handoff summary the editor or teacher can act on." />
        </div>
      </Frame>
    ),
  },
  {
    id: "identity",
    label: "School Media Identity",
    render: ({ index, total }) => (
      <Frame eyebrow="07 — Identity & Content" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5vw", alignItems: "start" }}>
          <div>
            <Eyebrow>School Media Identity</Eyebrow>
            <Headline>More than equipment. A complete school media identity.</Headline>
            <SubHead>
              Student-led media programs become part of school culture when supported by strong branding, clear workflows and ongoing activation.
            </SubHead>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1vw", marginTop: "1vh" }}>
            {[
              "Custom media branding",
              "Logo development",
              "School-colour integration",
              "YouTube channel setup",
              "Upload workflows",
              "Thumbnail templates",
              "Overlays & graphics",
              "Intro / outro packages",
              "Production templates",
              "Rollout guidance",
            ].map((label) => (
              <div
                key={label}
                style={{
                  border: `1px solid ${LINE}`,
                  background: SURFACE,
                  borderRadius: "0.5vw",
                  padding: "1.3vw 1.4vw",
                  fontSize: "1.1vw",
                  color: INK,
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
  {
    id: "network",
    label: "EMS Network",
    render: ({ index, total }) => (
      <Frame eyebrow="08 — EMS Network" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "5vw", alignItems: "start" }}>
          <div>
            <Eyebrow>EMS Network</Eyebrow>
            <Headline>A connected student media network for schools.</Headline>
            <SubHead>
              Schools join the EMS Network and participate in scheduled live podcast sessions, discussions and collaborative initiatives — contributing segments, asking questions and showcasing student voice across schools.
            </SubHead>
            <p style={{ fontSize: "1.15vw", color: INK_SOFT, marginTop: "3vh", maxWidth: "32vw", lineHeight: 1.5 }}>
              The value is not celebrity culture. The value is participation, confidence and communication.
            </p>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1.3vh" }}>
            <Bullet>Participate live alongside other schools</Bullet>
            <Bullet>Contribute segments and interview guests</Bullet>
            <Bullet>Showcase student voice statewide</Bullet>
            <Bullet>Topics: leadership, wellbeing, debates, careers</Bullet>
            <Bullet>Guest speakers across sport, media and industry</Bullet>
            <Bullet>Scheduled cadence — not one-off events</Bullet>
          </ul>
        </div>
      </Frame>
    ),
  },
  {
    id: "initiatives",
    label: "Structured Initiatives",
    render: ({ index, total }) => (
      <Frame eyebrow="09 — Structured Initiatives" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "5vw", alignItems: "start" }}>
          <div>
            <Eyebrow>Structured Initiatives</Eyebrow>
            <Headline>Schools should never wonder what to create.</Headline>
            <SubHead>
              EDU Media Systems provides ready-to-run podcast and media initiatives schools can implement immediately, without inventing a format from scratch.
            </SubHead>
          </div>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.8vw",
              padding: "2.6vw",
            }}
          >
            <div style={{ fontSize: "0.9vw", letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>
              Example initiative
            </div>
            <div style={{ fontSize: "2.4vw", fontWeight: 600, color: INK, marginTop: "1.4vh", letterSpacing: "-0.02em" }}>
              The Quick 15
            </div>
            <ul style={{ marginTop: "2.4vh", display: "flex", flexDirection: "column", gap: "1.1vh" }}>
              <Bullet>4 students, 15-minute session</Bullet>
              <Bullet>Approved discussion topic, teacher-supervised</Bullet>
              <Bullet>Simple recording workflow on the Podcart</Bullet>
              <Bullet>Exported as classroom-ready media content</Bullet>
              <Bullet>Internal, parent-shared or public — school chooses</Bullet>
            </ul>
          </div>
        </div>
      </Frame>
    ),
  },
  {
    id: "publishing",
    label: "Publishing Environments",
    render: ({ index, total }) => (
      <Frame eyebrow="10 — Publishing Environments" index={index} total={total}>
        <Eyebrow>Publishing Environments</Eyebrow>
        <Headline>Flexible publishing environments for schools.</Headline>
        <SubHead>
          Schools maintain full control over how student content is shared. Public, private, parent-only — the workflow stays the same.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4vw" }}>
          <Card caption="Public" title="YouTube channels" body="Branded school channels with templates and upload workflows." />
          <Card caption="Internal" title="Private libraries" body="Internal-only content for classroom and assembly use." />
          <Card caption="Parents" title="Parent-only distribution" body="Controlled access for families without going public." />
          <Card caption="Optional" title="Vimeo environments" body="Higher-control hosting where schools require it." />
          <Card caption="Support" title="Permission templates" body="Media consent and moderation guidance included." />
          <Card caption="Support" title="Publishing workflows" body="Operational support so the right content reaches the right audience." />
        </div>
      </Frame>
    ),
  },
  {
    id: "support",
    label: "Support & Activation",
    render: ({ index, total }) => (
      <Frame eyebrow="11 — Support & Activation" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5vw", alignItems: "start" }}>
          <div>
            <Eyebrow>Ongoing Support</Eyebrow>
            <Headline size="4.4vw">A supported ecosystem, not a hardware drop-off.</Headline>
            <ul style={{ marginTop: "3.5vh", display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <Bullet>Business-hours technical support</Bullet>
              <Bullet>Onboarding and implementation guidance</Bullet>
              <Bullet>Workflow support and remote troubleshooting</Bullet>
              <Bullet>Operational coaching and scheduled check-ins</Bullet>
            </ul>
          </div>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.8vw",
              padding: "2.6vw",
            }}
          >
            <div style={{ fontSize: "0.9vw", letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>
              First-term activation
            </div>
            <div style={{ fontSize: "2vw", fontWeight: 600, color: INK, marginTop: "1.4vh", letterSpacing: "-0.02em" }}>
              Most school media systems fail because excitement disappears after setup.
            </div>
            <ul style={{ marginTop: "2.6vh", display: "flex", flexDirection: "column", gap: "1.1vh" }}>
              <Bullet>Activation visits and coaching sessions</Bullet>
              <Bullet>Workflow guidance through the first term</Bullet>
              <Bullet>EMS Network participation from week one</Bullet>
              <Bullet>Embeds the program into school culture</Bullet>
            </ul>
          </div>
        </div>
      </Frame>
    ),
  },
  {
    id: "different",
    label: "Why Different",
    render: ({ index, total }) => (
      <Frame eyebrow="12 — Why This Is Different" index={index} total={total}>
        <Eyebrow>Why This Is Different</Eyebrow>
        <Headline size="4.6vw">
          Most schools buy equipment.
          <br />
          Very few build sustainable systems.
        </Headline>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${LINE}`,
              borderRadius: "0.7vw",
              padding: "2.4vw",
            }}
          >
            <div style={{ fontSize: "0.9vw", letterSpacing: "0.22em", textTransform: "uppercase", color: INK_SOFT, fontWeight: 500 }}>
              Traditional approach
            </div>
            <ul style={{ marginTop: "2.4vh", display: "flex", flexDirection: "column", gap: "1vh" }}>
              {["Disconnected equipment", "No workflow", "Teacher-dependent", "Files get lost", "Difficult onboarding", "Eventually unused"].map((t) => (
                <li
                  key={t}
                  style={{
                    fontSize: "1.25vw",
                    color: INK_MUTED,
                    paddingLeft: "1.4vw",
                    position: "relative",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, top: "0.85vw", width: "0.6vw", height: 1, background: INK_SOFT }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${ACCENT}`,
              borderRadius: "0.7vw",
              padding: "2.4vw",
            }}
          >
            <div style={{ fontSize: "0.9vw", letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>
              EDU Media Systems
            </div>
            <ul style={{ marginTop: "2.4vh", display: "flex", flexDirection: "column", gap: "1vh" }}>
              {[
                "Connected ecosystem",
                "Workflow-first",
                "Student-led",
                "Operational simplicity",
                "Ongoing support",
                "Structured initiatives",
                "Participation network",
                "Scalable across schools",
              ].map((t) => (
                <li
                  key={t}
                  style={{
                    fontSize: "1.25vw",
                    color: INK,
                    paddingLeft: "1.4vw",
                    position: "relative",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, top: "0.7vw", width: "0.55vw", height: "0.55vw", borderRadius: "9999px", background: ACCENT }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Frame>
    ),
  },
  {
    id: "market",
    label: "Target Market",
    render: ({ index, total }) => (
      <Frame eyebrow="13 — Target Market" index={index} total={total}>
        <Eyebrow>Target Market</Eyebrow>
        <Headline>Built for modern education environments.</Headline>
        <div style={{ marginTop: "6vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw" }}>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.7vw",
              padding: "2.4vw",
            }}
          >
            <div style={{ fontSize: "0.9vw", letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>
              Primary
            </div>
            <ul style={{ marginTop: "2.4vh", display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <Bullet>Primary schools</Bullet>
              <Bullet>Secondary schools</Bullet>
              <Bullet>Education departments</Bullet>
              <Bullet>Media specialist programs</Bullet>
              <Bullet>Leadership and student-voice programs</Bullet>
            </ul>
          </div>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.7vw",
              padding: "2.4vw",
            }}
          >
            <div style={{ fontSize: "0.9vw", letterSpacing: "0.22em", textTransform: "uppercase", color: INK_SOFT, fontWeight: 500 }}>
              Secondary
            </div>
            <ul style={{ marginTop: "2.4vh", display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <Bullet>Youth media organisations</Bullet>
              <Bullet>Training environments</Bullet>
              <Bullet>Community programs</Bullet>
            </ul>
          </div>
        </div>
      </Frame>
    ),
  },
  {
    id: "model",
    label: "Business Model",
    render: ({ index, total }) => (
      <Frame eyebrow="14 — Business Model" index={index} total={total}>
        <Eyebrow>Business Model</Eyebrow>
        <Headline>A supported media ecosystem.</Headline>
        <SubHead>
          Hardware, software and services structured for sustained school-side adoption — not one-off equipment sales.
        </SubHead>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.4vw" }}>
          <Card
            caption="Hardware"
            title="The Podcart"
            body="Packages from ~$14,999 AUD + GST. Configurable for primary and secondary deployments."
          />
          <Card
            caption="Software"
            title="Offloadr"
            body="Subscriptions from ~$299–499 / month. Per-school licensing with editor handoff included."
          />
          <Card
            caption="Services"
            title="Rollout packages"
            body="From ~$24,999–39,999 AUD. Implementation, training and first-term activation."
          />
          <Card
            caption="Recurring"
            title="Media operations"
            body="Editing, branded graphics, thumbnails, assembly recaps and publishing support."
          />
          <Card
            caption="Recurring"
            title="EMS Network"
            body="Participation in the live cross-school sessions and structured initiatives calendar."
          />
          <Card
            caption="Future"
            title="Enterprise licensing"
            body="Department-level and multi-school licensing as the ecosystem scales."
          />
        </div>
      </Frame>
    ),
  },
  {
    id: "real-world",
    label: "Real-World Implementation",
    render: ({ index, total }) => (
      <Frame eyebrow="15 — Real-World Implementation" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <Eyebrow>Real-World Implementation</Eyebrow>
            <Headline>Built from real school experience.</Headline>
            <SubHead>
              The ecosystem has been shaped inside an active school — not assembled from theory. Every workflow has run with real students, real teachers and real classroom constraints.
            </SubHead>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.4vw" }}>
            <div
              style={{
                background: SURFACE,
                border: `1px solid ${LINE}`,
                borderRadius: "0.7vw",
                padding: "2vw 2.2vw",
              }}
            >
              <div style={{ fontSize: "0.85vw", letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>
                School
              </div>
              <div style={{ fontSize: "1.6vw", fontWeight: 600, color: INK, marginTop: "1vh" }}>
                Prospect North Primary School
              </div>
              <div style={{ fontSize: "1.1vw", color: INK_MUTED, marginTop: "0.6vh", lineHeight: 1.45 }}>
                Active deployment of the Podcart, Offloadr and Producer Mode workflow.
              </div>
            </div>
            <div
              style={{
                background: SURFACE,
                border: `1px solid ${LINE}`,
                borderRadius: "0.7vw",
                padding: "2vw 2.2vw",
              }}
            >
              <div style={{ fontSize: "0.85vw", letterSpacing: "0.22em", textTransform: "uppercase", color: ACCENT, fontWeight: 500 }}>
                Programs
              </div>
              <div style={{ fontSize: "1.6vw", fontWeight: 600, color: INK, marginTop: "1vh" }}>
                PNTV · PNC Podcast
              </div>
              <div style={{ fontSize: "1.1vw", color: INK_MUTED, marginTop: "0.6vh", lineHeight: 1.45 }}>
                Student-led video and podcast programs running on the EDU Media Systems stack.
              </div>
            </div>
          </div>
        </div>
      </Frame>
    ),
  },
  {
    id: "founders",
    label: "Founders",
    render: ({ index, total }) => (
      <Frame eyebrow="16 — Founders" index={index} total={total}>
        <Eyebrow>Founders</Eyebrow>
        <Headline size="4.6vw">Built by people already working in education.</Headline>
        <div style={{ marginTop: "5vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw" }}>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.7vw",
              padding: "2.6vw",
            }}
          >
            <div style={{ fontSize: "1.9vw", fontWeight: 600, color: INK, letterSpacing: "-0.02em" }}>
              Sam Leverenz
            </div>
            <div style={{ fontSize: "1.1vw", color: ACCENT, marginTop: "0.6vh", letterSpacing: "0.04em" }}>
              Founder & Creative Director
            </div>
            <p style={{ fontSize: "1.05vw", color: INK_MUTED, marginTop: "2vh", lineHeight: 1.55 }}>
              Digital Media Coordinator at Prospect North Primary School. Founder and lead of PNTV and the PNC Podcast.
            </p>
            <p style={{ fontSize: "1.05vw", color: INK_MUTED, marginTop: "1.4vh", lineHeight: 1.55 }}>
              Over 20 years in sound; more than a decade working professionally in videography and media production. Background spans music production, live sound, filming, editing and student-led media implementation.
            </p>
          </div>
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${LINE}`,
              borderRadius: "0.7vw",
              padding: "2.6vw",
            }}
          >
            <div style={{ fontSize: "1.9vw", fontWeight: 600, color: INK, letterSpacing: "-0.02em" }}>
              Tom Leverenz
            </div>
            <div style={{ fontSize: "1.1vw", color: ACCENT, marginTop: "0.6vh", letterSpacing: "0.04em" }}>
              Director of Education Partnerships
            </div>
            <p style={{ fontSize: "1.05vw", color: INK_MUTED, marginTop: "2vh", lineHeight: 1.55 }}>
              Leads the education and implementation strategy behind EDU Media Systems.
            </p>
            <p style={{ fontSize: "1.05vw", color: INK_MUTED, marginTop: "1.4vh", lineHeight: 1.55 }}>
              Focused on long-term school rollout, partnership development, practical integration and sustainable adoption — building the relationships that keep programs running beyond the first term.
            </p>
          </div>
        </div>
      </Frame>
    ),
  },
  {
    id: "vision",
    label: "Vision",
    render: ({ index, total }) => (
      <Frame eyebrow="17 — Vision" index={index} total={total}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "5vw", alignItems: "center" }}>
          <div>
            <Eyebrow>Vision</Eyebrow>
            <Headline>Building the infrastructure behind student-led media.</Headline>
            <SubHead>
              Sustainable, professional student media ecosystems — connected hardware, workflow software, participation initiatives and education-focused implementation.
            </SubHead>
            <p style={{ fontSize: "1.2vw", color: INK_SOFT, marginTop: "3vh", maxWidth: "32vw", lineHeight: 1.5 }}>
              This is bigger than equipment. It is the operating layer for modern school storytelling.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1vw" }}>
            {[
              "Infrastructure",
              "Workflow",
              "Engagement",
              "Support",
              "Participation",
              "Communication culture",
              "Student confidence",
              "Modern school storytelling",
            ].map((t) => (
              <div
                key={t}
                style={{
                  border: `1px solid ${LINE}`,
                  background: SURFACE,
                  borderRadius: "0.5vw",
                  padding: "1.4vw 1.4vw",
                  fontSize: "1.15vw",
                  color: INK,
                  fontWeight: 500,
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
  {
    id: "final",
    label: "Contact",
    render: ({ index, total }) => (
      <div
        className="absolute inset-0 flex flex-col justify-between"
        style={{ padding: "10vh 10vw", backgroundColor: BG, color: INK }}
      >
        <div className="flex items-center justify-between" style={{ color: INK_SOFT, fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <img
            src={eduLogo}
            crossOrigin="anonymous"
            alt="EDU Media Systems"
            style={{ height: "2.6vw", filter: "invert(1) brightness(1.1)" }}
          />
          <span>
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <div>
          <div
            style={{
              fontSize: "0.95vw",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: "5vh",
              fontWeight: 500,
            }}
          >
            Continue the conversation
          </div>
          <h1
            style={{
              fontSize: "6.6vw",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 0.98,
              maxWidth: "70vw",
              color: INK,
            }}
          >
            Student voice.
            <br />
            Professionally delivered.
          </h1>
          <div style={{ marginTop: "5vh", display: "flex", gap: "5vw", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "0.85vw", letterSpacing: "0.22em", textTransform: "uppercase", color: INK_SOFT, fontWeight: 500 }}>
                Email
              </div>
              <div style={{ fontSize: "1.6vw", color: INK, marginTop: "1vh" }}>info@edumediasystems.com.au</div>
            </div>
            <div>
              <div style={{ fontSize: "0.85vw", letterSpacing: "0.22em", textTransform: "uppercase", color: INK_SOFT, fontWeight: 500 }}>
                Phone
              </div>
              <div style={{ fontSize: "1.6vw", color: INK, marginTop: "1vh" }}>0415 791 472</div>
            </div>
            <div>
              <div style={{ fontSize: "0.85vw", letterSpacing: "0.22em", textTransform: "uppercase", color: INK_SOFT, fontWeight: 500 }}>
                Web
              </div>
              <div style={{ fontSize: "1.6vw", color: INK, marginTop: "1vh" }}>edumediasystems.com.au</div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <LogoRow />
          <div style={{ fontSize: "0.9vw", color: INK_SOFT, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Book a demo
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
        window.location.href = "/";
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [printMode, total]);

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
      <div
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
      </div>
      <a
        href="/"
        style={{
          position: "fixed",
          top: "1.4vh",
          right: "1.4vw",
          fontSize: "0.85vw",
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          textDecoration: "none",
        }}
      >
        Esc — Home
      </a>
    </div>
  );
}
