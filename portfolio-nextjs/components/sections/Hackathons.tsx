import { hackathons } from "@/data/hackathons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Hackathons() {
  return (
    <section id="hackathons" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="Competitions"
          title="Hackathons & Achievements"
          subtitle="Building fast, under pressure, in a room full of people doing the same thing."
        />
        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {hackathons.map((hack) => (
            <div
              key={hack.name}
              className={cn(
                "rounded-[18px] border border-border bg-gradient-to-br from-card to-surface p-6.5 transition-transform duration-300 hover:-translate-y-1.5 hover:border-borderHover",
                hack.featured && "border-accent/35"
              )}
            >
              <span className="mb-3.5 inline-block rounded-full border border-accent/35 px-2.5 py-1 font-mono text-[10.5px] text-accent">
                {hack.badge}
              </span>
              <h4 className="mb-2 text-[16.5px] font-bold">{hack.name}</h4>
              <p className="text-[13.5px] leading-relaxed text-dim">{hack.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
