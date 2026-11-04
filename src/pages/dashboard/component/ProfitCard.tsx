import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { MoneyRecive } from "iconsax-react";
import { Card } from "../../../componets/ui/card";
import { IconBadge } from "../../../componets/ui/IconBadge";
import { PillSelect } from "../../../componets/ui/PillSelect";
import { Money } from "../../../componets/ui/Money";
import { ChangeBadge } from "../../../componets/ui/ChangeBadge";
import { PROFIT, type GaugeTone } from "../data";

const TONES: Record<GaugeTone, { base: string; stripe: string }> = {
  dark: { base: "#1d4ed8", stripe: "#2f5cf2" },
  mid: { base: "#3b63f2", stripe: "#5a7bf5" },
  light: { base: "#b4c3fa", stripe: "#c9d4fb" },
};

export function ProfitCard({ className }: { className?: string }) {
  const [period, setPeriod] = useState(PROFIT.periods[0]);

  return (
    <Card
      title="Profit"
      icon={<IconBadge icon={MoneyRecive} />}
      action={
        <PillSelect
          label="Profit period"
          options={PROFIT.periods.map((p) => ({ label: p, value: p }))}
          value={period}
          onChange={setPeriod}
        />
      }
      className={className}
    >
      <div
        role="img"
        aria-label={`Profit gauge for ${period}`}
        className="relative mx-auto mt-2 w-full max-w-xs"
      >
        {/* aspect 2:1 + radii as % of the (height/2) max radius => full half-donut */}
        <ResponsiveContainer width="100%" aspect={2}>
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <defs>
              {(Object.keys(TONES) as GaugeTone[]).map((tone) => (
                <pattern
                  key={tone}
                  id={`profit-${tone}`}
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(-20)"
                >
                  <rect width="10" height="10" fill={TONES[tone].base} />
                  <rect width="10" height="4" fill={TONES[tone].stripe} />
                </pattern>
              ))}
            </defs>
            <Pie
              data={PROFIT.segments}
              dataKey="value"
              startAngle={180}
              endAngle={0}
              cx="50%"
              cy="100%"
              innerRadius="140%"
              outerRadius="200%"
              cornerRadius={14}
              stroke="none"
              isAnimationActive={false}
            >
              {PROFIT.segments.map((s) => (
                <Cell key={s.tone} fill={`url(#profit-${s.tone})`} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-x-0 bottom-2 text-center">
          <Money value={PROFIT.value} digits={0} className="text-2xl font-medium text-gray-900 sm:text-3xl" />
          <div>
            <ChangeBadge value={PROFIT.change} />
          </div>
        </div>
      </div>
    </Card>
  );
}