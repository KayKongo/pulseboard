export interface Task {
  id: string;
  title: string;
  status: "completed" | "in-progress" | "blocked" | "to-do";
  assignee: string;
  department: string;
  createdAt: Date;
}

export interface KPI {
  id: string;
  title: string;
  value: string | number;
  change?: number; // percentage change
  trend?: "up" | "down";
  subtitle?: string;
}

export interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar: string;
    department: string;
  };
  action: string;
  task: string;
  status: Task["status"];
  timestamp: Date;
}
