import { useState } from "react";
import { ArrowDown2, Maximize4 } from "iconsax-react";
import { Card, CircleBtn, Segmented } from "./shared";

type Row = {
  exchange: string;
  kind: "CEX" | "DEX";
  market: "Spot" | "Perpetual" | "Futures";
  pair: string;
  price: string;
  volume: string;
  pct: string;
  liquidity: string;
  updated: string;
};

const ROWS: Row[] = [
  { exchange: "Binance", kind: "CEX", market: "Spot", pair: "BTC/FDUSD", price: "$43,489.99", volume: "$1,336,156,340", pct: "6,54%", liquidity: "959", updated: "1 hour ago" },
  { exchange: "Binance", kind: "CEX", market: "Spot", pair: "BTC/USDT", price: "$43,498.77", volume: "$1,145,126,706", pct: "5,61%", liquidity: "1.113", updated: "1 hour ago" },
  { exchange: "OKX", kind: "CEX", market: "Spot", pair: "BTC/USDT", price: "$43,498.65", volume: "$306,137,513", pct: "1,50%", liquidity: "796", updated: "1 hour ago" },
  { exchange: "Binance", kind: "CEX", market: "Perpetual", pair: "BTC/USDT", price: "$43,501.20", volume: "$9,882,114,031", pct: "21,12%", liquidity: "1.402", updated: "2 min ago" },
  { exchange: "Deribit", kind: "CEX", market: "Futures", pair: "BTC/USD", price: "$43,512.40", volume: "$612,402,118", pct: "2,98%", liquidity: "884", updated: "5 min ago" },
  { exchange: "dYdX", kind: "DEX", market: "Perpetual", pair: "BTC/USDT", price: "$43,495.10", volume: "$402,911,552", pct: "1,97%", liquidity: "731", updated: "3 min ago" },
];

const HEADERS = ["Exchange", "Pair", "Price", "Volume (24H)", "Volume %", "Confidence", "Liquidity Score", "Updated"];

export default function MarketTable() {
  const [venue, setVenue] = useState<"ALL" | "CEX" | "DEX">("ALL");
  const [market, setMarket] = useState<Row["market"]>("Spot");
  const [pair, setPair] = useState("All pairs");

  const pairs = ["All pairs", ...Array.from(new Set(ROWS.map((r) => r.pair)))];
  const rows = ROWS.filter(
    (r) => (venue === "ALL" || r.kind === venue) && r.market === market && (pair === "All pairs" || r.pair === pair)
  );

  return (
    <Card className="p-5 lg:col-span-2 lg:col-start-2 lg:row-start-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">Bitcoin Market</h2>
        <CircleBtn icon={Maximize4} label="Expand" />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Segmented options={["ALL", "CEX", "DEX"] as const} value={venue} onChange={setVenue} />
        <Segmented options={["Spot", "Perpetual", "Futures"] as Row["market"][]} value={market} onChange={setMarket} />
        <div className="relative ml-auto">
          <select
            value={pair}
            onChange={(e) => setPair(e.target.value)}
            className="appearance-none rounded-full border border-gray-900 bg-white py-1.5 pl-3 pr-8 text-xs"
          >
            {pairs.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <ArrowDown2 size={14} color="currentColor" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="text-gray-400">
              {HEADERS.map((h, i) => (
                <th key={h} className={`pb-4 font-normal ${i >= 4 && i < 7 ? "text-center" : ""} ${i === 7 ? "text-right" : ""}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="h-[43px]">
                <td>
                  <span className="flex items-center gap-2">
                    {r.exchange === "Binance" ? (
                      <span className="h-4 w-4 rotate-45 rounded-[4px] border-[3px] border-amber-400" />
                    ) : (
                      <span className="h-4 w-4 rounded-full bg-gray-900" />
                    )}
                    {r.exchange}
                  </span>
                </td>
                <td>{r.pair}</td>
                <td>{r.price}</td>
                <td>{r.volume}</td>
                <td className="text-center text-xs">{r.pct}</td>
                <td className="text-center">
                  <span className="inline-block rounded-full bg-blue-50 px-5 py-2 text-sm text-blue-600">High</span>
                </td>
                <td className="text-center text-xs">{r.liquidity}</td>
                <td className="text-right text-xs">{r.updated}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={8} className="py-8 text-center text-gray-400">
                  No markets match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
