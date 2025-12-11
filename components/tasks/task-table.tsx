"use client";

import { useState, useMemo } from "react";
import { Task } from "@/types";
import { TaskRow } from "./task-row";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TaskTableProps {
  tasks: Task[];
  onAddTask?: () => void;
}

type SortField = "title" | "status" | "dateCreated" | "deadline";
type SortOrder = "asc" | "desc";

export function TaskTable({ tasks, onAddTask }: TaskTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<Task["status"] | "all">(
    "all"
  );
  const [sortField, setSortField] = useState<SortField>("dateCreated");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter and search
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Search filter
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.department.toLowerCase().includes(searchQuery.toLowerCase());

      // Status filter
      const matchesStatus =
        statusFilter === "all" || task.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, searchQuery, statusFilter]);

  // Sort
  const sortedTasks = useMemo(() => {
    const sorted = [...filteredTasks].sort((a, b) => {
      let aValue: string | Date | number = a[sortField];
      let bValue: string | Date | number = b[sortField];

      // Handle dates
      if (sortField === "dateCreated" || sortField === "deadline") {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }

      // Handle strings
      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
      } else if (typeof bValue === "string") {
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return sorted;
  }, [filteredTasks, sortField, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(sortedTasks.length / itemsPerPage);
  const paginatedTasks = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedTasks.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedTasks, currentPage]);

  // Handle sort
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // // Handle filter toggle

  // const handleFilterToggle = (status: Task["status"]) => {
  //   setStatusFilter(statusFilter === status ? "all" : status);
  //   setCurrentPage(1); // Reset to first page
  // };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page
            }}
            className="pl-10"
          />
        </div>

        {/* Filter Button */}
        <Button variant="secondary" className="gap-2">
          <FilterIcon className="h-5 w-5" />
          Filter
        </Button>

        {/* Add Task Button */}
        <Button onClick={onAddTask} className="gap-2">
          <PlusIcon className="h-5 w-5" />
          Add task
        </Button>
      </div>

      {/* Active Filters */}
      {statusFilter !== "all" && (
        <div className="flex items-center gap-2">
          <Badge
            variant="default"
            className="gap-2 cursor-pointer hover:bg-muted"
            onClick={() => setStatusFilter("all")}
          >
            {statusFilter === "completed" && "Completed"}
            {statusFilter === "blocked" && "Blocked"}
            {statusFilter === "in-progress" && "In Progress"}
            {statusFilter === "to-do" && "To Do"}
            <XIcon className="h-3 w-3" />
          </Badge>
        </div>
      )}

      {/* Table */}
      <div className="bg-secondary-200/30 dark:bg-secondary-200/10 border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-200/50 dark:bg-secondary-200/20">
              <tr>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider cursor-pointer hover:bg-secondary-200/70 dark:hover:bg-secondary-200/30 transition-colors"
                  onClick={() => handleSort("title")}
                >
                  <div className="flex items-center gap-2">
                    Task Title
                    {sortField === "title" && (
                      <SortIcon direction={sortOrder} />
                    )}
                  </div>
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider cursor-pointer hover:bg-secondary-200/70 dark:hover:bg-secondary-200/30 transition-colors"
                  onClick={() => handleSort("status")}
                >
                  <div className="flex items-center gap-2">
                    Status
                    {sortField === "status" && (
                      <SortIcon direction={sortOrder} />
                    )}
                  </div>
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider cursor-pointer hover:bg-secondary-200/70 dark:hover:bg-secondary-200/30 transition-colors"
                  onClick={() => handleSort("dateCreated")}
                >
                  <div className="flex items-center gap-2">
                    Date Created
                    {sortField === "dateCreated" && (
                      <SortIcon direction={sortOrder} />
                    )}
                  </div>
                </th>
                <th
                  className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider cursor-pointer hover:bg-secondary-200/70 dark:hover:bg-secondary-200/30 transition-colors"
                  onClick={() => handleSort("deadline")}
                >
                  <div className="flex items-center gap-2">
                    Deadline
                    {sortField === "deadline" && (
                      <SortIcon direction={sortOrder} />
                    )}
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                  Assignees
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {paginatedTasks.length > 0 ? (
                paginatedTasks.map((task) => (
                  <TaskRow
                    key={task.id}
                    task={task}
                    onDelete={(id) => console.log("Delete", id)}
                    onEdit={(id) => console.log("Edit", id)}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-12 text-center text-muted-foreground"
                  >
                    No tasks found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-card">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

// Icons
function SearchIcon({ className }: { className?: string }) {
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
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
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
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
      />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
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
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

function SortIcon({ direction }: { direction: "asc" | "desc" }) {
  return direction === "asc" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  );
}
