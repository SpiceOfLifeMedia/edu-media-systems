import { Section, H2, Lead, Body } from "../lib/components";

const useCases = [
  {
    t: "Student interviews",
    b: "Peer-to-peer interviews, guest speakers, alumni stories — recorded in a single period and ready to share.",
  },
  {
    t: "Leadership messages",
    b: "Principal updates, captain addresses, council messages — produced by students, not bought from a contractor.",
  },
  {
    t: "Assembly recaps & event coverage",
    b: "Capture sports days, concerts, awards nights and assemblies. Parents see the school the way students see it.",
  },
  {
    t: "Cultural storytelling",
    b: "Give students a real platform to tell stories from their community, language and lived experience.",
  },
  {
    t: "Debates & oracy programs",
    b: "Recorded debates, structured discussions and oracy practice — students hear themselves and improve.",
  },
  {
    t: "Internal & parent communication",
    b: "Short-form updates for families and staff. Less email, more authentic voice from the school itself.",
  },
];

export default function MoreThanPodcasting() {
  return (
    <Section id="use-cases" eyebrow="More than podcasting">
      <H2>
        Podcasting is one use case. Student media is much bigger than that.
      </H2>
      <div className="mt-6 max-w-2xl">
        <Lead>
          Schools use the EDU Media Systems ecosystem for everything from
          leadership communication to cultural storytelling. The Podcart,
          Offloadr and the support layer are designed to handle the full
          range — not just one format.
        </Lead>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((u, i) => (
          <div key={u.t} className="flex gap-5">
            <div className="text-sm font-mono text-accent pt-1 w-8 shrink-0">
              0{i + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink mb-2">{u.t}</h3>
              <Body>{u.b}</Body>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl border-l-2 border-accent pl-6">
        <Body>
          The point isn't the format. The point is that students are
          producing — and a school has the system to capture it, finish it,
          and share it without it falling apart between classes.
        </Body>
      </div>
    </Section>
  );
}
