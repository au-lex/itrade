import { useState } from "react";
import { Chart1, Share, Star1 } from "iconsax-react";
import { BtcDot, Card, Change, CircleBtn } from "./shared";

const outlineBtn =
  "flex w-full items-center justify-center gap-2 rounded-full border border-blue-600 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50";

const Stat = ({ label, value, prefix, suffix, change }: { label: string; value: string; prefix?: string; suffix?: string; change?: number }) => (
  <div>
    <p className="text-sm font-semibold">{label}</p>
    <div className="mt-2 flex items-end justify-between">
      <p className="text-xl text-gray-900">
        {prefix && <sup className="mr-0.5 text-xs text-gray-500">{prefix}</sup>}
        {value}
        {suffix && <span className="ml-1 text-base text-gray-500">{suffix}</span>}
      </p>
      {change !== undefined && <Change value={change} />}
    </div>
  </div>
);

export default function CoinSummary() {
  const [fav, setFav] = useState(false);

  return (
    <aside className="flex flex-col gap-5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BtcDot />
            <h2 className="font-medium">Bitcoin</h2>
          </div>
          <CircleBtn icon={Share} label="Share" />
        </div>

        <div className="mt-6 flex items-end justify-between">
          <p className="flex items-start text-5xl font-medium tracking-tight">
            <sup className="mr-1 mt-1 text-base">$</sup>43,479.58
          </p>
          <Change value={12.3} />
        </div>

        <div className="mt-5 grid grid-cols-2 rounded-xl bg-gray-50 py-4 text-center">
          <div className="border-r border-gray-200">
            <p className="text-2xl font-medium text-blue-600">#1</p>
            <p className="mt-1 text-sm text-gray-400">Market Cap</p>
          </div>
          <div>
            <p className="text-2xl font-medium text-blue-600">#2</p>
            <p className="mt-1 text-sm text-gray-400">Volume (24H)</p>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <button onClick={() => setFav((f) => !f)} className={outlineBtn}>
            <Star1 size={18} variant={fav ? "Bold" : "Linear"} color="currentColor" />
            {fav ? "Added to Favorite" : "Add to Favorite"}
          </button>
          <button className={outlineBtn}>
            <Chart1 size={18} color="currentColor" />
            Track in Statistic
          </button>
        </div>
      </Card>

      <Card className="flex flex-1 flex-col justify-between gap-6 p-5">
        <Stat label="Market Cap" prefix="$" value="851,041,032,700" change={1.16} />
        <Stat label="Volume (24H)" prefix="$" value="20,418,416,625" change={4.39} />
        <Stat label="Fully diluted market cap" prefix="$" value="912,017,134,707" />
        <Stat label="Circulating Supply" value="19,581,012" suffix="BTC" />
        <Stat label="Max Supply" value="21,000,000" suffix="BTC" />
      </Card>
    </aside>
  );
}
