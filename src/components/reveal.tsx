"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

// Matches `--animate-rise: rise 1.2s cubic-bezier(0.1, 0, 0.18, 1) both`
// @keyframes rise { from { opacity: 0; translateY(24px) scale(0.98) } }
export const EASE_RISE: [number, number, number, number] = [0.1, 0, 0.18, 1];

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: EASE_RISE, delay }}
      style={{ willChange: "opacity, transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}