import { Section, Eyebrow, Body } from "../lib/components";

export default function Founder() {
  return (
    <Section id="founder">
      <Eyebrow>Founder</Eyebrow>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24 items-start">
        <div>
          <div
            className="aspect-square w-40 rounded-full border border-line bg-surface flex items-center justify-center text-3xl font-semibold text-ink"
            aria-hidden
          >
            EDU
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight max-w-2xl">
            Built by an operator who got tired of watching schools lose great
            recordings to broken handoffs.
          </h2>
          <div className="mt-8 space-y-5 max-w-2xl">
            <Body>
              EDU Media Systems started inside a working production house.
              We were already producing podcasts and video for clients when
              schools started asking us how to set up their own programs.
              Every conversation hit the same wall: the gear was wrong for a
              classroom, the software was wrong for a recording, and the
              workflow died as soon as the term ended.
            </Body>
            <Body>
              The Podcart and Offloadr were built to fix that — first for one
              school, then for the next, and now as a single product line.
              EDU Media Systems is the parent brand: hardware, software, and
              the workflow that ties them together, designed so any school can
              run a real media program without depending on a single hero
              teacher.
            </Body>
          </div>
        </div>
      </div>
    </Section>
  );
}
