// Tiny class-name joiner (avoids adding clsx/tailwind-merge deps).
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
