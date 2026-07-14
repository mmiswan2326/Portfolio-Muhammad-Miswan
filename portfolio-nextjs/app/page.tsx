import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Hackathons } from "@/components/sections/Hackathons";
import { GithubStats } from "@/components/sections/GithubStats";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Hackathons />
      <GithubStats />
      <Contact />
    </main>
  );
}
