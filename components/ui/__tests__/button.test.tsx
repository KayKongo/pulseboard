import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../button";

describe("Button Component", () => {
  it("renders with text", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );

    await user.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies variant classes correctly", () => {
    const { getByText, rerender } = render(
      <Button variant="primary">Primary</Button>
    );
    expect(getByText("Primary")).toHaveClass("bg-primary");

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(getByText("Secondary")).toHaveClass("bg-white");
  });

  it("can be disabled", () => {
    const { getByText } = render(<Button disabled>Disabled</Button>);
    expect(getByText("Disabled")).toBeDisabled();
  });
});
