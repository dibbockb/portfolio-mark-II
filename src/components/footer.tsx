import { SocialLinks } from "@/components/social-links";

// Server component: no personal content hardcoded, everything via props.
export function Footer({
  name,
  github,
  linkedin,
  x,
}: {
  name: string;
  github?: string;
  linkedin?: string;
  x?: string;
}) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {name}
        </p>
        <SocialLinks github={github} linkedin={linkedin} x={x} />
      </div>
    </footer>
  );
}
