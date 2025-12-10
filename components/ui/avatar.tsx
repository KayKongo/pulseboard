import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({
  className,
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  ...props
}: AvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-muted overflow-hidden",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 48px) 100vw, 48px"
        />
      ) : (
        <span className="font-medium text-muted-foreground">
          {fallback || alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}

// Avatar Group for stacking multiple avatars
export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  avatars: { src?: string; alt?: string }[];
  max?: number;
  size?: "sm" | "md" | "lg";
}

export function AvatarGroup({
  className,
  avatars,
  max = 5,
  size = "sm",
  ...props
}: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className={cn("flex -space-x-2", className)} {...props}>
      {displayAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          size={size}
          className="ring-2 ring-background"
        />
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            "relative inline-flex items-center justify-center rounded-full bg-muted ring-2 ring-background",
            size === "sm" && "h-8 w-8 text-xs",
            size === "md" && "h-10 w-10 text-sm",
            size === "lg" && "h-12 w-12 text-base"
          )}
        >
          <span className="font-medium text-muted-foreground">
            +{remaining}
          </span>
        </div>
      )}
    </div>
  );
}
