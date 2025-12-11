import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Badge } from "../badge";

describe("Badge Component", () => {
  it("renders with text", () => {
    const { getByText } = render(<Badge>Completed</Badge>);
    expect(getByText("Completed")).toBeInTheDocument();
  });

  it("applies status variant classes", () => {
    const { getByText, rerender } = render(
      <Badge variant="completed">Completed</Badge>
    );
    expect(getByText("Completed")).toHaveClass("bg-status-completed/10");

    rerender(<Badge variant="blocked">Blocked</Badge>);
    expect(getByText("Blocked")).toHaveClass("bg-status-blocked/10");

    rerender(<Badge variant="in-progress">In Progress</Badge>);
    expect(getByText("In Progress")).toHaveClass("bg-status-in-progress/10");
  });
});
