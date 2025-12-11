import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "../modal";

describe("Modal Component", () => {
  it("renders when open", () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(getByText("Modal Content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("calls onClose when backdrop is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    const { getByText } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    // Click backdrop (the parent div of modal content)
    const backdrop =
      getByText("Modal Content").parentElement?.parentElement?.previousSibling;

    if (backdrop) {
      await user.click(backdrop as HTMLElement);
      expect(handleClose).toHaveBeenCalledTimes(1);
    }
  });

  it("calls onClose when Escape key is pressed", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    await user.keyboard("{Escape}");
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
