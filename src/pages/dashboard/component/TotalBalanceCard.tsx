import {
  Area,
  AreaChart,
  ReferenceDot,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { DollarCircle } from "iconsax-react";
import { Card } from "../../../componets/ui/card";
import { IconBadge } from "../../../componets/ui/IconBadge";
import { Money } from "../../../componets/ui/Money";
import { ChangeBadge } from "../../../componets/ui/ChangeBadge";
import { COLORS, TOTAL_BALANCE } from "../data";

export function TotalBalanceCard({ className }: { className?: string }) {
  const { value, change, previous, series } = TOTAL_BALANCE;
  const last = series[series.length - 1];

  return (
    <Card title="Total Balance" icon={<IconBadge icon={DollarCircle} />} className={className}>
      <div className="flex flex-wrap items-end gap-2">
        <Money value={value} className="text-3xl font-medium text-gray-900 sm:text-4xl" />
        <ChangeBadge value={change} className="mb-1.5" />
      </div>
      <p className="mt-1 text-xs text-gray-400">
        Compare to <Money value={previous} className="text-gray-400" symbolClassName="text-[1em]" /> last month
      </p>

      <div
        role="img"
        aria-label="Balance trend chart"
        className="mt-4 h-32 w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={series} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={COLORS.brand} stopOpacity={0.18} />
                <stop offset="100%" stopColor={COLORS.brand} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" hide />
            <YAxis
              domain={[0, 30000]}
              ticks={[0, 15000, 30000]}
              tickFormatter={(v: number) => (v === 0 ? "$0" : `$${v / 1000}k`)}
              axisLine={false}
              tickLine={false}
              width={40}
              tick={{ fontSize: 11, fill: "#9ca3af" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={COLORS.brand}
              strokeWidth={2}
              fill="url(#balanceFill)"
              dot={false}
              isAnimationActive={false}
            />
            <ReferenceDot
              x={last.label}
              y={last.value}
              r={4}
              fill="#ffffff"
              stroke={COLORS.brand}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}