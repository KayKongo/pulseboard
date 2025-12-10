export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-primary">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">
          Track, manage and forecast your team&apos;s activity and productivity
        </p>
      </div>

      {/* Placeholder for KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-32 bg-card border rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">KPI Card 1</p>
        </div>
        <div className="h-32 bg-card border rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">KPI Card 2</p>
        </div>
        <div className="h-32 bg-card border rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">KPI Card 3</p>
        </div>
      </div>
    </div>
  );
}
