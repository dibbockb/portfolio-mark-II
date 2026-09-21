import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

// Home: all content comes from src/data files, never hardcoded here.
export default function HomePage() {
  return (
    <div id="top" className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
      <Hero profile={profile} />
      <div className="space-y-16 pb-16 md:space-y-24 md:pb-24">
        <Work projects={projects} />
        <Skills groups={skills} />
        <About profile={profile} />
        <Contact profile={profile} />
      </div>
    </div>
  );
}
