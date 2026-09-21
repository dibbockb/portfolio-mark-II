import { Reveal } from "@/components/reveal";
import type { SkillGroup } from "@/types/types";

// Each group is a label plus always-visible text chips. No icons/tooltips.
export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <Reveal>
        <h2 id="skills-heading" className="text-2xl font-bold tracking-tight">
          Skills
        </h2>
      </Reveal>
      <dl className="mt-6 space-y-5">
        {groups.map((group, i) => (
          <Reveal key={group.label} delay={Math.min(i * 0.05, 0.2)}>
            <div className="rounded-[12px] border border-border bg-card p-5">
              <dt className="text-sm font-semibold text-foreground">
                {group.label}
              </dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-1 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
