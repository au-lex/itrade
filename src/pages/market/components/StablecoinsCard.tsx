import { Chart } from "iconsax-react";
import { STABLES } from "../data";
import { Card, Change, CoinDot, IconBadge } from "./ui";

export const StablecoinsCard = ({ className = "" }: { className?: string }) => (
  <Card className={className}>
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
