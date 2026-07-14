import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social";

const icons = { github: Github, linkedin: Linkedin, mail: Mail } as const;

export function Footer() {
  // Only the social-style links (skip "resume" — it isn't a social link)
  const socials = socialLinks.filter((l): l is typeof l & { icon: keyof typeof icons } => l.icon in icons);

  return (
    <footer className="border-t border-border py-10 text-center">
      <div className="mb-5 flex justify-center gap-3">
        {socials.map((link) => {
          const Icon = icons[link.icon];
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-dim transition-all duration-300 hover:-translate-y-1 hover:border-borderHover hover:text-primary"
            >
              <Icon size={15} />
            </a>
          );
        })}
      </div>
      <p className="font-mono text-[13px] text-faint">
        Made with <span className="text-emerald-400">♥</span> by {site.name} · © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
