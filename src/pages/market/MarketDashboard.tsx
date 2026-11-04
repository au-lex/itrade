import { useMemo, useState } from "react";
import { Chart2, Flash, TrendDown, TrendUp } from "iconsax-react";
import { COINS } from "./data";
import { MarketTable, Sidebar, StablecoinsCard, StatCard } from "./components";

export default function MarketDashboard() {
  const [favs, setFavs] = useState<string[]>(["BTC", "ETH", "BNB", "SOL"]);
  const [query, setQuery] = useState("");
  const [range, setRange] = useState("24H");
  const [sortPopular, setSortPopular] = useState(true);

  const toggleFav = (s: string) =>
    setFavs((f) => (f.includes(s) ? f.filter((x) => x !== s) : [...f, s]));

  const favList = COINS.filter((c) => favs.includes(c.symbol)).filter((c) =>
    `${c.symbol} ${c.name}`.toLowerCase().includes(query.toLowerCase())
  );

  const market = useMemo(
    () => (sortPopular ? COINS : [...COINS].sort((a, b) => b.change - a.change)),
    [sortPopular]
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans text-gray-900 sm:p-8">
      <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-[1fr_1fr_1.1fr_300px]">
        <StatCard
          featured
          title="Top Traded"
          value="43,837.15"
          change={0.64}
          coin="Bitcoin (BTC)"
          coinColor="#F7931A"
          icon={Flash}
        />
        <StatCard
          title="Biggest Gainer"
          value="22.14"
          change={141.21}
          coin="Moonriver (MOVR)"
          coinColor="#38BDF8"
          icon={TrendUp}
        />

        <StablecoinsCard className="lg:row-span-2" />

        <Sidebar favorites={favList} query={query} onQueryChange={setQuery} onToggleFav={toggleFav} />

        <StatCard
          title="Biggest Loser"
          value="0.2066989"
          change={-13.87}
          coin="MOON (MOON)"
          coinColor="#111827"
          icon={TrendDown}
        />
        <StatCard
          title="Highest Volume"
          value="13.59B"
          change={0.1}
          coin="Bitcoin (BTC)"
          coinColor="#F7931A"
          icon={Chart2}
        />

        <MarketTable
          className="lg:col-span-3"
          coins={market}
          range={range}
          onRangeChange={setRange}
          sortPopular={sortPopular}
          onToggleSort={() => setSortPopular((s) => !s)}
        />
      </div>
    </div>
  );
}
