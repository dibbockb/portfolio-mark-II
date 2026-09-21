import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// Social icons shared by hero and footer. Renders only links that exist.
export function SocialLinks({
  github,
  linkedin,
  x,
  className = "",
}: {
  github?: string;
  linkedin?: string;
  x?: string;
  className?: string;
}) {
  const links = [
    github ? { href: github, label: "GitHub", Icon: FaGithub } : null,
    linkedin ? { href: linkedin, label: "LinkedIn", Icon: FaLinkedin } : null,
    x ? { href: x, label: "X", Icon: FaXTwitter } : null,
  ].filter((l): l is NonNullable<typeof l> => l !== null);

  if (links.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-border text-muted-foreground transition-colors hover:border-white/20 hover:bg-card-hover hover:text-foreground"
        >
          <Icon size={18} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
