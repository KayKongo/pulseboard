export default function TasksPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Task List</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Centralize, coordinate and complete tasks with full team visibility.
        </p>
      </div>

      {/* Placeholder for Table */}
      <div className="bg-card border border-border rounded-xl p-8 min-h-[500px] flex items-center justify-center">
        <p className="text-muted-foreground">Task Table Coming in Phase 4</p>
      </div>
    </div>
  );
}
