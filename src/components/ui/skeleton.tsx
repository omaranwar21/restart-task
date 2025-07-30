import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",
        className
      )}
    />
  );
}

// Predefined skeleton components for common use cases
export function SkeletonText({ className }: SkeletonProps) {
  return <Skeleton className={cn("h-4 w-full", className)} />;
}

export function SkeletonTitle({ className }: SkeletonProps) {
  return <Skeleton className={cn("h-6 w-3/4", className)} />;
}

export function SkeletonButton({ className }: SkeletonProps) {
  return <Skeleton className={cn("h-10 w-24", className)} />;
}

export function SkeletonAvatar({ className }: SkeletonProps) {
  return <Skeleton className={cn("h-10 w-10 rounded-full", className)} />;
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn("rounded-lg border p-4 space-y-3", className)}>
      <SkeletonTitle />
      <SkeletonText />
      <SkeletonText className="w-1/2" />
      <div className="flex justify-between items-center pt-2">
        <SkeletonText className="w-16" />
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
