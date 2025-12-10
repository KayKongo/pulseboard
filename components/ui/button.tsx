import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",

          // Variants
          {
            // Primary - Dark background
            "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary":
              variant === "primary",

            // Secondary - Light background with border
            "bg-white dark:bg-primary-900 border border-border text-foreground hover:bg-light-gray dark:hover:bg-primary/80":
              variant === "secondary",

            // Ghost - Transparent
            "bg-transparent hover:bg-light-gray dark:hover:bg-primary/50 text-foreground":
              variant === "ghost",

            // Outline - Border only
            "border border-border bg-transparent text-foreground hover:bg-light-gray dark:hover:bg-primary/50":
              variant === "outline",
          },

          // Sizes
          {
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-4 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
          },

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
