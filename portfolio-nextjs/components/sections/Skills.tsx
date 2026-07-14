import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tile } from "@/components/ui/Tile";
import { Pill } from "@/components/ui/Pill";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          subtitle="A working toolkit spanning languages, interfaces, and the machine learning layer in between."
        />
        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((cat) => (
            <Tile key={cat.title} span={cat.span} className="group">
              <h3 className="mb-4 flex items-center gap-2.5 text-base font-bold">
                <span className="h-2 w-2 rounded-[3px] bg-primary" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </Tile>
          ))}
        </div>
      </div>
    </section>
  );
}
