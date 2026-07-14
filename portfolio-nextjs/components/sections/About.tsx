import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tile } from "@/components/ui/Tile";

export function About() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="About"
          title="A little about how I work"
          subtitle="Short version: I like taking a real-world problem, finding the data behind it, and shipping something that actually solves it."
        />
        <div className="grid grid-cols-1 gap-4.5 md:grid-cols-[1.3fr_1fr]">
          <Tile className="text-[15.5px] leading-[1.8] text-dim">
            {site.aboutBio.map((para, i) => (
              <p key={i} className={i > 0 ? "mt-5" : ""}>
                {para}
              </p>
            ))}
          </Tile>
          <div className="grid grid-cols-2 gap-3.5">
            {site.facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-border bg-card2 p-4">
                <div className="font-mono text-[11px] uppercase tracking-wide text-faint">{fact.label}</div>
                <div className="mt-1.5 text-[14.5px] font-semibold">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
