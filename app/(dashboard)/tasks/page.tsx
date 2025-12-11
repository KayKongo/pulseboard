"use client";

import { TaskTable } from "@/components/tasks";
import { tasks } from "@/lib/constants";

export default function TasksPage() {
  const handleAddTask = () => {
    console.log("Add task clicked - Modal will open in Phase 5");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Task List</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Centralize, coordinate and complete tasks with full team visibility.
        </p>
      </div>

      {/* Task Table */}
      <TaskTable tasks={tasks} onAddTask={handleAddTask} />
    </div>
  );
}
