import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// I need this to merge Tailwind classes properly
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
