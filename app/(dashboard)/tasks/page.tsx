"use client";

import { useState } from "react";
import { TaskTable, TaskModal, TaskFormData } from "@/components/tasks";
import { tasks } from "@/lib/constants";

export default function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (taskData: TaskFormData) => {
    console.log("New task:", taskData);
    // TODO: Add task to state/database
    // For now, just log it
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Task List</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Centralize, coordinate and complete tasks with full team visibility.
        </p>
      </div>

      {/* Task Table */}
      <TaskTable tasks={tasks} onAddTask={handleAddTask} />

      {/* Add Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
