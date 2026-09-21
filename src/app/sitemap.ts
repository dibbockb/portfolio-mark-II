import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl.replace(/\/$/, "");
  return [
    { url: base, lastModified: new Date() },
    ...projects
      .filter((p) => p.caseStudy)
      .map((p) => ({
        url: `${base}/projects/${p.slug}`,
        lastModified: new Date(),
      })),
  ];
}
