"use client";

import { useRef } from "react";

/**
 * Subtle "magnetic" pull toward the cursor — used on primary CTAs.
 * Keep maxOffset small; this should read as responsive, not gimmicky.
 */
export function useMagnetic<T extends HTMLElement>(maxOffset = 6) {
  const ref = useRef<T>(null);

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate(${relX * maxOffset * 2}px, ${relY * maxOffset}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
