import { Section, H2, Body } from "../lib/components";

const problems = [
  {
    title: "Gear gets stolen, lost, or left flat",
    body: "Loose mics and laptops live in three different cupboards. By the time a class is set up, the lesson is half over.",
  },
  {
    title: "Recordings vanish between classes",
    body: "Files end up on personal Google Drives, in random Dropbox folders, or on the SD card a student took home. Nothing handed off cleanly.",
  },
  {
    title: "Editing is the bottleneck",
    body: "Teachers aren't editors. Without a clear workflow, 80% of recordings never become finished work — and students never see their own progress.",
  },
  {
    title: "Programs don't scale",
    body: "What works for one passionate teacher dies the moment they leave the school. There's no system anyone else can pick up and run.",
  },
];

export default function Problem() {
  return (
    <Section id="problem" eyebrow="The problem" tone="soft">
      <H2>
        Schools have the talent. They don't have the system.
      </H2>
      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
        {problems.map((p, i) => (
          <div key={p.title} className="flex gap-5">
            <div className="text-sm font-mono text-accent pt-1 w-8 shrink-0">
              0{i + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink mb-2">{p.title}</h3>
              <Body>{p.body}</Body>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
