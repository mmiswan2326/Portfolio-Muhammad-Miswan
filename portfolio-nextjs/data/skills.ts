import { SkillCategory } from "@/types";

// Add, remove, or reorder categories/skills freely.
export const skills: SkillCategory[] = [
  { title: "Languages", skills: ["Python", "C++", "JavaScript", "SQL"] },
  { title: "Frontend", skills: ["React", "Next.js", "HTML", "CSS", "Tailwind"] },
  { title: "Backend", skills: ["FastAPI", "REST APIs"] },
  { title: "Database", skills: ["PostgreSQL", "SQLite", "MongoDB"] },
  {
    title: "AI / ML",
    span: 2,
    skills: ["Pandas", "NumPy", "Scikit-Learn", "OpenCV", "LangChain", "LLM Applications"],
  },
  { title: "Tools", span: 2, skills: ["Git", "GitHub", "Docker", "Postman", "VS Code"] },
];
