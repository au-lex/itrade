import { cn } from "../../lib/cn";

export type Currency = "USD" | "NIS";

export const CURRENCIES: Record<Currency, { symbol: string; rate: number }> = {
  USD: { symbol: "$", rate: 1 },
  NIS: { symbol: "₪", rate: 3.7 },
};

export const CURRENCY_OPTIONS = Object.keys(CURRENCIES) as Currency[];

export const formatNumber = (value: number, digits = 2) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

interface MoneyProps {
  value: number; // always in USD
  currency?: Currency;
  digits?: number;
  className?: string;
  symbolClassName?: string;
}

export function Money({
  value,
  currency = "USD",
  digits = 2,
  className,
  symbolClassName,
}: MoneyProps) {
  const { symbol, rate } = CURRENCIES[currency];
  return (
    <span className={className}>
      <span className={cn("mr-0.5 align-top text-[0.5em] font-medium", symbolClassName)}>
        {symbol}
      </span>
      {formatNumber(value * rate, digits)}
    </span>
  );
}