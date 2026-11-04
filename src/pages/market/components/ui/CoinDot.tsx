type CoinDotProps = { color: string; label: string; size?: number };

export const CoinDot = ({ color, label, size = 24 }: CoinDotProps) => (
  <span
    className="inline-flex shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
    style={{ background: color, width: size, height: size }}
  >
    {label.slice(0, 1)}
  </span>
);
