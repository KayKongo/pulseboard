"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { teamMembers } from "@/lib/constants";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (task: TaskFormData) => void;
}

export interface TaskFormData {
  title: string;
  deadline: string;
  description: string;
  assignees: string[];
}

export function TaskModal({ isOpen, onClose, onSubmit }: TaskModalProps) {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    deadline: "",
    description: "",
    assignees: [],
  });

  const [showAssigneeDropdown, setShowAssigneeDropdown] = useState(false);

  // Get selected team members
  const selectedMembers = teamMembers.filter((member) =>
    formData.assignees.includes(member.id)
  );

  // Get unselected team members
  const availableMembers = teamMembers.filter(
    (member) => !formData.assignees.includes(member.id)
  );

  const handleAddAssignee = (memberId: string) => {
    setFormData({
      ...formData,
      assignees: [...formData.assignees, memberId],
    });
    setShowAssigneeDropdown(false);
  };

  const handleRemoveAssignee = (memberId: string) => {
    setFormData({
      ...formData,
      assignees: formData.assignees.filter((id) => id !== memberId),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    // Reset form
    setFormData({
      title: "",
      deadline: "",
      description: "",
      assignees: [],
    });
    onClose();
  };

  const handleCancel = () => {
    // Reset form
    setFormData({
      title: "",
      deadline: "",
      description: "",
      assignees: [],
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-foreground">Add New Task</h2>

        {/* Task Title */}
        <div className="flex w-full">
          <div className="space-y-2 w-full">
            <label className="text-sm font-medium text-foreground">
              Task Title
            </label>
            <Input
              placeholder="e.g. Migrate Database"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Description
          </label>
          <Textarea
            placeholder="Briefly describe what the task entails"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        {/* Assignees Section */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Deadline */}
            <div className="space-y-2 sm:order-2">
              <label className="text-sm font-medium text-foreground">
                Deadline
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                <Input
                  type="date"
                  placeholder="e.g. 07/12/2025"
                  value={formData.deadline}
                  onChange={(e) =>
                    setFormData({ ...formData, deadline: e.target.value })
                  }
                  className="pl-10"
                />
              </div>
            </div>

            {/* Assignees Dropdown */}
            <div className="space-y-2 sm:order-1 relative">
              <label className="text-sm font-medium text-foreground">
                Assignees
              </label>
              <button
                type="button"
                onClick={() => setShowAssigneeDropdown(!showAssigneeDropdown)}
                className="w-full flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors text-left"
              >
                <UserIcon className="h-5 w-5" />
                Select team member
              </button>

              {/* Dropdown */}
              {showAssigneeDropdown && availableMembers.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
                  {availableMembers.map((member) => (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => handleAddAssignee(member.id)}
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-muted transition-colors text-left"
                    >
                      <Avatar src={member.avatar} alt={member.name} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {member.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {member.department}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Selected Assignees */}
          {selectedMembers.length > 0 && (
            <div className="space-y-2">
              {selectedMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Avatar src={member.avatar} alt={member.name} size="md" />
                    <span className="text-sm font-medium text-foreground">
                      {member.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveAssignee(member.id)}
                    className="text-sm font-medium text-status-blocked hover:text-status-blocked/80 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancel}
            className="w-full sm:flex-1 min-h-[3rem] px-4 py-3 text-base sm:text-sm font-semibold rounded-md"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="w-full sm:flex-1 min-h-[3rem] px-4 py-3 text-base sm:text-sm font-semibold rounded-md"
          >
            Confirm
          </Button>
        </div>
      </form>
    </Modal>
  );
}

// Icons
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}
