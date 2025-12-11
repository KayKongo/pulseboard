import { Task } from "@/types";
import { StatusBadge } from "./status-badge";
import { AvatarGroup } from "@/components/ui/avatar";
import { teamMembers } from "@/lib/constants";
import { format } from "date-fns";

interface TaskRowProps {
  task: Task;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function TaskRow({ task, onDelete, onEdit }: TaskRowProps) {
  // Get assignee avatars
  const assigneeAvatars = task.assignees.map((assigneeId) => {
    const member = teamMembers.find((m) => m.id === assigneeId);
    return {
      src: member?.avatar,
      alt: member?.name || "Unknown",
    };
  });

  return (
    <tr className="border-b border-border hover:bg-muted/50 transition-colors">
      {/* Task Title */}
      <td className="px-4 py-4 text-sm font-medium text-foreground">
        {task.title}
      </td>

      {/* Status */}
      <td className="px-4 py-4">
        <StatusBadge status={task.status} />
      </td>

      {/* Date Created */}
      <td className="px-4 py-4 text-sm text-muted-foreground">
        {format(task.dateCreated, "d/M/yyyy")}
      </td>

      {/* Deadline */}
      <td className="px-4 py-4 text-sm text-muted-foreground">
        {format(task.deadline, "d/M/yyyy")}
      </td>

      {/* Assignees */}
      <td className="px-4 py-4">
        <AvatarGroup avatars={assigneeAvatars} max={5} size="sm" />
      </td>

      {/* Actions */}
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDelete?.(task.id)}
            className="p-1 hover:bg-muted rounded transition-colors"
            aria-label="Delete task"
          >
            <TrashIcon className="h-5 w-5 text-muted-foreground hover:text-status-blocked" />
          </button>
          <button
            onClick={() => onEdit?.(task.id)}
            className="p-1 hover:bg-muted rounded transition-colors"
            aria-label="Edit task"
          >
            <PencilIcon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </button>
        </div>
      </td>
    </tr>
  );
}

// Icons
function TrashIcon({ className }: { className?: string }) {
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
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
}

function PencilIcon({ className }: { className?: string }) {
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
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
    </svg>
  );
}
