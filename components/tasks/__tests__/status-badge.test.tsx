import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { StatusBadge } from "../status-badge";

describe("StatusBadge Component", () => {
  it("displays correct label for completed status", () => {
    const { getByText } = render(<StatusBadge status="completed" />);
    expect(getByText("Completed")).toBeInTheDocument();
  });

  it("displays correct label for blocked status", () => {
    const { getByText } = render(<StatusBadge status="blocked" />);
    expect(getByText("Blocked")).toBeInTheDocument();
  });

  it("displays correct label for in-progress status", () => {
    const { getByText } = render(<StatusBadge status="in-progress" />);
    expect(getByText("In Progress")).toBeInTheDocument();
  });

  it("displays correct label for to-do status", () => {
    const { getByText } = render(<StatusBadge status="to-do" />);
    expect(getByText("To Do")).toBeInTheDocument();
  });
});
