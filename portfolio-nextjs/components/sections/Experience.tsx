"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/Pill";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading eyebrow="Career" title="Experience" subtitle="Where I've applied this in practice." />
        <div className="border-l border-border pl-9">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.7, 0.3, 1] }}
              className="relative pb-11 last:pb-0"
            >
              <div className="absolute -left-[39.5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-primary bg-bg shadow-[0_0_0_4px_rgba(255,107,0,0.14)]" />
              <span className="mb-2 block font-mono text-xs text-accent">{item.date}</span>
              <h3 className="text-[17px] font-bold">{item.role}</h3>
              <div className="mb-2.5 mt-1 text-[13.5px] font-medium text-dim">{item.org}</div>
              <p className="max-w-[600px] text-sm leading-relaxed text-dim">{item.description}</p>
              {item.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <TechTag key={tag}>{tag}</TechTag>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
