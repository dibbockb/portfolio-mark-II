type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: EventData) => void;
    };
  }
}

// Umami's tracker (loaded in the root layout) defines window.umami. Ad blockers
// routinely drop that script, so this no-ops rather than throwing - which matters
// inside try/catch blocks that would otherwise report a false failure.
export function track(event: string, data?: EventData) {
  if (typeof window === "undefined") return;
  window.umami?.track(event, data);
}
