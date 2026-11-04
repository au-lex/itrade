import { ArrowDown, ArrowUp } from "iconsax-react";
import { cn } from "../../lib/cn";

interface ChangeBadgeProps {
  value: number;
  className?: string;
}

export function ChangeBadge({ value, className }: ChangeBadgeProps) {
  const positive = value >= 0;
  const Arrow = positive ? ArrowUp : ArrowDown;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium",
        positive ? "text-emerald-500" : "text-red-500",
        className
      )}
    >
      <Arrow
        size={12}
        color="currentColor"
        className={positive ? "rotate-45" : "-rotate-45"}
      />
      <data value={value}>
        {positive ? "+" : ""}
        {value}%
      </data>
    </span>
  );
}