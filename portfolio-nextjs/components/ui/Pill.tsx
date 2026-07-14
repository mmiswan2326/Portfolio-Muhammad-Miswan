import { cn } from "@/lib/utils";

export function Pill({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 font-mono text-[12.5px] text-dim transition-colors group-hover:text-white hover:!border-borderHover hover:!bg-primary/10 hover:!text-white",
        className
      )}
    >
      {children}
    </span>
  );
}

export function TechTag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-border px-2.5 py-1 font-mono text-[10.5px] text-faint">
      {children}
    </span>
  );
}
