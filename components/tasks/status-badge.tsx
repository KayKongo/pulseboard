import { Badge } from "@/components/ui/badge";
import { Task } from "@/types";

type Status = Task["status"];

interface StatusBadgeProps {
  status: Status;
}

// Map each status to a label + variant
const statusMap: Record<
  Status,
  { label: string; variant: "completed" | "blocked" | "in-progress" | "to-do" }
> = {
  completed: { label: "Completed", variant: "completed" },
  blocked: { label: "Blocked", variant: "blocked" },
  "in-progress": { label: "In Progress", variant: "in-progress" },
  "to-do": { label: "To Do", variant: "to-do" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, variant } = statusMap[status];

  return <Badge variant={variant}>{label}</Badge>;
}
