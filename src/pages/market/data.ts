import type { Coin, NewCoin, Stable } from "./types";

export const COINS: Coin[] = [
  { symbol: "BTC", name: "Bitcoin", price: "$43,575.46", cap: "$851.54B", change: 1.24, color: "#F7931A", spark: [5, 6, 5, 7, 6, 8, 7, 9, 8, 11, 10, 14] },
  { symbol: "ETH", name: "Ethereum", price: "$2,288.38", cap: "$274.80B", change: -1.33, color: "#627EEA", spark: [6, 9, 5, 10, 7, 11, 6, 12, 8, 10, 7, 9] },
  { symbol: "BNB", name: "Binance", price: "$268.77", cap: "$41.41B", change: -2.32, color: "#F3BA2F", spark: [4, 12, 5, 11, 7, 12, 8, 10, 6, 9, 7, 12] },
  { symbol: "SOL", name: "Solana", price: "$94.68", cap: "$47.59B", change: 0.23, color: "#14F195", spark: [3, 6, 4, 8, 5, 9, 6, 10, 8, 11, 14, 16] },
  { symbol: "XRP", name: "XRP", price: "$0.6158316", cap: "$33.17B", change: 4.43, color: "#23292F", spark: [4, 9, 5, 11, 6, 12, 7, 13, 6, 12, 8, 13] },
  { symbol: "ADA", name: "Cardano", price: "$0.6158316", cap: "$21.27B", change: -1.03, color: "#0033AD", spark: [6, 9, 5, 10, 7, 11, 6, 12, 8, 10, 7, 9] },
];

export const STABLES: Stable[] = [
  { symbol: "BTC", name: "Bitcoin", price: "$43,575.46", change: -1.33, color: "#F7931A" },
  { symbol: "ETH", name: "Ethereum", price: "$2,288.38", change: 1.24, color: "#627EEA" },
  { symbol: "BNB", name: "Binance", price: "$268.77", change: -2.32, color: "#F3BA2F" },
  { symbol: "SOL", name: "Solana", price: "$94.68", change: -4.41, color: "#14F195" },
  { symbol: "XRP", name: "XRP", price: "$0.6158316", change: -1.03, color: "#23292F" },
];

export const NEW_COINS: NewCoin[] = [
  { label: "Avatly (AVA)", price: "$0.01756867", color: "#38BDF8" },
  { label: "SafuDex (SFD)", price: "$0.01381614", color: "#111827" },
  { label: "oDung (DERP)", price: "$0.00032481", color: "#A16207" },
];
