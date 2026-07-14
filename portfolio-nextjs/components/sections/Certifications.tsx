import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl border border-border bg-card p-5.5 transition-transform duration-300 hover:-translate-y-1.5 hover:border-borderHover"
            >
              <div className="mb-4 flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-gradient-to-br from-primary to-secondary font-mono text-sm font-bold">
                {cert.short}
              </div>
              <h4 className="mb-1.5 text-[15px] font-bold">{cert.title}</h4>
              <span className="font-mono text-xs text-faint">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
