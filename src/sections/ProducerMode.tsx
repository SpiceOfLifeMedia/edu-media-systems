import { Section, H2, Lead, Body } from "../lib/components";

const steps = [
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

export default function ProducerMode() {
  return (
    <Section id="producer" eyebrow="Producer mode" tone="soft">
      <H2>The way real studios run, taught at school.</H2>
      <Lead>
        Producer mode turns a class of students into an actual production
        team. One student produces, others record, another edits — each role
        has its own view, its own checklist, and its own deliverables inside
        Offloadr. By the end of the term, every student has worked every
        seat.
      </Lead>

      <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="bg-white p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {s.n}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-ink">{s.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {s.b}
            </p>
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
    </Section>
  );
}
