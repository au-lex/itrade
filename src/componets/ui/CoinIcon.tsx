const COINS: Record<string, { glyph: string; bg: string; fg: string }> = {
  BTC: { glyph: "₿", bg: "#f7931a", fg: "#ffffff" },
  ETH: { glyph: "◆", bg: "#e6f6ec", fg: "#2f9e5b" },
  ADA: { glyph: "✺", bg: "#1d3fd6", fg: "#ffffff" },
  BNB: { glyph: "◈", bg: "#fff3cd", fg: "#f0b90b" },
  SOL: { glyph: "≡", bg: "#1f1f2e", fg: "#19fb9b" },
  XRP: { glyph: "✕", bg: "transparent", fg: "#111827" },
  USDT: { glyph: "₮", bg: "#26a17b", fg: "#ffffff" },
};

export function CoinIcon({ symbol, size = 24 }: { symbol: string; size?: number }) {
  const coin = COINS[symbol] ?? { glyph: symbol[0], bg: "#e5e7eb", fg: "#111827" };
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-full font-bold leading-none"
      style={{
        width: size,
        height: size,
        background: coin.bg,
        color: coin.fg,
        fontSize: size * 0.55,
      }}
    >
      {coin.glyph}
    </span>
  );
}