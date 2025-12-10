import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "completed" | "blocked" | "in-progress" | "to-do" | "default";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        // Base styles
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",

        // Variants
        {
          // Completed - Green
          "bg-status-completed/10 text-status-completed dark:bg-status-completed/20":
            variant === "completed",

          // Blocked - Red
          "bg-status-blocked/10 text-status-blocked dark:bg-status-blocked/20":
            variant === "blocked",

          // In Progress - Blue
          "bg-status-in-progress/10 text-status-in-progress dark:bg-status-in-progress/20":
            variant === "in-progress",

          // To Do - Gray
          "bg-status-to-do/10 text-status-to-do dark:bg-status-to-do/20":
            variant === "to-do",

          // Default - Neutral
          "bg-muted text-muted-foreground": variant === "default",
        },

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
