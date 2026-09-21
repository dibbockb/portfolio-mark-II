import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import type { Profile } from "@/types/types";

// Hero: name, role, tagline, availability, then actions. All from data.
export function Hero({ profile }: { profile: Profile }) {
  return (
    <section aria-labelledby="hero-heading" className="py-12 md:py-20">
      <Reveal>
        <p className="text-sm text-muted-foreground">{profile.role}</p>
        <h1
          id="hero-heading"
          className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl"
        >
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {profile.tagline}
        </p>
        <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 rounded-full bg-emerald-400"
          />
          {profile.availibility}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex h-10 items-center justify-center rounded-[12px] bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-white/85"
          >
            View work
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-[12px] border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-white/20 hover:bg-card-hover"
          >
            Resume
          </a>
          <SocialLinks
            github={profile.links.github}
            linkedin={profile.links.linkedin}
            x={profile.links.twitter}
          />
        </div>
      </Reveal>
    </section>
  );
}
