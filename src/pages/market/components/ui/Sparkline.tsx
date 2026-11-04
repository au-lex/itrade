import { useMemo } from "react";
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";

type SparklineProps = { data: number[]; up: boolean };

export const Sparkline = ({ data, up }: SparklineProps) => {
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
