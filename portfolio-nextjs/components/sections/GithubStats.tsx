import Image from "next/image";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GithubStats() {
  const u = site.githubUsername;

  return (
    <section id="github" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading eyebrow="Activity" title="GitHub Stats" />
        <div className="grid grid-cols-1 gap-4.5 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-5">
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=dark&background=15171d&border=272729&stroke=7FB685&ring=A7D7A9&fire=4ADE80&currStreakLabel=F5F7F2`}
              alt="GitHub streak stats"
              width={800}
              height={200}
              className="w-full rounded-lg"
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-4.5">
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-5">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=dark&bg_color=15171d&border_color=272729&title_color=A7D7A9&icon_color=4ADE80&text_color=B8C7BE`}
                alt="GitHub stats"
                width={500}
                height={200}
                className="w-full rounded-lg"
                unoptimized
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-5">
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=dark&bg_color=15171d&border_color=272729&title_color=A7D7A9&text_color=B8C7BE`}
                alt="Top languages"
                width={500}
                height={200}
                className="w-full rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
