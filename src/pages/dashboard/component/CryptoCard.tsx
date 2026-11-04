import { useState } from "react";
import { Card } from "../../../componets/ui/card";
import { CoinIcon } from "../../../componets/ui/CoinIcon";
import { SegmentedToggle } from "../../../componets/ui/SegmentedToggle";
import {
  CURRENCY_OPTIONS,
  Money,
  formatNumber,
  type Currency,
} from "../../../componets/ui/Money";
import type { CryptoHolding } from "../data";

interface CryptoCardProps {
  holding: CryptoHolding;
  className?: string;
}

export function CryptoCard({ holding, className }: CryptoCardProps) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const { name, symbol, amount, valueUsd, priceUsd } = holding;

  return (
    <Card
      title={name}
      icon={<CoinIcon symbol={symbol} size={36} />}
      action={
        <SegmentedToggle<Currency>
          label={`${name} display currency`}
          options={CURRENCY_OPTIONS}
          value={currency}
          onChange={setCurrency}
        />
      }
      className={className}
    >
      <p className="text-3xl font-medium text-gray-900 sm:text-4xl">
        {formatNumber(amount)} <span className="text-lg">{symbol}</span>
      </p>
      <p className="mt-1 text-lg text-gray-400">
        <Money value={valueUsd} currency={currency} />
      </p>

      <dl className="mt-5 flex items-center justify-between gap-2 border-t border-gray-100 pt-4 text-sm">
        <dt className="text-gray-400">Price per 1 {symbol}</dt>
        <dd className="text-base text-gray-900">
          <Money value={priceUsd} currency={currency} />
        </dd>
      </dl>
    </Card>
  );
}