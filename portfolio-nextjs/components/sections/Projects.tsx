"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, projectFilters } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/Pill";
import { useTilt } from "@/hooks/useTilt";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Star } from "lucide-react";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const tilt = useTilt<HTMLDivElement>();

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl2 border border-border bg-gradient-to-br from-card to-surface transition-[border-color,transform] duration-300 hover:-translate-y-1.5 hover:border-borderHover [transform-style:preserve-3d]",
        project.span === 2 && "sm:col-span-2"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--mx,50%) var(--my,50%), rgba(255,138,61,0.14), transparent 60%)",
        }}
      />
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/25 to-accent/10",
          project.span === 2 ? "h-[230px]" : "h-[170px]"
        )}
      >
        <span className="font-mono text-[13px] tracking-wide text-white/55">// {project.slug}</span>
        {project.featured && (
          <span className="absolute right-3.5 top-3.5 z-20 flex items-center gap-1 rounded-full border border-white/15 bg-bg/70 px-2.5 py-1 font-mono text-[10.5px] font-semibold text-accent backdrop-blur-sm">
            <Star size={11} fill="currentColor" /> Featured
          </span>
        )}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>
      <div className="relative z-10 flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold">{project.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-dim">{project.description}</p>
        <div className="my-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
        <div className="flex gap-2.5">
          {project.github && (
            <a
              href={project.github}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-[12.5px] font-semibold text-dim transition-all hover:border-borderHover hover:bg-white/[0.03] hover:text-white"
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-[12.5px] font-semibold text-dim transition-all hover:border-borderHover hover:bg-white/[0.03] hover:text-white"
            >
              <ExternalLink size={14} /> Live Preview
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <section id="projects" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects"
          subtitle="A mix of applied ML systems and the full-stack products built around them."
        />
        <div className="mb-8 flex flex-wrap gap-2.5">
          {projectFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                "rounded-full border border-border px-4 py-2 font-mono text-[12.5px] text-dim transition-all",
                filter === f.value
                  ? "border-primary bg-primary text-white"
                  : "hover:border-primary hover:bg-primary hover:text-white"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
