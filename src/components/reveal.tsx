"use client";
import { easeOut, motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0.08,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, }}
      whileInView={{ opacity: 1, y: 0, }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: easeOut, delay }}
      style={{ willChange: "filter, opacity, transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}