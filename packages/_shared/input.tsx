/** @format */

import * as React from "react";
import { cn } from "@/_shared/_utils/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full dark:border-foreground  dark:text-white rounded-md border border-gray-200  bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent text-base  lg:text-sm file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
