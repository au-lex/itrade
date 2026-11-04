import { useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Activity } from "iconsax-react";
import { Card } from "../../../componets/ui/card";
import { IconBadge } from "../../../componets/ui/IconBadge";
import { PillSelect } from "../../../componets/ui/PillSelect";
import { Money } from "../../../componets/ui/Money";
import { ChangeBadge } from "../../../componets/ui/ChangeBadge";
import { PORTFOLIO } from "../data";

const weekOf = (x: number) => Math.min(Math.floor(x / 3) + 1, 4);

export function PortfolioOverviewCard({ className }: { className?: string }) {
  const [period, setPeriod] = useState(PORTFOLIO.periods[0]);

  return (
    <Card
      title="Portfolio Overview"
      icon={<IconBadge icon={Activity} />}
      action={
        <PillSelect
          label="Portfolio period"
          options={PORTFOLIO.periods.map((p) => ({ label: p, value: p }))}
          value={period}
          onChange={setPeriod}
        />
      }
      className={className}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="md:w-40 md:shrink-0">
          <p className="text-sm text-gray-900">Balance</p>
          <Money
            value={PORTFOLIO.balance}
            className="block text-2xl font-medium text-gray-900"
          />
          <ChangeBadge value={PORTFOLIO.change} />

          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            {PORTFOLIO.series.map((s) => (
              <li key={s.key} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full"
                  style={{ background: s.color }}
                />
                {s.label}
              </li>
            ))}
          </ul>
        </div>

        <div
          role="img"
          aria-label="Portfolio performance by week"
          className="h-56 min-w-0 flex-1"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={PORTFOLIO.data} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
              <XAxis
                type="number"
                dataKey="x"
                domain={[0, 12]}
                ticks={[1.5, 4.5, 7.5, 10.5]}
                tickFormatter={(v: number) => `Week ${weekOf(v)}`}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
              />
              <YAxis hide domain={[0, 100]} />
              <Tooltip
                labelFormatter={(v) => `Week ${weekOf(Number(v))}`}
                contentStyle={{
                  borderRadius: 16,
                  border: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,.1)",
                }}
              />
              {PORTFOLIO.series.map((s) => (
                <Line
                  key={s.key}
                  type="monotone"
                  dataKey={s.key}
                  name={s.label}
                  stroke={s.color}
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}