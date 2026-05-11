import { Section, H2, Lead, FeatureRow } from "../lib/components";

const features = [
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
    title: "Editor-ready handoff",
    body: "Selects, notes, and source files leave Offloadr packaged the way an editor (or a senior student) actually wants to receive them.",
  },
  {
    index: "04",
    title: "History the school owns",
    body: "Projects don't disappear with the teacher. Every episode, every season, every class is searchable from one place.",
  },
];

export default function Offloadr() {
  return (
    <Section id="offloadr" eyebrow="Offloadr">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <H2>The missing link between recording and editing.</H2>
          <Lead>
            Offloadr is the software side of EDU Media Systems. It takes the
            mess between "we recorded something" and "it's published" and
            turns it into a workflow students can actually follow — and
            teachers can actually grade.
          </Lead>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              From
            </span>
            <span className="text-2xl font-semibold text-ink">
              $299–$499 AUD
            </span>
            <span className="text-sm text-ink-muted">/ month / school</span>
          </div>
        </div>

        <div className="space-y-10">
          {features.map((f) => (
            <FeatureRow key={f.index} {...f} />
          ))}
        </div>
      </div>
    </Section>
  );
}
