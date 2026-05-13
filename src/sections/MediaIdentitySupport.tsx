import { Section, H2, Lead, Body } from "../lib/components";

const offerings = [
  {
    t: "School media branding kit",
    b: "A consistent visual identity for your school's student media — show titles, intros, lower thirds, episode artwork, channel art. Built once, used everywhere.",
  },
  {
    t: "Channel & publishing setup",
    b: "We help configure the YouTube channel, podcast feeds and any internal hosting your school needs — with the right privacy settings and approval flows from day one.",
  },
  {
    t: "Editing assistance",
    b: "When the school needs polish — assemblies, leadership messages, parent-facing content — our editors finish the work and return it ready to publish.",
  },
  {
    t: "Content workflow support",
    b: "Templates, prompts and program structures so teachers always know what to record next, and students always have a reason to step up to the microphone.",
  },
  {
    t: "YouTube & rollout support",
    b: "Help getting student media in front of the right audience — parents, community, prospective families — with privacy and consent handled correctly.",
  },
];

export default function MediaIdentitySupport() {
  return (
    <Section id="identity" eyebrow="School media identity & content support" tone="soft">
      <H2>
        We don't just hand over equipment and walk away.
      </H2>
      <div className="mt-6 max-w-2xl">
        <Lead>
          A school media program needs more than a cart of microphones. EDU
          Media Systems provides the brand identity, the channel setup, and
          the production support that keep it looking and sounding like a
          real school broadcast — not a hobby.
        </Lead>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
        {offerings.map((o) => (
          <div
            key={o.t}
            className="rounded-2xl border border-line bg-white p-7 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-ink">{o.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {o.b}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl">
        <Body>
          Every offering is scoped per school. We're a small operation by
          design — no agency overhead, no upsell ladder. Schools tell us
          where they want help, and we deliver against that.
        </Body>
      </div>
    </Section>
  );
}
