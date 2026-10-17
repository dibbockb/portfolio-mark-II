"use client";

import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ProjectVideo } from "@/components/project-video";
import { EASE_RISE } from "@/components/reveal";
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
  // Hover/focus reveal stays in CSS (no pointer-state desync); this flag only
  // suppresses the badge after a click so it can't stay stuck once the new tab opens.
  const [dismissed, setDismissed] = useState(false);

  const wrapper = cn(
    "group/media relative overflow-hidden rounded-[12px] border border-border bg-background",
    large ? "md:w-2/5" : "w-full",
  );
  // Centered "open in a new tab" affordance, revealed on hover or keyboard focus.
  const openBadge = cn(
    "pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-[cubic-bezier(0.1,0,0.18,1)]",
    dismissed
      ? "opacity-0"
      : "opacity-0 group-hover/media:opacity-100 group-focus-within/media:opacity-100",
  );
  // Dimming is scoped to the media itself, so the badge and card text stay bright.
  const mediaLayer =
    "transition-[filter] duration-300 ease-[cubic-bezier(0.1,0,0.18,1)] group-hover/media:brightness-[0.6]";

  const media = project.video ? (
    <ProjectVideo
      src={project.video.src}
      webmSrc={project.video.webmSrc}
      poster={project.video.poster ?? project.image?.src}
      label={project.image?.alt ?? `${project.title} demo`}
      delayMs={project.video.startDelayMs ?? 500}
    />
  ) : project.image ? (
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
  ) : (
    <ImageFallback title={project.title} />
  );

  const live = project.links.live;

  // Only a live demo gets the new-tab affordance; other media stays decorative.
  if (!live) {
    return <div className={wrapper}>{media}</div>;
  }

  return (
    <div className={wrapper}>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live site in a new tab`}
        onPointerEnter={() => setDismissed(false)}
        onPointerLeave={() => setDismissed(false)}
        onFocus={() => setDismissed(false)}
        onClick={(event) => {
          setDismissed(true);
          // A mouse click leaves focus behind; release it so focus-within
          // doesn't re-reveal the badge on the next pointer move.
          if (event.detail > 0) event.currentTarget.blur();
        }}
        className="block h-full w-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
      >
        <div className={mediaLayer}>{media}</div>
        <span aria-hidden="true" className={openBadge}>
          <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white shadow-lg">
            <SquareArrowOutUpRight className="size-5" />
          </span>
        </span>
      </a>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
      {/* {project.caseStudy && (
        <a
          href={`/projects/${project.slug}`}
          className="text-foreground underline underline-offset-4 hover:text-foreground-hover"
        >
          Case study
        </a>
      )} */}
      {project.links.docs && (
        <a
          href={project.links.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4 hover:text-foreground-hover"
        >
          API docs
        </a>
      )}
      {project.links.live && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4 hover:text-foreground-hover"
        >
          Live
        </a>
      )}
      <a
        href={project.links.repository}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline underline-offset-4 hover:text-foreground-hover"
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

// Card hover lifts slightly (scale + dim share the rise ease).
export function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <motion.article
      initial={false}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.3, ease: EASE_RISE }}
      className={cn(
        "group flex flex-col gap-5 rounded-xl border border-border bg-card p-5 transition-[background-color,border-color] duration-500 ease-[cubic-bezier(0.1,0,0.18,1)] hover:border-border-hover hover:bg-card-hover sm:p-6",
        large && "md:flex-row md:items-start",
      )}
    >
      <ProjectImage project={project} large={large} />
      <ProjectBody project={project} />
    </motion.article>
  );
}
