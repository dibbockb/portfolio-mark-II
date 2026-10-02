import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/types";

// Neutral block shown when a project has no image yet.
function ImageFallback({ title }: { title: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-full min-h-48 w-full items-center justify-center bg-background px-6 text-center"
    >
      <span className="text-sm text-muted-foreground">{title}</span>
    </div>
  );
}

function ProjectImage({
  project,
  large,
}: {
  project: Project;
  large?: boolean;
}) {
  const wrapper = cn(
    "overflow-hidden rounded-[12px] border border-border bg-background",
    large ? "md:w-2/5" : "w-full",
  );
  if (!project.image) {
    return (
      <div className={wrapper}>
        <ImageFallback title={project.title} />
      </div>
    );
  }
  return (
    <div className={wrapper}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={800}
        height={500}
        sizes={
          large
            ? "(max-width: 768px) 100vw, 40vw"
            : "(max-width: 768px) 100vw, 50vw"
        }
        className="h-auto w-full object-cover"
      />
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
      {/* {project.caseStudy && (
        <a
          href={`/projects/${project.slug}`}
          className="text-foreground underline underline-offset-4 hover:text-white"
        >
          Case study
        </a>
      )} */}
      {project.links.docs && (
        <a
          href={project.links.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4 hover:text-white"
        >
          API docs
        </a>
      )}
      {project.links.live && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4 hover:text-white"
        >
          Live
        </a>
      )}
      <a
        href={project.links.repository}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline underline-offset-4 hover:text-white"
      >
        Repo
      </a>
    </div>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="min-w-0 flex-1">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <ProjectLinks project={project} />
    </div>
  );
}

// Card hover only brightens border/bg (no lift/shadow), via CSS transition.
export function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex flex-col gap-5 rounded-xl border border-border bg-card p-5 transition-colors hover:border-white/20 hover:bg-card-hover sm:p-6",
        large && "md:flex-row md:items-start",
      )}
    >
      <ProjectImage project={project} large={large} />
      <ProjectBody project={project} />
    </article>
  );
}
