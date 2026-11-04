import { Convertshape, Sort } from "iconsax-react";
import type { Coin } from "../types";
import { Card, Change, CoinDot, Sparkline } from "./ui";

const RANGES = ["24H", "7D", "30D"];
const HEADERS = ["Currency", "Price", "Market Cap", "24H Change", "7 Days Market", "Action"];

type MarketTableProps = {
  coins: Coin[];
  range: string;
  onRangeChange: (r: string) => void;
  sortPopular: boolean;
  onToggleSort: () => void;
  className?: string;
};

export const MarketTable = ({
  coins,
  range,
  onRangeChange,
  sortPopular,
  onToggleSort,
  className = "",
}: MarketTableProps) => (
  <Card className={`overflow-hidden p-5 ${className}`}>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-2xl font-medium">Crypto Market</h2>
      <div className="flex gap-3">
        <select
          value={range}
          onChange={(e) => onRangeChange(e.target.value)}
          className="rounded-full border border-gray-900 bg-white px-4 py-2 text-sm"
        >
          {RANGES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        <button
          onClick={onToggleSort}
          className="inline-flex items-center gap-2 rounded-full border border-gray-900 px-4 py-2 text-sm"
        >
          <Sort size={16} color="currentColor" />
          {sortPopular ? "Sort by popular" : "Sort by change"}
        </button>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="text-gray-400">
            {HEADERS.map((h, i) => (
              <th key={h} className={`pb-5 font-normal ${i >= 3 ? "text-center" : ""}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coins.map((c) => (
            <tr key={c.symbol} className="h-14">
              <td>
                <span className="flex items-center gap-3 font-medium">
                  <CoinDot color={c.color} label={c.symbol} size={20} />
                  {c.symbol}
                </span>
              </td>
              <td className="font-medium">{c.price}</td>
              <td className="font-medium">{c.cap}</td>
              <td className="text-center">
                <Change value={c.change} />
              </td>
              <td>
                <div className="flex justify-center">
                  <Sparkline data={c.spark} up={c.change >= 0} />
                </div>
              </td>
              <td className="text-center">
                <button className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100">
                  <Convertshape size={18} color="currentColor" />
                  Trade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
