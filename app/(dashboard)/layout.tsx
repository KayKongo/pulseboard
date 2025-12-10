export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* We'll add Sidebar and Header here later */}
      <main className="p-8">{children}</main>
    </div>
  );
}
