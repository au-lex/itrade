import type { ReactNode } from "react";
import { ArrowRight, type Icon } from "iconsax-react";

export const Card = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <div className={`rounded-2xl bg-white p-4 ${className}`}>{children}</div>
);

export const BtcDot = ({ size = 32 }: { size?: number }) => (
  <span
    className="inline-flex shrink-0 items-center justify-center rounded-full bg-amber-400/90 font-bold text-white"
    style={{ width: size, height: size, fontSize: size * 0.5 }}
  >
    ₿
  </span>
);

export const CircleBtn = ({ icon: I, label, onClick }: { icon: Icon; label: string; onClick?: () => void }) => (
  <button
    aria-label={label}
    onClick={onClick}
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
  >
    <I size={18} color="currentColor" />
  </button>
);

export const Change = ({ value }: { value: number }) => (
  <span className={`inline-flex items-center gap-1 text-xs font-medium ${value >= 0 ? "text-green-500" : "text-red-500"}`}>
    <ArrowRight size={12} color="currentColor" className={value >= 0 ? "-rotate-45" : "rotate-45"} />
    {value >= 0 ? "+" : ""}
    {value}%
  </span>
);

export const Segmented = <T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) => (
  <div className="inline-flex rounded-full border border-gray-200/70 bg-gray-50 p-0.5">
    {options.map((o) => (
      <button
        key={o}
        onClick={() => onChange(o)}
        className={`rounded-full px-4 py-1.5 text-sm transition ${
          value === o ? "border border-gray-200/70 bg-white font-medium shadow-sm" : "border border-transparent text-gray-700"
        }`}
      >
        {o}
      </button>
    ))}
  </div>
);
