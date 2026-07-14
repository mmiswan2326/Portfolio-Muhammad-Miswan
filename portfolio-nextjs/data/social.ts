import { SocialLink } from "@/types";

// TODO: replace with your real email — this placeholder is not a working inbox.
// This same address should also go in .env.local as CONTACT_TO_EMAIL for the
// contact form's API route (see app/api/contact/route.ts).
const REAL_EMAIL = "hello@miswan.dev"; // <-- put your actual email here

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    value: "github.com/miswan",
    href: "https://github.com/miswan",
    icon: "github",
    description: "Explore my projects and open-source work",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/miswan",
    href: "https://linkedin.com/in/miswan",
    icon: "linkedin",
    description: "Let's connect professionally",
  },
  {
    label: "Email",
    value: REAL_EMAIL,
    href: `mailto:${REAL_EMAIL}`,
    icon: "mail",
    description: "Usually replies within 24 hours",
  },
  {
    label: "Resume",
    value: "Download Resume",
    href: "/resume.pdf",
    icon: "resume",
    description: "Updated July 2026",
    badge: "PDF",
  },
];
