import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Small stack badge used under each project.
export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 text-xs text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
