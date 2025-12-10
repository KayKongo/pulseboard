import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { teamMembers } from "@/lib/constants";

export default function DashboardPage() {
  const testAvatars = teamMembers.slice(0, 7).map((member) => ({
    src: member.avatar,
    alt: member.name,
  }));

  return (
    <div className="min-h-screen bg-background p-8 space-y-8">
      {/* Theme Toggle */}
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-primary">
          Phase 1 Component Test
        </h1>

        {/* Button Variants */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </div>

        {/* Badge Variants */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Status Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="completed">Completed</Badge>
            <Badge variant="blocked">Blocked</Badge>
            <Badge variant="in-progress">In Progress</Badge>
            <Badge variant="to-do">To Do</Badge>
            <Badge variant="default">Default</Badge>
          </div>
        </div>

        {/* Input */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Input</h2>
          <Input placeholder="Search tasks..." className="max-w-md" />
        </div>

        {/* Avatars */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Avatars</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar
              src={teamMembers[0].avatar}
              alt={teamMembers[0].name}
              size="sm"
            />
            <Avatar
              src={teamMembers[1].avatar}
              alt={teamMembers[1].name}
              size="md"
            />
            <Avatar
              src={teamMembers[2].avatar}
              alt={teamMembers[2].name}
              size="lg"
            />
            <Avatar fallback="JD" size="md" />
          </div>
        </div>

        {/* Avatar Group */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Avatar Group (Stacked)</h2>
          <AvatarGroup avatars={testAvatars} max={5} size="sm" />
        </div>
      </div>
    </div>
  );
}
