"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const ids = site.navLinks.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(ids);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] py-4">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="flex items-center justify-between rounded-full border border-border bg-card/70 py-2.5 pl-5 pr-2.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="flex items-center gap-2 font-mono text-[14.5px] font-semibold tracking-tight">
            <span className="h-[7px] w-[7px] animate-pulseGlow rounded-full bg-primary shadow-[0_0_10px_theme(colors.primary)]" />
            {site.logoText}
          </div>
          <nav className="hidden gap-1 text-[13.5px] text-dim md:flex">
            {site.navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 transition-colors hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-gradient-to-br from-primary to-secondary px-4.5 py-2 font-mono text-[12.5px] font-medium text-white transition-shadow hover:shadow-[0_6px_20px_-6px_rgba(255,107,0,0.6)]"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
