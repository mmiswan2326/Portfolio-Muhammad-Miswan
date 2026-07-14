export interface SkillCategory {
  title: string;
  span?: 1 | 2;
  skills: string[];
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  span?: 1 | 2;
  categories: string[]; // e.g. ["ai", "fullstack", "data"]
}

export interface ExperienceItem {
  role: string;
  org: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  date: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  short: string; // 2-letter badge text e.g. "ML"
}

export interface Hackathon {
  name: string;
  badge: string; // e.g. "Featured", "Participant"
  description: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "resume";
  description?: string; // short supporting line shown under the label
  meta?: string; // e.g. "Updated July 2026"
  badge?: string; // e.g. "PDF"
}
