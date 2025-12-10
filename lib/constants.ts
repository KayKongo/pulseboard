import { Task, TeamMember, ActivityItem, KPI } from "@/types";

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    department: "Marketing Dept.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "candice-craig",
    name: "Candice Craig",
    department: "Marketing Dept.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "lunah-steiner",
    name: "Lunah Steiner",
    department: "Engineering Dept.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "drew-tano",
    name: "Drew Tano",
    department: "Human Resource Dept.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "andi-laine",
    name: "Andi Laine",
    department: "Engineering Dept.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "kate-noire",
    name: "Kate Noire",
    department: "Finance Dept.",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: "jonah-tim",
    name: "Jonah Tim",
    department: "Human Resource Dept.",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "michael-baker",
    name: "Michael Baker",
    department: "Engineering Dept.",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
];

// Tasks
export const tasks: Task[] = [
  {
    id: "1",
    title: "Draft content calendar",
    status: "completed",
    dateCreated: new Date("2025-07-12"),
    deadline: new Date("2026-03-01"),
    assignees: [
      "sarah-chen",
      "candice-craig",
      "lunah-steiner",
      "drew-tano",
      "andi-laine",
    ],
    department: "catalogapp.io",
  },
  {
    id: "2",
    title: "Review blog post",
    status: "blocked",
    dateCreated: new Date("2025-05-12"),
    deadline: new Date("2026-02-01"),
    assignees: [
      "sarah-chen",
      "candice-craig",
      "lunah-steiner",
      "drew-tano",
      "andi-laine",
      "kate-noire",
      "jonah-tim",
      "michael-baker",
    ],
    department: "catalogapp.io",
  },
  {
    id: "3",
    title: "Implement dashboard frontend",
    status: "in-progress",
    dateCreated: new Date("2025-02-12"),
    deadline: new Date("2026-01-01"),
    assignees: ["lunah-steiner"],
    department: "catalogapp.io",
  },
  {
    id: "4",
    title: "Prep PPT presentation",
    status: "to-do",
    dateCreated: new Date("2025-11-30"),
    deadline: new Date("2025-12-30"),
    assignees: ["drew-tano", "andi-laine"],
    department: "catalogapp.io",
  },
  {
    id: "5",
    title: "Build and test tracker APIs",
    status: "completed",
    dateCreated: new Date("2025-11-28"),
    deadline: new Date("2025-12-30"),
    assignees: ["lunah-steiner", "andi-laine", "michael-baker"],
    department: "catalogapp.io",
  },
  {
    id: "6",
    title: "Prepare Annual Report",
    status: "in-progress",
    dateCreated: new Date("2025-11-28"),
    deadline: new Date("2025-12-29"),
    assignees: ["kate-noire", "drew-tano", "jonah-tim", "sarah-chen"],
    department: "catalogapp.io",
  },
  {
    id: "7",
    title: "Compile company headcount",
    status: "blocked",
    dateCreated: new Date("2025-11-24"),
    deadline: new Date("2025-12-24"),
    assignees: [
      "drew-tano",
      "jonah-tim",
      "candice-craig",
      "andi-laine",
      "michael-baker",
    ],
    department: "catalogapp.io",
  },
  {
    id: "8",
    title: "Migrate database",
    status: "to-do",
    dateCreated: new Date("2025-11-21"),
    deadline: new Date("2025-12-20"),
    assignees: [
      "lunah-steiner",
      "michael-baker",
      "andi-laine",
      "kate-noire",
      "sarah-chen",
      "candice-craig",
    ],
    department: "catalogapp.io",
  },
];

// Recent Activity
export const recentActivity: ActivityItem[] = [
  {
    id: "1",
    user: teamMembers[0], // Sarah Chen
    action: "Moved",
    task: "Draft content calendar",
    status: "completed",
    timestamp: new Date("2025-12-09T10:30:00"),
  },
  {
    id: "2",
    user: teamMembers[1], // Candice Craig
    action: "Moved",
    task: "Review blog post",
    status: "blocked",
    timestamp: new Date("2025-12-09T09:15:00"),
  },
  {
    id: "3",
    user: teamMembers[2], // Lunah Steiner
    action: "Moved",
    task: "Implement dashboard frontend",
    status: "in-progress",
    timestamp: new Date("2025-12-09T08:45:00"),
  },
  {
    id: "4",
    user: teamMembers[3], // Drew Tano
    action: "Moved",
    task: "Prep PPT presentation",
    status: "to-do",
    timestamp: new Date("2025-12-08T16:20:00"),
  },
  {
    id: "5",
    user: teamMembers[4], // Andi Laine
    action: "Moved",
    task: "Build and test tracker APIs",
    status: "completed",
    timestamp: new Date("2025-12-08T14:10:00"),
  },
  {
    id: "6",
    user: teamMembers[5], // Kate Noire
    action: "Moved",
    task: "Prepare Annual Report",
    status: "in-progress",
    timestamp: new Date("2025-12-08T11:30:00"),
  },
  {
    id: "7",
    user: teamMembers[6], // Jonah Tim
    action: "Moved",
    task: "Compile company headcount",
    status: "blocked",
    timestamp: new Date("2025-12-07T15:45:00"),
  },
  {
    id: "8",
    user: teamMembers[7], // Michael Baker
    action: "Moved",
    task: "Migrate database",
    status: "to-do",
    timestamp: new Date("2025-12-07T13:20:00"),
  },
];

// KPI Data
export const kpiData: KPI[] = [
  {
    id: "1",
    title: "Tasks",
    value: "12/31",
    subtitle: "Tasks done",
    type: "progress",
    progress: 38.7, // 12/31 * 100
  },
  {
    id: "2",
    title: "Active Users",
    value: "1,250",
    change: -10,
    trend: "down",
    subtitle: "vs last month",
    type: "number",
  },
  {
    id: "3",
    title: "Uptime",
    value: "98%",
    subtitle: "System is healthy",
    type: "percentage",
  },
];

// Chart Data
export const lineChartData = [
  { month: "Jan", tasks: 45 },
  { month: "Feb", tasks: 52 },
  { month: "Mar", tasks: 48 },
  { month: "Apr", tasks: 61 },
  { month: "May", tasks: 55 },
  { month: "Jun", tasks: 67 },
  { month: "Jul", tasks: 70 },
  { month: "Aug", tasks: 65 },
  { month: "Sep", tasks: 73 },
  { month: "Oct", tasks: 78 },
  { month: "Nov", tasks: 82 },
  { month: "Dec", tasks: 75 },
];

export const pieChartData = [
  { department: "Engineering", members: 3, fill: "#3ABDB7" },
  { department: "Marketing", members: 2, fill: "#E5C3C0" },
  { department: "HR", members: 2, fill: "#9CA3AF" },
  { department: "Finance", members: 1, fill: "#10B981" },
];
