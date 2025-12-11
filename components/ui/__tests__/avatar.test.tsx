import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Avatar, AvatarGroup } from "../avatar";

describe("Avatar Component", () => {
  it("renders with image source", () => {
    const { getByRole } = render(
      <Avatar src="https://example.com/avatar.jpg" alt="User" />
    );
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
  });

  it("renders fallback when no source provided", () => {
    const { getByText } = render(<Avatar alt="John Doe" fallback="JD" />);
    expect(getByText("JD")).toBeInTheDocument();
  });

  it("uses first letter of alt as fallback when no fallback provided", () => {
    const { getByText } = render(<Avatar alt="John" />);
    expect(getByText("J")).toBeInTheDocument();
  });
});

describe("AvatarGroup Component", () => {
  const avatars = [
    { src: "https://example.com/1.jpg", alt: "User 1" },
    { src: "https://example.com/2.jpg", alt: "User 2" },
    { src: "https://example.com/3.jpg", alt: "User 3" },
    { src: "https://example.com/4.jpg", alt: "User 4" },
    { src: "https://example.com/5.jpg", alt: "User 5" },
    { src: "https://example.com/6.jpg", alt: "User 6" },
  ];

  it("displays all avatars when count is less than max", () => {
    const { getAllByRole } = render(
      <AvatarGroup avatars={avatars.slice(0, 3)} max={5} />
    );
    const images = getAllByRole("img");
    expect(images).toHaveLength(3);
  });

  it("shows +X indicator when count exceeds max", () => {
    const { getByText } = render(<AvatarGroup avatars={avatars} max={3} />);
    expect(getByText("+3")).toBeInTheDocument();
  });

  it("limits displayed avatars to max prop", () => {
    const { getAllByRole } = render(<AvatarGroup avatars={avatars} max={3} />);
    const images = getAllByRole("img");
    expect(images).toHaveLength(3); // 3 avatars, +1 for the +X div
  });
});
