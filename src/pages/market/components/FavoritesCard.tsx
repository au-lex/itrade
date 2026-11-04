import { SearchNormal1, Star1 } from "iconsax-react";
import type { Coin } from "../types";
import { Card, CoinDot } from "./ui";

type FavoritesCardProps = {
  coins: Coin[];
  query: string;
  onQueryChange: (q: string) => void;
  onToggle: (symbol: string) => void;
};

export const FavoritesCard = ({ coins, query, onQueryChange, onToggle }: FavoritesCardProps) => (
  <Card>
    <label className="flex items-center rounded-xl bg-gray-50 px-4 py-3">
      <input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search your favorite..."
        className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
      />
      <SearchNormal1 size={20} color="currentColor" className="text-gray-400" />
    </label>
    <ul className="mt-4 space-y-4">
      {coins.map((c) => (
        <li key={c.symbol} className="flex items-center justify-between">
          <span className="flex items-center gap-3 text-sm font-medium">
            <CoinDot color={c.color} label={c.symbol} size={20} />
            {c.symbol}
          </span>
          <button onClick={() => onToggle(c.symbol)} aria-label={`Remove ${c.symbol} from favorites`}>
            <Star1 size={20} variant="Bold" color="currentColor" className="text-blue-600" />
          </button>
        </li>
      ))}
      {coins.length === 0 && <li className="text-sm text-gray-400">No favorites found.</li>}
    </ul>
  </Card>
);
