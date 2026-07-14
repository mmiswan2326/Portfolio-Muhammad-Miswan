import { Project } from "@/types";

// This drives the Projects section AND the filter tabs (categories).
export const projects: Project[] = [
  {
    name: "AI Smart Study OS",
    slug: "smart-study-os",
    description:
      "An AI-powered study companion that turns notes and syllabi into structured plans, summaries, and quizzes — built to reduce the time between \"I have an exam\" and \"I know what to study.\"",
    tech: ["Next.js", "LangChain", "FastAPI", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: true,
    span: 2,
    categories: ["ai", "fullstack"],
  },
  {
    name: "QualityVision AI",
    slug: "quality-vision",
    description: "Computer-vision system for automated visual quality inspection on production lines.",
    tech: ["OpenCV", "Python", "Scikit-Learn"],
    github: "#",
    demo: "#",
    categories: ["ai"],
  },
  {
    name: "ProfitLens POS System",
    slug: "profitlens-pos",
    description:
      "A point-of-sale platform with live margin tracking, giving small retailers real-time visibility into profit, not just revenue.",
    tech: ["React", "FastAPI", "MongoDB"],
    github: "#",
    demo: "#",
    categories: ["fullstack"],
  },
  {
    name: "Loan Prediction",
    slug: "loan-prediction",
    description: "Classification model estimating loan approval likelihood from applicant financial history.",
    tech: ["Pandas", "Scikit-Learn"],
    github: "#",
    demo: "#",
    categories: ["data", "ai"],
  },
  {
    name: "Customer Churn Prediction",
    slug: "churn-prediction",
    description:
      "Predicts which subscribers are likely to leave, ranked by risk, so retention efforts go where they matter.",
    tech: ["Python", "NumPy", "Scikit-Learn"],
    github: "#",
    demo: "#",
    categories: ["data", "ai"],
  },
  {
    name: "Insurance Claim Prediction",
    slug: "insurance-claims",
    description: "Regression pipeline estimating claim likelihood and severity from policyholder data.",
    tech: ["Pandas", "Scikit-Learn", "SQL"],
    github: "#",
    demo: "#",
    categories: ["data", "ai"],
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "AI / ML", value: "ai" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Data Science", value: "data" },
];
