"use client";

import { cn } from "@/lib/utils";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Line chart data with index signature for Recharts compatibility
interface LineChartData {
  month: string;
  tasks: number;
  [key: string]: string | number; // Index signature for Recharts
}

// Pie chart data with index signature for Recharts compatibility
interface PieChartData {
  department: string;
  members: number;
  fill: string;
  [key: string]: string | number; // Index signature for Recharts
}

type ChartCardProps =
  | {
      title: string;
      subtitle?: string;
      type: "line";
      data: LineChartData[];
      className?: string;
    }
  | {
      title: string;
      subtitle?: string;
      type: "pie";
      data: PieChartData[];
      className?: string;
    };

export function ChartCard({
  title,
  subtitle,
  type,
  data,
  className,
}: ChartCardProps) {
  return (
    <div
      className={cn("bg-card border border-border rounded-xl p-6", className)}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {subtitle && (
          <p className="text-sm text-secondary mt-1 flex items-center gap-1.5">
            <CheckCircleIcon className="h-4 w-4" />
            {subtitle}
          </p>
        )}
      </div>

      {/* Chart */}
      {type === "line" && (
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              className="stroke-border"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              className="text-xs text-muted-foreground"
              tick={{ fill: "currentColor" }}
              axisLine={{ stroke: "currentColor", strokeWidth: 0.5 }}
              tickLine={false}
            />
            <YAxis
              className="text-xs text-muted-foreground"
              tick={{ fill: "currentColor" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Line
              type="monotone"
              dataKey="tasks"
              stroke="#3ABDB7"
              strokeWidth={2}
              dot={{ fill: "#3ABDB7", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

      {type === "pie" && (
        <div className="flex items-center justify-between gap-8">
          {/* Pie Chart */}
          <ResponsiveContainer width="60%" height={240}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="members"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            {data.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: entry.fill }}
                />
                <span className="text-sm text-muted-foreground">
                  {entry.department}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Label */}
      {type === "line" && (
        <p className="text-xs text-center text-secondary mt-4 font-medium">
          Months
        </p>
      )}
      {type === "pie" && (
        <p className="text-sm text-center text-secondary mt-6 font-medium">
          Teams and their departments
        </p>
      )}
    </div>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
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
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
