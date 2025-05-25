/** @format */

// components/BankSearchSelect.tsx
/** @format */
import React, { useState, useRef, useEffect, useMemo } from "react";
import { Card } from "../card";
import { ChevronDownIcon } from "lucide-react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import SearchInput from "@/components/search-input";

interface BankOption {
  value: string;
  label: string;
}

interface SearchSelectProps {
  options: BankOption[];
  onValueChange: (value: string) => void;
  placeholder?: string;
}

const BankSearchSelect: React.FC<SearchSelectProps> = ({
  options,
  onValueChange,
  placeholder,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightIndex, setHighlightIndex] = useState<number>(-1);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [options, searchTerm]
  );

  const handleSelect = (option: BankOption) => {
    setSearchTerm(option.label);
    setIsDropdownVisible(false);
    setHighlightIndex(-1);
    onValueChange(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsDropdownVisible(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isDropdownVisible) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightIndex((prev) =>
        prev > 0 ? prev - 1 : filteredOptions.length - 1
      );
    } else if (event.key === "Enter" && highlightIndex >= 0) {
      event.preventDefault();
      handleSelect(filteredOptions[highlightIndex]);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* <SearchInput
        type="text"
        value={searchTerm}
        onClick={() => setIsDropdownVisible(true)}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setHighlightIndex(-1);
        }}
        // onKeyDown={handleKeyDown}
        placeholder={placeholder || "Select bank"}
        className="border px-10 h-11 rounded w-full text-[#77838D] border-[#EDEFF3]"
        iconClassName="top-[9px]"
        aria-expanded={isDropdownVisible}
        aria-controls="bank-select-list"
        aria-autocomplete="list"
      /> */}

      <SearchInput
        type="text"
        value={searchTerm}
        onClick={() => setIsDropdownVisible(true)}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setHighlightIndex(-1);
        }}
        placeholder={placeholder || "Select bank"}
        className="border pr-10 pl-3 h-11 rounded w-full text-[#77838D] border-[#EDEFF3]"
        aria-expanded={isDropdownVisible}
        aria-controls="bank-select-list"
        aria-autocomplete="list"
      />

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        {isDropdownVisible ? (
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 text-gray-500" />
        )}
      </div>

      {isDropdownVisible && (
        <Card
          id="bank-select-list"
          role="listbox"
          className="absolute top-12 bg-white w-full max-h-64 overflow-y-auto p-2 z-50"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={option.value}
                role="option"
                aria-selected={highlightIndex === index}
                onClick={() => handleSelect(option)}
                className={`p-2 cursor-pointer rounded-md text-sm text-[#2B3034] ${
                  highlightIndex === index ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                {option.label}
              </div>
            ))
          ) : (
            <p className="p-2 text-sm text-gray-500">No banks found</p>
          )}
        </Card>
      )}
    </div>
  );
};

export default BankSearchSelect;
