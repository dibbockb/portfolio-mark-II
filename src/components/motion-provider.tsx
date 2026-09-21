"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// Respects the OS reduced-motion setting for all motion below it.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
