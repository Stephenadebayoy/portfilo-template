/** @format */
"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Separator } from "../separator";
import { cn } from "@/_shared/_utils/cn";

interface Tab {
  id: string;
  title: string;
  href?: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTabIndex: number;
  onTabClick: (index: number) => void;
  classNames?: string;
  onChange?: (tabId: string) => void;
  activeTabLine?: string;
  contentStyle?: string;
}

const TabSwitch: React.FC<TabsProps> = ({
  tabs,
  selectedTabIndex,
  onTabClick,
  classNames,
  onChange,
  activeTabLine,
  contentStyle,
}) => {
  const router = useRouter();

  return (
    <div className={`w-full ${classNames}`}>
      <div
        className="relative bg-custom-background-80 grid"
        role="tablist"
        aria-orientation="horizontal"
        style={{
          gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
        }}
      >
        <div
          className={`absolute top-[42px] z-40 left-[2px] border-b border-primary transition-all duration-500 ease-in-out ${activeTabLine}`}
          style={{
            height: "calc(100% - 2px)",
            width: `calc(100% / ${tabs.length} - 1px)`,
            transform: `translate(${selectedTabIndex * 100}%, -50%)`,
          }}
        ></div>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={cn(
              `relative z-[1]  text-xs py-[25px] focus:outline-none transition duration-500 ${contentStyle}`,
              {
                "text-primary": selectedTabIndex === index,
                "text-[#52575C] hover:text-primary": selectedTabIndex !== index,
              }
            )}
            id={`tab-${index}`}
            role="tab"
            type="button"
            aria-selected={selectedTabIndex === index}
            tabIndex={selectedTabIndex === index ? 0 : -1}
            onClick={() => {
              onTabClick(index);
              if (tab.href) {
                router.push(tab.href);
              }
              if (onChange) onChange(tab.id);
            }}
          >
            <span className="scale-110 text-xs">{tab.title}</span>
          </button>
        ))}
      </div>
      <div className="w-full relative bottom-[11px]">
        <Separator orientation="horizontal" className="border bg-gray-100" />
      </div>
    </div>
  );
};

export default TabSwitch;
