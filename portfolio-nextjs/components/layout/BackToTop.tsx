"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-7 right-7 z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-borderHover",
        show ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ArrowUp size={18} />
    </button>
  );
}
