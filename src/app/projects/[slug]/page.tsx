import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && p.caseStudy);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} case study`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  let Post: React.ComponentType;
  try {
    // content/ lives at the repo root (per spec), so import relatively.
    ({ default: Post } = await import(`../../../../content/${slug}.mdx`));
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-[1100px] px-4 py-12 sm:px-6">
      <Link
        href="/#work"
        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        ← Back to work
      </Link>
      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        {project.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {project.links.docs && (
          <a
            href={project.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            API docs
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            Live
          </a>
        )}
        <a
          href={project.links.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4"
        >
          Repo
        </a>
      </div>
      <div className="prose prose-invert mt-10 max-w-none">
        <Post />
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        Contact: <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
    </article>
  );
}
