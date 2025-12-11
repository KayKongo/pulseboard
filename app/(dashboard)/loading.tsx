import { SkeletonCard, SkeletonChart } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-8">
      {/* Page Header Skeleton */}
      <div className="space-y-2">
        <div className="h-9 w-64 bg-muted/50 animate-pulse rounded-lg" />
        <div className="h-4 w-96 bg-muted/50 animate-pulse rounded-lg" />
      </div>

      {/* KPI Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      {/* Charts Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkeletonChart />
        <SkeletonChart />
      </div>

      {/* Recent Activity Skeleton */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="h-6 w-40 bg-muted/50 animate-pulse rounded-lg mb-4" />
        <div className="space-y-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="h-10 w-10 bg-muted/50 animate-pulse rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-48 bg-muted/50 animate-pulse rounded" />
                <div className="h-3 w-full bg-muted/50 animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
