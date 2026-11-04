import { useId, useState, type FormEvent } from "react";
import { ArrowSwapHorizontal, Convert } from "iconsax-react";
import { Card, MoreButton } from "../../../componets/ui/card";
import { IconBadge } from "../../../componets/ui/IconBadge";
import { PillSelect } from "../../../componets/ui/PillSelect";
import { CoinIcon } from "../../../componets/ui/CoinIcon";
import { formatNumber } from "../../../componets/ui/Money";
import { EXCHANGE_COINS } from "../data";

const OPTIONS = EXCHANGE_COINS.map((c) => ({
  label: c.name,
  value: c.symbol,
  icon: <CoinIcon symbol={c.symbol} size={20} />,
}));

export function QuickExchangeCard({ className }: { className?: string }) {
  const inputId = useId();
  const [haveSymbol, setHaveSymbol] = useState("BTC");
  const [wantSymbol, setWantSymbol] = useState("USDT");
  const [amountText, setAmountText] = useState("0.1230");

  const have = EXCHANGE_COINS.find((c) => c.symbol === haveSymbol)!;
  const want = EXCHANGE_COINS.find((c) => c.symbol === wantSymbol)!;

  const amount = parseFloat(amountText) || 0;
  const usdValue = amount * have.priceUsd;
  const wantAmount = usdValue / want.priceUsd;

  const changeHave = (v: string) => {
    if (v === wantSymbol) setWantSymbol(haveSymbol);
    setHaveSymbol(v);
  };
  const changeWant = (v: string) => {
    if (v === haveSymbol) setHaveSymbol(wantSymbol);
    setWantSymbol(v);
  };
  const swap = () => {
    setHaveSymbol(wantSymbol);
    setWantSymbol(haveSymbol);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: call exchange endpoint
  };

  return (
    <Card
      title="Quick Exchange"
      icon={<IconBadge icon={Convert} />}
      action={<MoreButton label="Quick exchange options" />}
      className={className}
    >
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <PillSelect
              fullWidth
              label="Currency you have"
              options={OPTIONS}
              value={haveSymbol}
              onChange={changeHave}
              className="[&_ul]:left-0 [&_ul]:right-auto"
            />
            <p className="mt-2 flex justify-between gap-2 px-1 text-sm text-gray-400">
              <span>I have</span>
              <span>{formatNumber(have.balance, 4)}</span>
            </p>
          </div>
          <div>
            <PillSelect
              fullWidth
              label="Currency you want"
              options={OPTIONS}
              value={wantSymbol}
              onChange={changeWant}
            />
            <p className="mt-2 flex justify-between gap-2 px-1 text-sm text-gray-400">
              <span>I want</span>
              <span>${formatNumber(usdValue, 3)}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-end gap-3">
          <div>
            <label htmlFor={inputId} className="sr-only">
              Amount to exchange
            </label>
            <input
              id={inputId}
              inputMode="decimal"
              value={amountText}
              onChange={(e) => setAmountText(e.target.value.replace(/[^0-9.]/g, ""))}
              className="w-full border-b border-gray-900 bg-transparent pb-1 text-2xl text-gray-900 outline-none focus:border-blue-600 sm:text-3xl"
            />
          </div>

          <button
            type="button"
            onClick={swap}
            aria-label="Swap currencies"
            className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <ArrowSwapHorizontal size={18} color="currentColor" />
          </button>

          <output
            htmlFor={inputId}
            className="block truncate border-b border-gray-900 pb-1 text-right text-2xl text-gray-900 sm:text-3xl"
          >
            {formatNumber(wantAmount, 2)}
          </output>
        </div>

        <button
          type="submit"
          className="mt-5 h-12 w-full rounded-full bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          Exchange
        </button>
      </form>
    </Card>
  );
}