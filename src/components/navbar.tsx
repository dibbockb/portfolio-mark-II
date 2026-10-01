"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

// Sticky navbar; active link follows scroll via IntersectionObserver.
export function Navbar({ name }: { name: string }) {
  const active = useActiveSection(["work", "about", "contact"]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-4 sm:px-6"
      >
        <a href="#top" className="text-sm font-semibold text-foreground">
          {name}
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "inline-flex min-h-[44px] items-center px-3 h-11 text-sm transition-colors",
                  active === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
