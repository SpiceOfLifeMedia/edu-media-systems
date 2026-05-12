import { Section, Eyebrow, Body } from "../lib/components";

const founders = [
  {
    name: "Sam Leverenz",
    title: "Founder & Creative Director",
    image: "/founder-sam.png",
    paragraphs: [
      "Sam Leverenz leads the creative and operational direction of EDU Media Systems. With years of hands-on experience running student-led media programs inside schools, Sam works directly with students and teachers to build real-world media systems focused on communication, confidence, Oracy and student voice.",
      "With more than 20 years experience in sound and over a decade working professionally in videography and media production, Sam brings extensive real-world production knowledge into education environments. His background spans music production, live sound, audio engineering, filming, editing and large-scale digital media workflows across both creative industries and school settings.",
      "Through his work with SOL Media and a wide range of production and content projects, Sam has developed a strong understanding of how professional media systems operate in fast-moving real-world environments. That experience helped shape EDU Media Systems into a practical, workflow-focused ecosystem designed specifically for long-term school adoption rather than short-term equipment deployment.",
      "By combining professional production standards with hands-on experience inside schools, Sam's focus is helping students build confidence, communication skills and media literacy through authentic student-led media experiences that feel modern, engaging and operationally sustainable.",
    ],
  },
  {
    name: "Tom Leverenz",
    title: "Director of Education Partnerships",
    image: "/founder-tom.png",
    paragraphs: [
      "Tom Leverenz supports the education strategy, implementation planning and long-term partnership direction behind EDU Media Systems. With extensive experience working across education environments and student support systems, Tom helps ensure the EMS ecosystem is practical, scalable and aligned with the operational realities of schools.",
      "His focus includes school engagement, rollout coordination, partnership development and helping schools successfully integrate student-led media programs into everyday learning environments. Tom plays a key role in ensuring EDU Media Systems remains sustainable and genuinely valuable for teachers, students and leadership teams over the long term.",
      "Working closely across implementation and education strategy, Tom helps bridge the gap between professional media infrastructure and real-world school adoption — ensuring systems are accessible, manageable and capable of scaling across multiple classrooms, campuses and education settings.",
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

      <div className="mt-16 space-y-16 lg:space-y-20">
        {founders.map((f) => (
          <article
            key={f.name}
            className="grid grid-cols-[88px_1fr] gap-5 sm:grid-cols-[120px_1fr] sm:gap-8 lg:grid-cols-[160px_1fr] lg:gap-10"
          >
            <div className="aspect-square w-full overflow-hidden rounded-full border border-line bg-surface">
              <img
                src={f.image}
                alt={`Portrait of ${f.name}`}
                loading="lazy"
                className="h-full w-full object-cover object-top grayscale"
              />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                {f.title}
              </div>
              <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-ink">
                {f.name}
              </h3>
              <div className="mt-4 space-y-4 max-w-2xl">
                {f.paragraphs.map((p, i) => (
                  <Body key={i}>{p}</Body>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-ink-muted">
          Together, Sam and Tom combine real-world production experience with
          education-focused operational strategy to help schools build modern
          communication ecosystems centred around student voice, confidence
          and participation.
        </p>
      </div>
    </Section>
  );
}
