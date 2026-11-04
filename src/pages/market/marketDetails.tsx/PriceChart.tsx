import { useMemo, useState } from "react";
import { Area, Bar, CartesianGrid, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Activity, Candle2, DocumentDownload, TrendUp } from "iconsax-react";
import { Card, CircleBtn, Segmented } from "./shared";

type Range = "1D" | "7D" | "1M" | "1Y" | "All";
type Metric = "Price" | "Market Cap";

const SUPPLY = 19_581_012;
const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });
const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const mulberry32 = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const short = (d: Date, o: Intl.DateTimeFormatOptions) => d.toLocaleDateString("en", o);

const RANGES: Record<Range, { n: number; from: number; to: number; vol: number; seed: number; label: (i: number) => string }> = {
  "1D": { n: 24, from: 42600, to: 43479, vol: 0.012, seed: 3, label: (i) => `${String(i).padStart(2, "0")}:00` },
  "7D": { n: 28, from: 41300, to: 43479, vol: 0.02, seed: 5, label: (i) => short(new Date(2026, 9, 29 + Math.floor(i / 4)), { weekday: "short" }) },
  "1M": { n: 30, from: 38200, to: 43479, vol: 0.03, seed: 8, label: (i) => short(new Date(2026, 9, 5 + i), { month: "short", day: "numeric" }) },
  "1Y": { n: 120, from: 16800, to: 43479, vol: 0.05, seed: 11, label: (i) => short(new Date(2025, 10 + Math.floor(i / 10), 1), { month: "short" }) },
  All: { n: 120, from: 7200, to: 43479, vol: 0.06, seed: 21, label: (i) => String(2018 + Math.floor(i / 20)) },
};

function buildSeries(range: Range) {
  const c = RANGES[range];
  const rnd = mulberry32(c.seed);
  let w = 0;
  const walk = Array.from({ length: c.n }, () => (w += rnd() - 0.5));
  const end = walk[c.n - 1];
  return walk.map((x, i) => {
    const t = i / (c.n - 1);
    const base = c.from * Math.pow(c.to / c.from, t);
    const price = Math.round(base * (1 + (x - end * t) * c.vol));
    return {
      label: c.label(i),
      price,
      cap: price * SUPPLY,
      volume: Math.round((0.4 + rnd() * 0.6) * price * 400_000),
    };
  });
}

export default function PriceChart() {
  const [range, setRange] = useState<Range>("1Y");
  const [metric, setMetric] = useState<Metric>("Price");
  const [mode, setMode] = useState<"line" | "candle">("line");
  const [log, setLog] = useState(false);

  const data = useMemo(() => buildSeries(range), [range]);
  const key = metric === "Price" ? "price" : "cap";

  const download = () => {
    const csv = ["label,price,market_cap,volume", ...data.map((d) => `${d.label},${d.price},${d.cap},${d.volume}`)].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `btc-${range}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="p-4 lg:col-start-2 lg:row-start-1">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
          <Activity size={18} variant="Bold" color="currentColor" />
        </span>
        <h2 className="font-medium">Chart</h2>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Segmented options={["Price", "Market Cap"] as Metric[]} value={metric} onChange={setMetric} />
        <div className="inline-flex rounded-full border border-gray-200/70 p-0.5">
          {([
            ["line", TrendUp],
            ["candle", Candle2],
          ] as const).map(([m, I]) => (
            <button
              key={m}
              aria-label={m}
              onClick={() => setMode(m)}
              className={`flex h-8 w-10 items-center justify-center rounded-full ${mode === m ? "bg-white shadow-sm" : "text-gray-500"}`}
            >
              <I size={18} color="currentColor" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        {(["1D", "7D", "1M", "1Y", "All"] as Range[]).map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`flex-1 rounded-full py-2 text-sm transition ${
              range === r ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {r}
          </button>
        ))}
        <button
          onClick={() => setLog((l) => !l)}
          className={`flex-1 rounded-full py-2 text-sm transition ${
            log ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          LOG
        </button>
        <CircleBtn icon={DocumentDownload} label="Download CSV" onClick={download} />
      </div>

      <div className="mt-4 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 8, right: 4, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="btc-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis
              dataKey="label"
              interval={Math.max(Math.floor(data.length / 6) - 1, 0)}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              yAxisId="main"
              orientation="left"
              scale={log ? "log" : "linear"}
              domain={log ? ["auto", "auto"] : [0, "auto"]}
              allowDataOverflow
              tickLine={false}
              axisLine={false}
              width={44}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickFormatter={(v: number) => compact.format(v)}
            />
            <YAxis yAxisId="vol" hide domain={[0, (max: number) => max * 4]} />
            <Tooltip
              cursor={{ stroke: "#93c5fd" }}
              contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb", fontSize: 12 }}
              formatter={(v, name) => [
                name === "volume" ? `$${compact.format(Number(v))}` : metric === "Price" ? usd.format(Number(v)) : `$${compact.format(Number(v))}`,
                name === "volume" ? "Volume" : metric,
              ]}
            />
            <Bar yAxisId="vol" dataKey="volume" fill="#c7d2fe" fillOpacity={0.7} radius={[6, 6, 0, 0]} maxBarSize={18} />
            {mode === "line" ? (
              <Area
                yAxisId="main"
                type="monotone"
                dataKey={key}
                stroke="#2563eb"
                strokeWidth={1.6}
                fill="url(#btc-fill)"
                dot={false}
                activeDot={{ r: 4 }}
              />
            ) : (
              <Bar yAxisId="main" dataKey={key} fill="#2563eb" radius={[3, 3, 0, 0]} maxBarSize={10} />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex gap-4">
        {["Compare with", "Trading view"].map((l) => (
          <button
            key={l}
            className="flex-1 rounded-full border border-gray-300 py-3 text-sm font-medium text-gray-400 transition hover:border-gray-400 hover:text-gray-500"
          >
            {l}
          </button>
        ))}
      </div>
    </Card>
  );
}
