import { Section, Eyebrow } from "../lib/components";

const founders = [
  {
    name: "Sammy Leverenz",
    title: "Founder & Creative Director",
    image: "/founder-sam.png",
    bio: "Sammy leads the creative and operational direction of EDU Media Systems. He's been running student-led media programs inside schools for years, bringing professional production standards directly into classrooms through SOL Media.",
    credentials: [
      "20+ years in sound",
      "10+ years in video production",
      "Music, live audio & engineering",
      "Student-led media programs",
    ],
  },
  {
    name: "Tom Leverenz",
    title: "Director of Education Partnerships",
    image: "/founder-tom.png",
    bio: "Tom leads education strategy and partnership rollout. He bridges professional media infrastructure and real school adoption — making sure programs are practical, sustainable, and scalable across classrooms, campuses and education networks.",
    credentials: [
      "Education strategy",
      "School engagement",
      "Rollout coordination",
      "Partnership development",
    ],
  },
];

export default function Founder() {
  return (
    <Section id="founder">
      <Eyebrow>Leadership</Eyebrow>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-[-0.025em] max-w-3xl">
        Built by people working in schools, with students, every week.
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-ink-muted leading-relaxed">
        EDU Media Systems is led by educators and operators who run real
        student media programs — not a startup team writing about classrooms
        from the outside.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {founders.map((f) => (
          <article
            key={f.name}
            className="rounded-2xl border border-line bg-white p-7 sm:p-8"
          >
            <div className="flex items-center gap-5">
              <div className="aspect-square w-20 sm:w-24 shrink-0 overflow-hidden rounded-full border border-line bg-surface">
                <img
                  src={f.image}
                  alt={`Portrait of ${f.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top grayscale"
                />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {f.title}
                </div>
                <h3 className="mt-1.5 text-xl sm:text-2xl font-semibold text-ink">
                  {f.name}
                </h3>
              </div>
            </div>

            <p className="mt-6 text-base text-ink-muted leading-relaxed">
              {f.bio}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {f.credentials.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink"
                >
                  <span
                    className="h-1 w-1 rounded-full bg-accent"
                    aria-hidden
                  />
                  {c}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
