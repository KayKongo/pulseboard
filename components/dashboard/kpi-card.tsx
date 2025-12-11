import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: number;
  trend?: "up" | "down";
  type: "progress" | "number" | "percentage";
  progress?: number; // For progress type (0-100)
  className?: string;
}

export function KPICard({
  title,
  value,
  subtitle,
  change,
  trend,
  type,
  progress,
  className,
}: KPICardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl p-6 relative",
        className
      )}
    >
      {/* Header with Title and Menu Dots */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <button
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="More options"
        >
          <DotsVerticalIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Content Based on Type */}
      {type === "progress" && progress !== undefined && (
        <div className="flex items-center gap-6">
          {/* Progress Ring */}
          <div className="relative">
            <svg className="h-20 w-20 -rotate-90" viewBox="0 0 100 100">
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted/20"
              />
              {/* Progress Circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                className="text-secondary transition-all duration-500"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
              />
            </svg>
          </div>

          {/* Value and Subtitle */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">{subtitle}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
          </div>
        </div>
      )}

      {type === "number" && (
        <div className="flex flex-col items-center">
          <p className="text-5xl font-bold text-foreground mb-2">{value}</p>
          {change !== undefined && trend && (
            <div className="flex items-center gap-1.5">
              {trend === "down" ? (
                <TrendDownIcon className="h-4 w-4 text-status-blocked" />
              ) : (
                <TrendUpIcon className="h-4 w-4 text-status-completed" />
              )}
              <span
                className={cn(
                  "text-sm font-medium",
                  trend === "down"
                    ? "text-status-blocked"
                    : "text-status-completed"
                )}
              >
                {Math.abs(change)}%
              </span>
              <span className="text-sm text-muted-foreground">{subtitle}</span>
            </div>
          )}
        </div>
      )}

      {type === "percentage" && (
        <div className="flex flex-col items-center">
          <p
            className={cn(
              "text-5xl font-bold mb-2",
              // Green for high percentages (>= 95)
              typeof value === "string" &&
                parseInt(value) >= 95 &&
                "text-status-completed"
            )}
          >
            {value}
          </p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}

// Icons
function DotsVerticalIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}

function TrendDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
      />
    </svg>
  );
}

function TrendUpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
      />
    </svg>
  );
}
