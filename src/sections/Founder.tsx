import { Section, Eyebrow, Body } from "../lib/components";

const founders = [
  {
    name: "Sam Leverenz",
    title: "Founder & Creative Director",
    image: "/founder-sam.png",
    paragraphs: [
      "Sam Leverenz leads the creative and operational direction of EDU Media Systems. As Digital Media Coordinator at Prospect North Primary School and the founder of PNTV and the PNC Podcast, Sam works directly with students to build real-world media programs focused on communication, confidence, Oracy and student voice.",
      "His experience implementing student-led production systems inside schools shaped EDU Media Systems into a practical, education-first ecosystem designed for long-term school adoption.",
    ],
  },
  {
    name: "Tom Leverenz",
    title: "Director of Education Partnerships",
    image: "/founder-tom.png",
    paragraphs: [
      "Tom Leverenz supports the education and implementation strategy behind EDU Media Systems. With extensive experience working within education environments, Tom guides long-term rollout, partnership development and the practical integration of student media systems into schools.",
      "His focus is ensuring EDU Media Systems remains sustainable, accessible and genuinely useful for teachers, students and school leadership teams.",
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

      <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        {founders.map((f) => (
          <article key={f.name} className="flex flex-col">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-surface flex items-end justify-center">
              <img
                src={f.image}
                alt={`Portrait of ${f.name}`}
                loading="lazy"
                className="h-full w-full object-contain object-bottom grayscale"
              />
            </div>
            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {f.title}
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-ink">{f.name}</h3>
              <div className="mt-5 space-y-4 max-w-xl">
                {f.paragraphs.map((p, i) => (
                  <Body key={i}>{p}</Body>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
