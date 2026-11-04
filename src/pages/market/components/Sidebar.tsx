import type { Coin } from "../types";
import { FavoritesCard } from "./FavoritesCard";
import { NewCoinsCard } from "./NewCoinsCard";
import { TopNewsCard } from "./TopNewsCard";

type SidebarProps = {
  favorites: Coin[];
  query: string;
  onQueryChange: (q: string) => void;
  onToggleFav: (symbol: string) => void;
};

export const Sidebar = ({ favorites, query, onQueryChange, onToggleFav }: SidebarProps) => (
  <aside className="flex flex-col gap-5 lg:col-start-4 lg:row-span-3 lg:row-start-1">
    <FavoritesCard coins={favorites} query={query} onQueryChange={onQueryChange} onToggle={onToggleFav} />
    <NewCoinsCard />
    <TopNewsCard className="flex-1" />
  </aside>
);
