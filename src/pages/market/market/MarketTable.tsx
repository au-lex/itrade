import { useMemo, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";
import { Convertshape, Sort } from "iconsax-react";
import { COINS, Card, Change, CoinDot } from "./shared";

const HEADERS = ["Currency", "Price", "Market Cap", "24H Change", "7 Days Market", "Action"];

const Sparkline = ({ data, up }: { data: number[]; up: boolean }) => {
  const color = up ? "#2563eb" : "#111827";
  const id = `spark-${data.join("")}`;
  const rows = useMemo(() => data.map((v, i) => ({ i, v })), [data]);
  return (
    <div className="h-8 w-24">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rows} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.25} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis hide domain={["dataMin", "dataMax"]} />
          <Area
            type="monotone"
            dataKey="v"
            stroke={color}
            strokeWidth={1.3}
            fill={`url(#${id})`}
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default function MarketTable() {
  const [range, setRange] = useState("24H");
  const [sortPopular, setSortPopular] = useState(true);

  const market = useMemo(
    () => (sortPopular ? COINS : [...COINS].sort((a, b) => b.change - a.change)),
    [sortPopular]
  );

  return (
    <Card className="overflow-hidden p-5 lg:col-span-3 lg:col-start-1 lg:row-start-3">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-medium">Crypto Market</h2>
        <div className="flex gap-3">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="rounded-full border border-gray-900 bg-white px-4 py-2 text-sm"
          >
            {["24H", "7D", "30D"].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          <button
            onClick={() => setSortPopular((s) => !s)}
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
            {market.map((c) => (
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
}
