import { Magicpen } from "iconsax-react";
import { NEW_COINS } from "../data";
import { Card, CoinDot, IconBadge } from "./ui";

export const NewCoinsCard = () => (
  <Card>
    <div className="mb-4 flex items-center gap-3">
      <IconBadge icon={Magicpen} />
      <h3 className="font-medium">Newly Listed Coins</h3>
    </div>
    <div className="mb-3 flex justify-between text-sm text-gray-400">
      <span>Name</span>
      <span>Price Change</span>
    </div>
    <ul className="space-y-4">
      {NEW_COINS.map((c) => (
        <li key={c.label} className="flex items-center justify-between text-sm font-medium">
          <span className="flex items-center gap-3">
            <CoinDot color={c.color} label={c.label} size={18} />
            {c.label}
          </span>
          <span>{c.price}</span>
        </li>
      ))}
    </ul>
  </Card>
);
