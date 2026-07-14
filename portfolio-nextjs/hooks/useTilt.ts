"use client";

import { useRef } from "react";

/**
 * Attaches a subtle 3D tilt + cursor-follow glow to any element.
 * Usage: const tilt = useTilt(); <div ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave} />
 */
export function useTilt<T extends HTMLElement>(intensity = 4) {
  const ref = useRef<T>(null);

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -intensity;
    const ry = ((x / rect.width) - 0.5) * intensity;
    el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
