"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import { cn } from "@/lib/utils";

interface TileProps {
  children: ReactNode;
  className?: string;
  span?: 1 | 2;
}

export function Tile({ children, className, span = 1 }: TileProps) {
  const tilt = useTilt<HTMLDivElement>();

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-xl2 border border-border bg-gradient-to-br from-card to-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-borderHover [transform-style:preserve-3d]",
        span === 2 && "sm:col-span-2",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(127,182,133,0.12), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
