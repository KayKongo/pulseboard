export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back, Ama
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Track, manage and forecast your team&apos;s activity and productivity
        </p>
      </div>

      {/* Placeholder for KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-40 bg-card border border-border rounded-xl flex items-center justify-center"
          >
            <p className="text-muted-foreground">KPI Card {i}</p>
          </div>
        ))}
      </div>

      {/* Placeholder for Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="h-64 bg-card border border-border rounded-xl flex items-center justify-center"
          >
            <p className="text-muted-foreground">Chart {i}</p>
          </div>
        ))}
      </div>

      {/* Placeholder for Recent Activity */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <p className="text-muted-foreground">Activity items coming soon...</p>
      </div>
    </div>
  );
}
