import { Section, H2, Lead, Body } from "../lib/components";

const tiers = [
  {
    eyebrow: "Equipment first",
    t: "Buy The Podcart",
    b: "Take ownership of the production hub outright. Full hardware, on wheels, ready to record. No subscription required to use it.",
    note: "The simplest entry point. Many schools start here.",
  },
  {
    eyebrow: "Hardware + workflow",
    t: "Podcart + Offloadr",
    b: "Add the workflow platform so recordings don't get lost between classes. Offloadr handles upload, review, approval and handoff.",
    note: "Recommended for schools running media across multiple classes or campuses.",
  },
  {
    eyebrow: "Operational partnership",
    t: "Subscription support",
    b: "Ongoing operational help — onboarding visits, production support days, editing assistance, content prompts, rollout guidance. The layer that keeps the program alive.",
    note: "For schools committed to a sustainable program, not a one-term experiment.",
  },
];

const visits = [
  {
    t: "Onboarding visits",
    b: "On-site setup, training the first cohort of student producers, and walking teachers through the workflow.",
  },
  {
    t: "Production support days",
    b: "We come in to run a recording day with you — assembly week, leadership cycle, event coverage.",
  },
  {
    t: "Pilot programs",
    b: "Run a structured term-long pilot before scaling. Helps schools prove value to leadership before a full rollout.",
  },
  {
    t: "Media coaching sessions",
    b: "Direct coaching for student producers, presenters and editors — by people who actually do this work.",
  },
];

export default function FlexiblePartnerships() {
  return (
    <Section id="partnerships" eyebrow="Flexible school partnerships">
      <H2>
        Schools don't have to commit to the full system on day one.
      </H2>
      <div className="mt-6 max-w-2xl">
        <Lead>
          Start with the hardware, add the workflow when you're ready, layer
          in operational support when the program is proving itself.
          We'll meet you where the school is — not where a sales deck wants
          you to be.
        </Lead>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {tiers.map((tier, i) => (
          <article
            key={tier.t}
            className="flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-8"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {tier.eyebrow}
            </div>
            <div className="mt-2 text-xs font-mono text-ink-muted">0{i + 1}</div>
            <h3 className="mt-3 text-2xl font-semibold text-ink leading-[1.15]">
              {tier.t}
            </h3>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed">
              {tier.b}
            </p>
            <p className="mt-6 pt-5 border-t border-line text-xs text-ink-muted leading-relaxed">
              {tier.note}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Engagement options
        </div>
        <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-ink leading-[1.15] max-w-2xl">
          Practical ways we work alongside schools.
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {visits.map((v) => (
            <div key={v.t} className="border-l-2 border-accent pl-6">
              <h4 className="text-base font-semibold text-ink">{v.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {v.b}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl">
          <Body>
            Pricing is set per school based on size, scope and rollout. We
            don't publish a rate card because no two schools we've worked
            with have wanted the same shape of program. Get in touch and
            we'll scope something honest.
          </Body>
        </div>
      </div>
    </Section>
  );
}
