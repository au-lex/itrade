import type { ReactNode } from "react";
import { ArrowRight, type Icon } from "iconsax-react";

/* ---------- data used by more than one component ---------- */

export type Coin = {
  symbol: string;
  name: string;
  price: string;
  cap: string;
  change: number;
  color: string;
  spark: number[];
};

export const COINS: Coin[] = [
  { symbol: "BTC", name: "Bitcoin", price: "$43,575.46", cap: "$851.54B", change: 1.24, color: "#F7931A", spark: [5, 6, 5, 7, 6, 8, 7, 9, 8, 11, 10, 14] },
  { symbol: "ETH", name: "Ethereum", price: "$2,288.38", cap: "$274.80B", change: -1.33, color: "#627EEA", spark: [6, 9, 5, 10, 7, 11, 6, 12, 8, 10, 7, 9] },
  { symbol: "BNB", name: "Binance", price: "$268.77", cap: "$41.41B", change: -2.32, color: "#F3BA2F", spark: [4, 12, 5, 11, 7, 12, 8, 10, 6, 9, 7, 12] },
  { symbol: "SOL", name: "Solana", price: "$94.68", cap: "$47.59B", change: 0.23, color: "#14F195", spark: [3, 6, 4, 8, 5, 9, 6, 10, 8, 11, 14, 16] },
  { symbol: "XRP", name: "XRP", price: "$0.6158316", cap: "$33.17B", change: 4.43, color: "#23292F", spark: [4, 9, 5, 11, 6, 12, 7, 13, 6, 12, 8, 13] },
  { symbol: "ADA", name: "Cardano", price: "$0.6158316", cap: "$21.27B", change: -1.03, color: "#0033AD", spark: [6, 9, 5, 10, 7, 11, 6, 12, 8, 10, 7, 9] },
];

/* ---------- primitives ---------- */

export const Card = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <div className={`rounded-2xl bg-white p-4 ${className}`}>{children}</div>
);

export const CoinDot = ({ color, label, size = 24 }: { color: string; label: string; size?: number }) => (
  <span
    className="inline-flex shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
    style={{ background: color, width: size, height: size }}
  >
    {label.slice(0, 1)}
  </span>
);

export const IconBadge = ({ icon: I, light = false }: { icon: Icon; light?: boolean }) => (
  <span
    className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
      light ? "bg-white/20 text-white" : "bg-blue-600 text-white"
    }`}
  >
    <I size={18} variant="Bold" color="currentColor" />
  </span>
);

export const Change = ({ value, className = "" }: { value: number; className?: string }) => {
  const up = value >= 0;
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium ${up ? "text-green-500" : "text-red-500"} ${className}`}>
      <ArrowRight size={12} color="currentColor" className={up ? "-rotate-45" : "rotate-45"} />
      {up ? "+" : ""}
      {value}%
    </span>
  );
};
