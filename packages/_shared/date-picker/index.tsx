/** @format */

"use client";

import * as React from "react";
import { endOfToday, format, isAfter } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { cn } from "@/_shared/_utils/cn";
import { Calendar } from "../calander";
import { Button } from "../button";

type IProps = {
  showIcon?: boolean;
  placeholder?: string;
  className?: string;
  setDate: (date: string | undefined) => void;
};

export function DatePicker({
  showIcon,
  placeholder,
  className,
  setDate,
}: IProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();

  // Whenever date changes, call setDate with formatted value
  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    setDate(date ? format(date, "yyyy-MM-dd") : undefined);
  };

  const isDateDisabled = (date: Date) => {
    return isAfter(date, endOfToday());
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            `w-40 h-11 border p-2  border-[#EDEFF3] justify-start text-left font-normal",
            !date && "text-muted-foreground ${className}`
          )}
        >
          <div className="flex justify-between w-full">
            <div className="flex w-full items-center">
              {showIcon && (
                <Image
                  src={"/icons/calendar-2.png"}
                  className="mr-2 text-xs h-4 w-4"
                  width={24}
                  height={24}
                  alt="calander"
                />
              )}
              {selectedDate ? (
                <span className="text-black">
                  {format(selectedDate, "dd-MM-yyyy")}
                </span>
              ) : (
                <span className=" text-sm text-grey-3 font-medium ">
                  {placeholder}
                </span>
              )}
            </div>
            <Image
              src={"/icons/calendar-2.png"}
              className="mr-2 text-xs h-5 w-5"
              width={24}
              height={24}
              alt="calander"
            />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white  p-0">
        <Calendar
          className=" "
          mode="single"
          selected={selectedDate}
          onSelect={handleDateChange}
          disabled={isDateDisabled}
        />
      </PopoverContent>
    </Popover>
  );
}
