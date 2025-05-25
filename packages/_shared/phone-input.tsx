/** @format */
"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDown, Command } from "lucide-react";
import PhoneInput, {
  Country,
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";

import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import {
  Button,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
} from ".";
import { cn } from "@/_shared/_utils/cn";

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const CustomPhoneInput = React.forwardRef<any, PhoneInputProps>(
  ({ className, onChange, value, ...props }, ref) => {
    return (
      <PhoneInput
        ref={ref as any}
        className={cn("flex", className)}
        defaultCountry="NG"
        value={value}
        onChange={(val) => onChange?.(val || "")}
        international
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        smartCaret={false}
        placeholder="+234"
        {...props}
      />
    );
  }
);
CustomPhoneInput.displayName = "CustomPhoneInput";

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className }, ref) => (
  <Input
    className={cn("rounded-e-lg rounded-s-none", className)}
    // {...props}
    ref={ref}
    placeholder="+234"
  />
));
InputComponent.displayName = "InputComponent";

interface CountrySelectProps {
  disabled?: boolean;
  value: Country;
  onChange: (country: Country) => void;
}

countries.registerLocale(en);

const CountrySelect = ({ disabled, value, onChange }: CountrySelectProps) => {
  const countryList = getCountries()
    .map((code: any) => ({
      label: countries.getName(code, "en") || code,
      value: code as Country,
    }))
    .sort((a: any, b: any) => a.label.localeCompare(b.label));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="flex gap-2 rounded-e-none rounded-s-lg h-10 focus:z-10 border-gray-200 shadow-sm px-3"
          disabled={disabled}
        >
          <span className="text-sm font-medium text-[#52575C]">{`+${getCountryCallingCode(
            value
          )}`}</span>
          <FlagComponent country={value} />
          <ChevronsUpDown className="-mr-2 size-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] bg-white p-0">
        <Command>
          <CommandInput className="" placeholder="Search country..." />
          <CommandList>
            <ScrollArea className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup className="bg-white">
                {countryList.map(
                  ({ value, label }: { value: any; label: any }) =>
                    value ? (
                      <CountrySelectOption
                        key={value}
                        country={value}
                        countryName={label}
                        selectedCountry={value}
                        onChange={onChange}
                      />
                    ) : null
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

// const CountrySelect = ({ disabled, value, onChange }: CountrySelectProps) => {
//   const countryList = getCountries()
//     .map((code) => ({
//       label: countries.getName(code, "en") || code,
//       value: code as Country,
//     }))
//     .sort((a, b) => a.label.localeCompare(b.label));
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           type="button"
//           variant="outline"
//           className="flex gap-1 rounded-e-none rounded-s-lg h-10 focus:z-10 border-gray-200 shadow-sm"
//           disabled={disabled}
//         >
//           <FlagComponent country={value} />
//           <ChevronsUpDown className="-mr-2 size-4 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[300px] bg-white p-0">
//         <Command>
//           <CommandInput className="" placeholder="Search country..." />
//           <CommandList>
//             <ScrollArea className="h-72">
//               <CommandEmpty>No country found.</CommandEmpty>
//               <CommandGroup className="bg-white">
//                 {countryList.map(({ value, label }) =>
//                   value ? (
//                     <CountrySelectOption
//                       key={value}
//                       country={value}
//                       countryName={label}
//                       selectedCountry={value}
//                       onChange={onChange}
//                     />
//                   ) : null
//                 )}
//               </CommandGroup>
//             </ScrollArea>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// };

interface CountrySelectOptionProps {
  country: Country;
  countryName: string;
  selectedCountry: Country;
  onChange: (country: Country) => void;
}

const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
}: CountrySelectOptionProps) => {
  return (
    <CommandItem className="gap-2" onSelect={() => onChange(country)}>
      <FlagComponent country={country} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-sm text-foreground/50">{`+${getCountryCallingCode(
        country
      )}`}</span>
      <CheckIcon
        className={`ml-auto size-4 ${
          country === selectedCountry ? "opacity-100" : "opacity-0"
        }`}
      />
    </CommandItem>
  );
};

const FlagComponent = ({ country }: { country: Country }) => {
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-4 overflow-hidden rounded-full ">
      {Flag && <Flag title={country} />}
    </span>
  );
};

export { CustomPhoneInput as PhoneInput };
