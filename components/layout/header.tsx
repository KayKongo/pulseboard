"use client";

import { Avatar } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onMenuClick();
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background px-4 md:px-6">
      {/* Mobile Menu Button */}
      <button
        onClick={handleMenuClick}
        className="md:hidden flex items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors"
        aria-label="Open menu"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {/* Mobile Logo */}
      <div className="flex items-center md:hidden">
        <span className="text-lg font-bold text-foreground">PulseBoard</span>
        <PulseIcon className="h-4 w-4 text-secondary ml-1" />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* User Profile */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:block text-right">
          <p className="text-sm font-medium text-foreground">Ama Oforiwaa</p>
        </div>
        <Avatar
          src="https://i.pravatar.cc/150?img=47"
          alt="Ama Oforiwaa"
          size="md"
        />
      </div>
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function PulseIcon({ className }: { className?: string }) {
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
        d="M3 13h4l3-9 4 18 3-9h4"
      />
    </svg>
  );
}
