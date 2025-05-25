/** @format */

import countries from "@/_shared/_utils/countries";

export const highlightText = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(
    regex,
    (match) =>
      `<span style="background-color: #008DD5; color: #ffffff; padding: 0.05em 0.2em 0.05em 0.2em; border-radius:2px; ">${match}</span>`
  );
};

export const toCurrency2 = (currency = "NGN", amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const currencySymbol =
    countries.find((el) => el.currencies[0].code === currency)?.currencies[0]
      .symbol || "";

  return `${currencySymbol}${formatter.format(amount)}`;
};

export const formatCurrency = ({
  amount = 0,
  showAmount = false,
  currency = "NGN",
}: {
  amount?: number;
  showAmount?: boolean;
  currency?: "NGN" | "USD" | "EUR" | "GBP";
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  const currencySymbol =
    countries.find((el) => el.currencies[0].code === currency)?.currencies[0]
      .symbol || "";

  const formatted = formatter.format(amount);
  const [whole, decimal] = formatted.split(".");

  return (
    <span>
      {currencySymbol}
      {showAmount ? (
        <>
          <span className="text-4xl">
            XXX,XXX.<span className="text-xl">00</span>{" "}
          </span>
        </>
      ) : (
        <>
          {whole}
          {decimal && decimal !== "00" && (
            <span className="text-xl">.{decimal}</span>
          )}
        </>
      )}
    </span>
  );
};

export const getCurrencyFlag = (currency: string) => {
  const country = countries.find((c) =>
    c.currencies.some((cur) => cur.code === currency)
  );
  return country ? country.flag : "🏳";
};

export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const getCurrencyName = (currencyCode?: string): string => {
  switch (currencyCode) {
    case "NGN":
      return "Naira";
    case "USD":
      return "Dollar";
    case "EUR":
      return "Euro";
    case "GBP":
      return "Pounds";
    default:
      return "";
  }
};

export const getCurrencySymbol = (currencyCode?: string): string => {
  switch (currencyCode) {
    case "NGN":
      return "₦";
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    default:
      return "";
  }
};
