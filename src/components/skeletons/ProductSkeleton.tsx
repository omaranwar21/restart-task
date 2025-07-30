import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton, SkeletonText, SkeletonTitle, SkeletonButton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="aspect-video w-full" />
      
      <CardHeader>
        <div className="flex items-start justify-between">
          {/* Title skeleton */}
          <SkeletonTitle />
          {/* Badge skeleton */}
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        {/* Description skeleton - 2 lines */}
        <div className="space-y-2 mt-2">
          <SkeletonText />
          <SkeletonText className="w-2/3" />
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          {/* Price skeleton */}
          <Skeleton className="h-8 w-20" />
          {/* Action buttons skeleton */}
          <div className="flex space-x-2">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-9" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProductsPageSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Skeleton className="h-9 w-32 mb-2" />
          <Skeleton className="h-5 w-48" />
        </div>
        <SkeletonButton className="w-32" />
      </div>

      {/* Search bar skeleton */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* Products grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
