"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading eyebrow="Background" title="Education" />
        <div className="border-l border-border pl-9">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.7, 0.3, 1] }}
              className="relative pb-11 last:pb-0"
            >
              <div className="absolute -left-[39.5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-primary bg-bg shadow-[0_0_0_4px_rgba(52,211,153,0.14)]" />
              <span className="mb-2 block font-mono text-xs text-accent">{item.date}</span>
              <h3 className="text-[17px] font-bold">{item.degree}</h3>
              <div className="mb-2.5 mt-1 text-[13.5px] font-medium text-dim">{item.school}</div>
              {item.description && (
                <p className="max-w-[600px] text-sm leading-relaxed text-dim">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
