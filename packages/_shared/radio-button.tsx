/** @format */

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/_shared/_utils/cn";

const RadioGroup = RadioGroupPrimitive.Root;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-md mr-6 text-sm transition-colors",
      inset && "",
      className
    )}
    {...props}
  >
    <div className="border-white border-[1.5px] h-5 w-5 rounded-full">
      <RadioGroupPrimitive.Indicator
        className={cn(
          "flex items-center justify-center w-full h-full rounded-full",
          "border-gray-300 box-border",
          "data-[state=checked]:border-transparent",
          "data-[state=checked]:bg-primary",
          "data-[state=checked]:before:content-['✓'] data-[state=checked]:before:text-white",
          "data-[state=checked]:before:text-[12px] data-[state=checked]:before:leading-[1]"
        )}
      />
    </div>
    {children}
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroupLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("pl-3 text-sm text-[#52575C]", inset && "", className)}
    {...props}
  />
));
RadioGroupLabel.displayName = "RadioGroupLabel";

const RadioGroupDemo = () => (
  <form className="p-4 bg-red-500 flex">
    <RadioGroup defaultValue="default" aria-label="View density">
      <div className="mb-2">
        <RadioGroupItem value="default" id="r1">
          <RadioGroupLabel htmlFor="r1">Option 1</RadioGroupLabel>
        </RadioGroupItem>
        <RadioGroupItem value="default2" id="r2">
          <RadioGroupLabel htmlFor="r2">Option 2</RadioGroupLabel>
        </RadioGroupItem>
      </div>
    </RadioGroup>
  </form>
);

export { RadioGroupDemo, RadioGroup, RadioGroupLabel, RadioGroupItem };
