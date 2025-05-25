/** @format */

import { cn } from "@/_shared/_utils/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-600", className)}
      {...props}
    />
  );
}

export { Skeleton };
