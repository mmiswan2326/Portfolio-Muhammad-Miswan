"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { LinkButton } from "@/components/ui/Button";

const floatChips = [
  { value: "6+", label: "Projects shipped", pos: "left-[-8%] top-[6%]", delay: "0s" },
  { value: "3", label: "Hackathons entered", pos: "right-[-10%] bottom-[8%]", delay: "-2s" },
  { value: "ML", label: "Currently building", pos: "right-[-16%] top-[44%]", delay: "-3.4s" },
];

export function Hero() {
  return (
    <section className="relative pb-24 pt-[200px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.02] py-1.5 pl-2.5 pr-3.5 font-mono text-[12.5px] text-dim"
          >
            <span className="h-1.5 w-1.5 animate-pulseGlow rounded-full bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400)]" />
            {site.statusChip}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.7, 0.3, 1] }}
            className="text-[clamp(38px,6vw,64px)] font-extrabold leading-[1.05] tracking-tight"
          >
            <span className="mb-1.5 block text-[0.5em] font-semibold text-dim">Hello, I&apos;m</span>
            <span className="bg-gradient-to-br from-white via-white to-primary bg-clip-text text-transparent">
              {site.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex flex-wrap items-center gap-2.5 font-mono text-[15px] text-dim"
          >
            {site.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-2.5">
                {i > 0 && <span className="text-faint">/</span>}
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 max-w-[460px] text-base leading-relaxed text-dim"
          >
            {site.heroTag}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-3.5"
          >
            <LinkButton href="#projects">View Projects →</LinkButton>
            <LinkButton href={site.resumeUrl} variant="ghost">
              Download Resume
            </LinkButton>
            <LinkButton href="#contact" variant="ghost">
              Contact Me
            </LinkButton>
          </motion.div>
        </div>

        <div className="relative hidden h-[440px] items-center justify-center md:flex">
          <div className="relative h-[340px] w-[280px] rounded-[28px] border border-white/15 bg-white/5 p-[2px] shadow-[0_30px_80px_-40px_rgba(255,255,255,0.12)] backdrop-blur-xl animate-shadowZoom">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[26px] bg-card/80 backdrop-blur-sm font-mono text-[70px] font-semibold text-faint">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
              <div className="relative h-full w-full overflow-hidden rounded-[26px]">
                <Image
                  src="/avatar.jpg"
                  alt="Profile avatar"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          {floatChips.map((chip) => (
            <div
              key={chip.label}
              style={{ animationDelay: chip.delay }}
              className={`absolute ${chip.pos} animate-floaty rounded-2xl border border-border bg-card/75 px-4 py-3 font-mono text-xs text-dim shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md`}
            >
              <b className="block font-sans text-[15px] font-bold text-white">{chip.value}</b>
              {chip.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
