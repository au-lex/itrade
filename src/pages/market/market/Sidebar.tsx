import { useState } from "react";
import { ArrowRight, Magicpen, SearchNormal1, Star1 } from "iconsax-react";
import { COINS, Card, CoinDot, IconBadge } from "./shared";

const NEW_COINS = [
  { label: "Avatly (AVA)", price: "$0.01756867", color: "#38BDF8" },
  { label: "SafuDex (SFD)", price: "$0.01381614", color: "#111827" },
  { label: "oDung (DERP)", price: "$0.00032481", color: "#A16207" },
];

export default function Sidebar() {
  const [favs, setFavs] = useState<string[]>(["BTC", "ETH", "BNB", "SOL"]);
  const [query, setQuery] = useState("");

  const toggleFav = (s: string) => setFavs((f) => (f.includes(s) ? f.filter((x) => x !== s) : [...f, s]));

  const favList = COINS.filter((c) => favs.includes(c.symbol)).filter((c) =>
    `${c.symbol} ${c.name}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <aside className="flex flex-col gap-5 lg:col-start-4 lg:row-span-3 lg:row-start-1">
      <Card>
        <label className="flex items-center rounded-xl bg-gray-50 px-4 py-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your favorite..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
          <SearchNormal1 size={20} color="currentColor" className="text-gray-400" />
        </label>
        <ul className="mt-4 space-y-4">
          {favList.map((c) => (
            <li key={c.symbol} className="flex items-center justify-between">
              <span className="flex items-center gap-3 text-sm font-medium">
                <CoinDot color={c.color} label={c.symbol} size={20} />
                {c.symbol}
              </span>
              <button onClick={() => toggleFav(c.symbol)} aria-label={`Remove ${c.symbol} from favorites`}>
                <Star1 size={20} variant="Bold" color="currentColor" className="text-blue-600" />
              </button>
            </li>
          ))}
          {favList.length === 0 && <li className="text-sm text-gray-400">No favorites found.</li>}
        </ul>
      </Card>

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

      <Card className="flex-1">
        <div className="flex items-start justify-between">
          <h3 className="font-medium">Top News</h3>
          <button
            aria-label="Open news"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
          >
            <ArrowRight size={18} color="currentColor" className="-rotate-45" />
          </button>
        </div>
        <span className="mt-5 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-400">First mover</span>
        <a href="#" className="mt-3 block text-lg font-medium leading-snug text-blue-600 hover:underline">
          Understanding the Success of Spot Bitcoin ETFs in Brazil
        </a>
        <p className="mt-3 text-xs leading-relaxed text-gray-400">
          As investors continue to await approval of a spot bitcoin exchange-traded fund (ETF) in the U.S., a check
          of Brazil finds hefty demand for such vehicles which have...
        </p>
      </Card>
    </aside>
  );
}
