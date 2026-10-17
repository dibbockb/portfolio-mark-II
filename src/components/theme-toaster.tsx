"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

// Keeps toasts in sync with the active theme (defaults to dark before mount).
export function ThemeToaster() {
  const { theme } = useTheme();

  return (
    <Toaster
      theme={theme === "light" ? "light" : "dark"}
      position="bottom-right"
    />
  );
}
