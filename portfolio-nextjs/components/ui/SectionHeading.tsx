"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
    >
      <div className="mb-4 flex items-center gap-2.5 font-mono text-[12.5px] tracking-wide text-secondary before:h-px before:w-4 before:bg-secondary">
        {eyebrow}
      </div>
      <h2 className="mb-3.5 text-[clamp(28px,4vw,42px)] font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mb-14 max-w-lg text-[15.5px] leading-relaxed text-dim">{subtitle}</p>}
    </motion.div>
  );
}
