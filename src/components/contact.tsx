import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import type { Profile } from "@/types/types";

// Contact: form on one side, plain mailto + availability on the other.
export function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <Reveal>
        <h2 id="contact-heading" className="text-2xl font-bold tracking-tight">
          Contact
        </h2>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal delay={0.05}>
          <ContactForm />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-3 rounded-[12px] border border-border bg-card p-5 sm:p-6">
            <p className="text-sm text-muted-foreground">Prefer email?</p>
            <a
              href={`mailto:${profile.email}`}
              className="break-all text-lg font-medium text-foreground underline underline-offset-4 hover:text-white"
            >
              {profile.email}
            </a>
            <p className="text-sm text-muted-foreground">
              {profile.availibility}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
