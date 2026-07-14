import { SocialLink } from "@/types";

// This address is used in the portfolio UI and should also match the
// CONTACT_TO_EMAIL value in .env.local for the contact form API route.
const REAL_EMAIL = "mmiswan2326@gmail.com";
const EMAIL_SUBJECT = "Portfolio Inquiry";
const EMAIL_BODY =
  "Hi Muhammad,\n\nI came across your portfolio and would love to connect regarding an opportunity.\n\nBest regards,";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(REAL_EMAIL)}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    value: "github.com/miswan",
    href: "https://github.com/mmiswan2326",
    icon: "github",
    description: "Explore my projects and open-source work",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/miswan",
    href: "https://www.linkedin.com/in/muhammad-miswan-9479673b1/",
    icon: "linkedin",
    description: "Let's connect professionally",
  },
  {
    label: "Email",
    value: REAL_EMAIL,
    href: GMAIL_COMPOSE_URL,
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
