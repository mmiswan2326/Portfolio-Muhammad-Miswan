import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

const base =
  "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-[transform,box-shadow,border-color,background] duration-300 will-change-transform";
const variants = {
  primary:
    "bg-gradient-to-br from-primary/95 to-secondary/90 text-white shadow-[0_8px_28px_-8px_rgba(127,182,133,0.45)] hover:shadow-[0_16px_40px_-10px_rgba(127,182,133,0.55)]",
  ghost:
    "border border-border bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-borderHover hover:bg-white/[0.05]",
};

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof variants;
  children: ReactNode;
}

export function LinkButton({ variant = "primary", className, children, ...props }: LinkButtonProps) {
  const magnetic = useMagnetic<HTMLAnchorElement>(variant === "primary" ? 6 : 3);
  return (
    <a
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  children: ReactNode;
}

export function FormButton({ variant = "primary", className, children, ...props }: FormButtonProps) {
  const magnetic = useMagnetic<HTMLButtonElement>(4);
  return (
    <button
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      className={cn(base, "justify-center", variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
