/** @format */
import React from "react";
import { Search } from "lucide-react";
import { Input } from "../../../packages/_shared/input";

interface SearchInputProps {
  placeholder: string;
  className?: string;
  iconClassName?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onClick?: () => void;
  containerClass?: string;
  iconColor?: string;
}

const SearchInput = ({
  placeholder,
  className,
  value,
  onChange,
  iconClassName,
  type,
  onClick,
  containerClass,
  iconColor,
  ...props
}: SearchInputProps) => {
  return (
    <div className={`relative ${containerClass}`} onClick={onClick}>
      <Input
        className={`border-[#EDEFF3] pl-10 text-xs text-[#52575C] shadow-none border dark:bg-white/5 dark:border-white/5 bg-[#fcfcfd] ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        {...props}
      />
      <div
        className={`absolute  left-[15px]  ${
          iconClassName ? iconClassName : "top-[11px]"
        } `}
      >
        <Search size={18} color={iconColor ? iconColor : "#52575C"} />
      </div>
    </div>
  );
};

export default SearchInput;
