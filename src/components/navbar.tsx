"use client";

import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useActiveSection } from "@/hooks/use-active-section";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

// Sticky navbar; active link follows scroll via IntersectionObserver.
export function Navbar({ name }: { name: string }) {
  const active = useActiveSection(["work", "about", "contact"]);
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === "light" ? "light" : "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-275 items-center justify-between px-4 sm:px-6"
      >
        <a href="#top" className="text-sm font-semibold text-foreground">
          {name}
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center gap-1 sm:gap-2">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  data-umami-event="nav-jump"
                  data-umami-event-section={link.id}
                  className={cn(
                    "inline-flex min-h-11 items-center px-3 h-11 text-sm transition-colors",
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
          <AnimatedThemeToggler
            theme={currentTheme}
            onThemeChange={(nextTheme) => {
              track("theme-toggle", { theme: nextTheme });
              setTheme(nextTheme);
            }}
            easing="cubic-bezier(.53,.01,.34,.93)"
            aria-label="Toggle theme"
            className="inline-flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground [&_svg]:size-5"
          />
        </div>
      </nav>
    </header>
  );
}
