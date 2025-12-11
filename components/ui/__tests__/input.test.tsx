import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "../input";

describe("Input Component", () => {
  it("renders with placeholder", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("handles user input", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    const { getByRole } = render(<Input onChange={handleChange} />);
    const input = getByRole("textbox");

    await user.type(input, "Hello");
    expect(handleChange).toHaveBeenCalled();
  });

  it("can be disabled", () => {
    const { getByRole } = render(<Input disabled />);
    expect(getByRole("textbox")).toBeDisabled();
  });

  it("accepts different input types", () => {
    const { container, rerender } = render(<Input type="email" />);
    const emailInput = container.querySelector('input[type="email"]');
    expect(emailInput).toHaveAttribute("type", "email");

    rerender(<Input type="password" />);
    const passwordInput = container.querySelector('input[type="password"]');
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
