import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { Profile } from "@/types/types";

export function About({ profile }: { profile: Profile }) {
  const photoExists = existsSync(join(process.cwd(), "public", "me.jpg"));
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="about" aria-labelledby="about-heading">
      <Reveal>
        <h2 id="about-heading" className="text-2xl font-bold tracking-tight">
          About
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
          {!photoExists ? (
            <Image
              src="https://res.cloudinary.com/lpqu4s3d/image/upload/v1790848044/portraitBNW.png"
              alt={`Photo of ${profile.name}`}
              width={128}
              height={128}
              sizes="128px"
              className="h-32 w-32 shrink-0 rounded-full border border-border object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-border bg-card text-2xl font-semibold text-foreground"
            >
              {initials}
            </div>
          )}
          <div className="space-y-4">
            {profile.about.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <p className="text-sm text-muted-foreground">
              {profile.location} · {profile.timezone}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
