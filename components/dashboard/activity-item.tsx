import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ActivityItem as ActivityItemType } from "@/types";
// import { formatDistanceToNow } from "date-fns";

interface ActivityItemProps {
  activity: ActivityItemType;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  // Map status to badge variant
  const getBadgeVariant = (
    status: ActivityItemType["status"]
  ): "completed" | "blocked" | "in-progress" | "to-do" => {
    return status;
  };

  // Format status for display
  const formatStatus = (status: string) => {
    const statusMap: Record<string, string> = {
      completed: "Completed",
      blocked: "Blocked",
      "in-progress": "In Progress",
      "to-do": "To Do",
    };
    return statusMap[status] || status;
  };

  return (
    <div className="flex items-start gap-3 py-3">
      {/* Avatar */}
      <Avatar src={activity.user.avatar} alt={activity.user.name} size="md" />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-medium text-foreground text-sm">
            {activity.user.name}
          </span>
          <span className="text-muted-foreground text-sm">|</span>
          <span className="text-muted-foreground text-sm">
            {activity.user.department}
          </span>
        </div>

        <span className="text-sm text-muted-foreground mt-1">
          {activity.action}{" "}
          <span className="italic text-foreground">
            &quot;{activity.task}&quot;
          </span>{" "}
          task to{" "}
          <Badge variant={getBadgeVariant(activity.status)} className="ml-1">
            {formatStatus(activity.status)}
          </Badge>
        </span>
      </div>

      {/* Timestamp (optional) */}
      {/* <span className="text-xs text-muted-foreground whitespace-nowrap">
        {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
      </span> */}
    </div>
  );
}
