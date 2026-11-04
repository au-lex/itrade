import { Chart2, Flash, TrendDown, TrendUp, type Icon } from "iconsax-react";
import { CoinDot, IconBadge } from "./shared";

type StatProps = {
  title: string;
  value: string;
  change: number;
  coin: string;
  coinColor: string;
  icon: Icon;
  featured?: boolean;
  prefix?: string;
  className?: string;
};

const StatCard = ({ title, value, change, coin, coinColor, icon, featured, prefix = "$", className = "" }: StatProps) => (
  <div className={`rounded-2xl p-4 ${featured ? "bg-blue-600 text-white" : "bg-white text-gray-900"} ${className}`}>
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
      <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${change >= 0 ? (featured ? "text-green-300" : "text-green-500") : "text-red-500"}`}>
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

/* Renders the four stat cards as grid children (fragment), pinned to their cells. */
export default function StatCards() {
  return (
    <>
      <StatCard
        featured
        title="Top Traded"
        value="43,837.15"
        change={0.64}
        coin="Bitcoin (BTC)"
        coinColor="#F7931A"
        icon={Flash}
        className="lg:col-start-1 lg:row-start-1"
      />
      <StatCard
        title="Biggest Gainer"
        value="22.14"
        change={141.21}
        coin="Moonriver (MOVR)"
        coinColor="#38BDF8"
        icon={TrendUp}
        className="lg:col-start-2 lg:row-start-1"
      />
      <StatCard
        title="Biggest Loser"
        value="0.2066989"
        change={-13.87}
        coin="MOON (MOON)"
        coinColor="#111827"
        icon={TrendDown}
        className="lg:col-start-1 lg:row-start-2"
      />
      <StatCard
        title="Highest Volume"
        value="13.59B"
        change={0.1}
        coin="Bitcoin (BTC)"
        coinColor="#F7931A"
        icon={Chart2}
        className="lg:col-start-2 lg:row-start-2"
      />
    </>
  );
}
