import { Section, H2, Lead, Body } from "../lib/components";

const points = [
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

export default function RemoteCollab() {
  return (
    <Section id="remote" eyebrow="Remote collaboration">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <H2>Schools that learn together publish together.</H2>
          <Lead>
            Recordings made on one Podcart can be picked up, finished, or
            re-versioned by a student, teacher, or industry mentor anywhere.
            EDU Media Systems is built so a single project can span
            classrooms, campuses, and external collaborators without
            fragmenting into a dozen drives.
          </Lead>
          <div className="mt-8 max-w-md">
            <Body>
              The same access controls schools already trust. Nothing
              public-by-default; every collaboration is explicitly invited.
            </Body>
          </div>
        </div>
        <div className="space-y-8">
          {points.map((p) => (
            <div
              key={p.t}
              className="border-l-2 border-accent pl-6"
            >
              <h3 className="text-lg font-semibold text-ink">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {p.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
