/** @format */

import { cn } from "@/_shared/_utils/cn";
import React from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTabIndex: number;
  onTabClick: (index: number) => void;
  classNames?: string;
  onChange?: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabIndex,
  onTabClick,
  classNames,
  onChange,
}) => {
  return (
    <div className={`w-full ${classNames}`}>
      <div
        className="relative border border-gray-100  rounded-full bg-[#f6f6f6] h-12   grid"
        role="tablist"
        aria-orientation="horizontal"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}
      >
        <div
          className="absolute top-1/2 left-[2px] bg-white  rounded-full transition-all duration-500 ease-in-out shadow-sm border-white/80"
          style={{
            height: "calc(100% - 2px)",
            width: `calc(100% / ${tabs.length} - 2px)`,
            transform: `translate(${selectedTabIndex * 100}%, -50%)`,
          }}
        ></div>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={cn(
              "relative z-[1]  text-sm cursor-pointer rounded-full py-1.5 focus:outline-none transition duration-500",
              {
                "text-[#006CF0]": selectedTabIndex === index,
                "text-[#00233FCC]/80 hover:text-custom-text-300":
                  selectedTabIndex !== index,
              }
            )}
            id={`tab-${index}`}
            role="tab"
            type="button"
            aria-selected={selectedTabIndex === index}
            tabIndex={selectedTabIndex === index ? 0 : -1}
            onClick={() => {
              onTabClick(index);
              if (onChange) onChange(tab.id);
            }}
          >
            <span className="scale-110">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
