export const COLORS = {
  brand: "#2563eb",
  portfolio: ["#2563eb", "#6b8afd", "#b4c3fa"],
};

/* ---------- Crypto holdings (reusable CryptoCard) ---------- */
export interface CryptoHolding {
  symbol: string;
  name: string;
  amount: number;
  valueUsd: number;
  priceUsd: number;
}

export const HOLDINGS: CryptoHolding[] = [
  { symbol: "BTC", name: "Bitcoin", amount: 12.32, valueUsd: 369533.41, priceUsd: 43419.2 },
  { symbol: "ETH", name: "Ethereum", amount: 98.43, valueUsd: 220792.76, priceUsd: 2279.63 },
  { symbol: "ADA", name: "Cardano", amount: 43, valueUsd: 25803.7, priceUsd: 0.6 },
];

/* ---------- Total balance ---------- */
export const TOTAL_BALANCE = {
  value: 590351.97,
  change: 12.3,
  previous: 532098.21,
  series: [15, 17, 14, 13, 18, 22, 24, 20, 13, 12, 17, 29].map((v, i) => ({
    label: `P${i + 1}`,
    value: v * 1000,
  })),
};

/* ---------- Profit gauge ---------- */
export type GaugeTone = "dark" | "mid" | "light";

export const PROFIT = {
  value: 58253,
  change: 12.3,
  periods: ["Today", "This Week", "This Month"],
  segments: [
    { tone: "dark", value: 45 },
    { tone: "mid", value: 15 },
    { tone: "light", value: 40 },
  ] as { tone: GaugeTone; value: number }[],
};

/* ---------- Portfolio overview ---------- */
export const PORTFOLIO = {
  balance: 231238.21,
  change: 12.3,
  periods: ["This Month", "This Week", "This Year"],
  series: [
    { key: "btc", label: "Bitcoin", color: "#2563eb" },
    { key: "eth", label: "Ethereum", color: "#6b8afd" },
    { key: "ada", label: "Cardano", color: "#b4c3fa" },
  ],
  data: [
    { x: 0, btc: 30, eth: 42, ada: 40 },
    { x: 1, btc: 38, eth: 44, ada: 42 },
    { x: 2, btc: 52, eth: 46, ada: 44 },
    { x: 3, btc: 58, eth: 50, ada: 50 },
    { x: 4, btc: 60, eth: 44, ada: 56 },
    { x: 5, btc: 56, eth: 34, ada: 52 },
    { x: 6, btc: 46, eth: 24, ada: 40 },
    { x: 7, btc: 34, eth: 22, ada: 28 },
    { x: 8, btc: 44, eth: 36, ada: 36 },
    { x: 9, btc: 56, eth: 50, ada: 50 },
    { x: 10, btc: 66, eth: 56, ada: 54 },
    { x: 11, btc: 82, eth: 58, ada: 52 },
    { x: 12, btc: 95, eth: 56, ada: 50 },
  ],
};

/* ---------- Trending ---------- */
export const TRENDING = {
  periods: ["24H", "7D", "30D"],
  rows: [
    { symbol: "BTC", price: "$43,575.46", change: -1.33 },
    { symbol: "ETH", price: "$2,288.38", change: 1.24 },
    { symbol: "BNB", price: "$268.77", change: -2.32 },
    { symbol: "SOL", price: "$94.68", change: -4.41 },
    { symbol: "XRP", price: "$0.61583168", change: -1.03 },
    { symbol: "ADA", price: "$0.60432636", change: -4.04 },
  ],
};

/* ---------- Quick exchange ---------- */
export const EXCHANGE_COINS = [
  { symbol: "BTC", name: "Bitcoin", priceUsd: 43419.2, balance: 1.0021 },
  { symbol: "USDT", name: "USDT", priceUsd: 1, balance: 5200 },
  { symbol: "ETH", name: "Ethereum", priceUsd: 2279.63, balance: 12.5 },
];

/* ---------- Transactions ---------- */
export type TxStatus = "Pending" | "Failed" | "Completed";

export const TRANSACTION_GROUPS: {
  label: string;
  items: { name: string; amount: string; time: string; status: TxStatus }[];
}[] = [
  {
    label: "Today",
    items: [
      { name: "BTCUSDT", amount: "+$1,212.32", time: "02.32 PM", status: "Pending" },
      { name: "BTCUSDT", amount: "+$1,212.32", time: "10.54 AM", status: "Failed" },
      { name: "Deposit", amount: "+$200,000", time: "08.14 AM", status: "Completed" },
      { name: "ETHUSDT", amount: "+$20,290", time: "01.47 AM", status: "Completed" },
    ],
  },
];