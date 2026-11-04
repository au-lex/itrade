import type { Icon } from "iconsax-react";
import { CoinDot, IconBadge } from "./ui";

type StatCardProps = {
  title: string;
  value: string;
  change: number;
  coin: string;
  coinColor: string;
  icon: Icon;
  featured?: boolean;
  prefix?: string;
};

export const StatCard = ({
  title,
  value,
  change,
  coin,
  coinColor,
  icon,
  featured,
  prefix = "$",
}: StatCardProps) => (
  <div className={`rounded-2xl p-4 ${featured ? "bg-blue-600 text-white" : "bg-white text-gray-900"}`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <IconBadge icon={icon} light={featured} />
        <h3 className="font-medium">{title}</h3>
      </div>
      <span className={`text-xs ${featured ? "text-white/70" : "text-gray-400"}`}>Last 24h</span>
    </div>
    <div className="mt-4 flex items-baseline gap-2">
      <span className="text-sm font-semibold">{prefix}</span>
      <span className="-ml-1 text-4xl font-semibold tracking-tight">{value}</span>
      <span
        className={`inline-flex items-center gap-0.5 text-xs font-medium ${
          change >= 0 ? (featured ? "text-green-300" : "text-green-500") : "text-red-500"
        }`}
      >
        {change >= 0 ? "↗" : "↘"}
        {change >= 0 ? "+" : ""}
        {change}%
      </span>
    </div>
    <div className="mt-3 flex items-center gap-2">
      <span className={`flex h-8 w-8 items-center justify-center rounded-full ${featured ? "bg-white/20" : "bg-gray-100"}`}>
        <CoinDot color={coinColor} label={coin} size={20} />
      </span>
      <span className={`text-sm ${featured ? "text-white/90" : "text-gray-400"}`}>{coin}</span>
    </div>
  </div>
);
