import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Minimal shadcn-style button (primary = white bg, dark text).
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-[12px] px-4 text-sm font-medium transition-colors",
        "disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-white/85",
        variant === "outline" &&
          "border border-border bg-transparent text-foreground hover:bg-card-hover hover:border-white/20",
        className,
      )}
      {...props}
    />
  );
}
