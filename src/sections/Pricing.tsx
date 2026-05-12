import { Section, H2, Lead, Body } from "../lib/components";

const subscriptionIncludes = [
  "Business-hours support",
  "First-term activation guidance",
  "Technical support visits where required",
  "Media program templates",
  "YouTube setup & support",
  "Optional editing support",
  "EMS Network access",
];

const tiers = [
  {
    eyebrow: "Hardware",
    name: "The Podcart",
    price: "$14,999",
    unit: "AUD + GST",
    qualifier: "from",
    features: [
      "Mobile recording cart, fully assembled",
      "4-channel mixer, four microphones, lighting",
      "Locked storage and integrated power",
      "Delivered, installed, and demonstrated on site",
    ],
  },
  {
    eyebrow: "Software",
    name: "Offloadr",
    price: "$299–$499",
    unit: "AUD / month / school",
    qualifier: "subscription",
    features: [
      "Unlimited projects per school",
      "Producer mode and publish-ready handoff included",
      "Remote collaboration and guest access",
      "School-owned project history",
    ],
    accent: true,
  },
  {
    eyebrow: "Rollout",
    name: "Whole-program package",
    price: "$24,999–$39,999",
    unit: "AUD",
    qualifier: "package",
    features: [
      "Podcart hardware (one or more)",
      "First year of Offloadr included",
      "Teacher training and student onboarding",
      "Curriculum-mapped starter projects",
    ],
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" eyebrow="Subscription & business model" tone="soft">
      <H2>Priced like infrastructure, not like a textbook.</H2>
      <Lead>
        EDU Media Systems is sold as a long-term system, not a one-off
        purchase. Schools choose the entry point that fits their program and
        budget — hardware-only, software-only, or a full rollout that bundles
        training and the first year of Offloadr.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-8 sm:p-10 ${
              t.accent
                ? "border-ink bg-white"
                : "border-line bg-white"
            }`}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {t.eyebrow}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-ink">{t.name}</h3>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                {t.qualifier}
              </span>
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-ink leading-none">
                {t.price}
              </span>
            </div>
            <div className="mt-1 text-sm text-ink-muted">{t.unit}</div>
            <ul className="mt-8 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex gap-3 text-ink-muted">
                  <span className="text-accent" aria-hidden>—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-line bg-white p-8 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              The subscription is the program
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-ink leading-[1.15] max-w-md">
              Not just software. An operational layer behind the program.
            </h3>
            <p className="mt-5 max-w-md text-base text-ink-muted leading-relaxed">
              The Offloadr subscription is what keeps a school media program
              alive after the equipment lands — activation, templates, channel
              setup, optional editing help and access to the wider EMS
              Network of schools.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
            {subscriptionIncludes.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-ink">
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                  aria-hidden
                />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 max-w-2xl">
        <Body>
          All pricing is indicative starting points; final scope depends on
          school size, number of carts, and program ambition. Rollout
          packages include onboarding so the program runs from day one.
        </Body>
      </div>
    </Section>
  );
}
