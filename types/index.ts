export interface TeamMember {
  id: string;
  name: string;
  department: string;
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  status: "completed" | "in-progress" | "blocked" | "to-do";
  dateCreated: Date;
  deadline: Date;
  assignees: string[]; // Array of TeamMember IDs
  department: string;
}

export interface ActivityItem {
  id: string;
  user: TeamMember;
  action: string;
  task: string;
  status: Task["status"];
  timestamp: Date;
}

export interface KPI {
  id: string;
  title: string;
  value: string | number;
  change?: number; // percentage change
  trend?: "up" | "down";
  subtitle?: string;
  type: "progress" | "number" | "percentage";
  progress?: number; // For progress type
}
