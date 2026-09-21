import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/types/types";

// Featured projects render first as large cards; the rest in a 2-col grid.
export function Work({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" aria-labelledby="work-heading">
      <Reveal>
        <h2 id="work-heading" className="text-2xl font-bold tracking-tight">
          Work
        </h2>
      </Reveal>
      <div className="mt-6 space-y-5">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min(i * 0.05, 0.2)}>
            <ProjectCard project={project} large />
          </Reveal>
        ))}
      </div>
      {rest.length > 0 && (
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 0.05, 0.2)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
