import { Chart } from "iconsax-react";
import { Card, Change, CoinDot, IconBadge } from "./shared";

const STABLES = [
  { symbol: "BTC", name: "Bitcoin", price: "$43,575.46", change: -1.33, color: "#F7931A" },
  { symbol: "ETH", name: "Ethereum", price: "$2,288.38", change: 1.24, color: "#627EEA" },
  { symbol: "BNB", name: "Binance", price: "$268.77", change: -2.32, color: "#F3BA2F" },
  { symbol: "SOL", name: "Solana", price: "$94.68", change: -4.41, color: "#14F195" },
  { symbol: "XRP", name: "XRP", price: "$0.6158316", change: -1.03, color: "#23292F" },
];

export default function Stablecoins() {
  return (
    <Card className="lg:col-start-3 lg:row-span-2 lg:row-start-1">
      <div className="mb-4 flex items-center gap-3">
        <IconBadge icon={Chart} />
        <h3 className="font-medium">Stablecoins Spotlight</h3>
      </div>
      <ul className="space-y-4">
        {STABLES.map((s) => (
          <li key={s.symbol} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CoinDot color={s.color} label={s.symbol} size={20} />
              <div className="leading-tight">
                <p className="text-sm font-medium">{s.symbol}</p>
                <p className="text-xs text-gray-400">{s.name}</p>
              </div>
            </div>
            <div className="text-right leading-tight">
              <p className="text-sm font-medium">{s.price}</p>
              <Change value={s.change} />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
