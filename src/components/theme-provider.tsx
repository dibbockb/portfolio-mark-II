"use client";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ scriptProps, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      scriptProps={{
        ...scriptProps,
        type: typeof window === "undefined" ? "text/javascript" : "text/plain",
      }}
    />
  );
}
