import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// I need cn (a helper function) to merge Tailwind classes cleanly and properly
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
