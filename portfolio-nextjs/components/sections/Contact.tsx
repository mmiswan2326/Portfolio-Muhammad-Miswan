"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight, Loader2, Check, AlertCircle } from "lucide-react";
import { socialLinks } from "@/data/social";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

const icons = { github: Github, linkedin: Linkedin, mail: Mail, resume: Download };

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const magnetic = useMagnetic<HTMLButtonElement>(4);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value, // honeypot
    };

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative z-10 py-28 md:py-40">
      {/* localized enhancement of the existing orange glow — soft, layered, vignetted */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.14),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,rgba(11,11,15,0.5)_100%)]" />
      </div>

      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something"
          subtitle="I'm currently open to internships, freelance opportunities, AI projects, and meaningful collaborations. If you have an opportunity or an idea, I'd love to hear from you."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="contact-status"
            className="relative overflow-hidden rounded-xl2 border border-border bg-card/60 p-7 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_30px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.14] sm:p-9"
          >
            {/* honeypot — visually and semantically hidden from real visitors */}
            <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your full name"
                disabled={status === "loading"}
                className={inputClass}
              />
            </Field>

            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                disabled={status === "loading"}
                className={inputClass}
              />
            </Field>

            <Field label="Message" htmlFor="message" className="mb-6">
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Tell me about your project, internship opportunity, collaboration, or idea..."
                disabled={status === "loading"}
                className={cn(inputClass, "resize-none")}
              />
            </Field>

            <button
              ref={magnetic.ref}
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
              type="submit"
              disabled={status === "loading"}
              className={cn(
                "group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-[box-shadow,transform] duration-300 will-change-transform",
                "bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_auto] bg-left hover:bg-right",
                "shadow-[0_8px_28px_-8px_rgba(255,107,0,0.55)] hover:shadow-[0_16px_40px_-10px_rgba(255,107,0,0.75)]",
                "disabled:cursor-not-allowed disabled:opacity-80",
                status === "success" && "from-success via-success to-success shadow-[0_8px_28px_-8px_rgba(34,197,94,0.5)]",
                status === "error" && "from-red-500 via-red-500 to-red-500 shadow-[0_8px_28px_-8px_rgba(239,68,68,0.5)]"
              )}
              style={{ transition: "background-position 600ms ease, box-shadow 300ms ease, transform 150ms ease" }}
            >
              {/* shine sweep on hover, idle state only */}
              {status === "idle" && (
                <span className="pointer-events-none absolute inset-0 -z-0 opacity-0 group-hover:opacity-100">
                  <span className="absolute inset-y-0 left-0 w-1/3 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </span>
              )}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={status}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex items-center gap-2"
                >
                  {status === "idle" && <>Send Message <span aria-hidden>→</span></>}
                  {status === "loading" && (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <Check size={16} /> Message sent successfully!
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <AlertCircle size={16} /> Try again
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <div id="contact-status" role="status" aria-live="polite" className="mt-3 min-h-[20px] text-center text-[13px]">
              {status === "error" && <span className="text-red-400">{errorMsg}</span>}
            </div>

            <p className="mt-1 flex items-center justify-center gap-1.5 text-center text-[13px] text-faint">
              <Check size={13} className="text-success" /> Usually replies within 24 hours
            </p>
          </form>

          <div className="flex flex-col gap-3.5">
            {socialLinks.map((link) => {
              const Icon = icons[link.icon];
              const isExternalLink = /^https?:\/\//.test(link.href);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternalLink ? "_blank" : undefined}
                  rel={isExternalLink ? "noopener noreferrer" : undefined}
                  className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border bg-card/60 px-5 py-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-card"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: "radial-gradient(220px circle at 15% 50%, rgba(255,138,61,0.12), transparent 70%)",
                    }}
                  />
                  <div className="relative z-10 flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-borderHover group-hover:text-primary">
                      <Icon size={17} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-bold">{link.label}</span>
                        {link.badge && (
                          <span className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[9.5px] text-faint">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      {link.description && (
                        <div className="mt-0.5 text-[13px] text-dim">{link.description}</div>
                      )}
                      <div className="mt-1 font-mono text-[12.5px] text-faint">{link.value}</div>
                      {link.meta && <div className="mt-0.5 font-mono text-[11px] text-faint">{link.meta}</div>}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="relative z-10 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-surface/70 px-4 py-3.5 text-[14.5px] text-white placeholder:text-faint outline-none transition-[border-color,box-shadow] duration-[250ms] focus:border-primary focus:shadow-[0_0_0_4px_rgba(255,107,0,0.12)] disabled:opacity-60";

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-5", className)}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-mono text-[11.5px] uppercase tracking-wide text-faint"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
