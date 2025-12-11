import { KPICard, ChartCard, ActivityItem } from "@/components/dashboard";
import {
  kpiData,
  lineChartData,
  pieChartData,
  recentActivity,
} from "@/lib/constants";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, Ama
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Track, manage and forecast your team&apos;s activity and productivity
        </p>
      </div>

      {/* KPI Cards Grid - Staggered animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-stagger">
        {kpiData.map((kpi) => (
          <KPICard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            subtitle={kpi.subtitle}
            type={kpi.type}
            progress={kpi.progress}
            change={kpi.change}
            trend={kpi.trend}
          />
        ))}
      </div>

      {/* Charts Grid */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <ChartCard
          title=""
          subtitle="Number of tasks"
          type="line"
          data={lineChartData}
        />
        <ChartCard type="pie" title="" data={pieChartData} />
      </div>

      {/* Recent Activity */}
      <div
        className="bg-card border border-border rounded-xl p-6 animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Recent Activity
        </h2>
        <div className="divide-y divide-border">
          {recentActivity.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}
