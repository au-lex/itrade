import { useRef, useState, type ReactNode } from "react";
import { ArrowDown2 } from "iconsax-react";
import { cn } from "../../lib/cn";
import { useClickOutside } from "../../hooks/useClickOutside";

export interface SelectOption {
  label: string;
  value: string;
  icon?: ReactNode;
}

interface PillSelectProps {
  label: string; // accessible name
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
  className?: string;
}

export function PillSelect({
  label,
  options,
  value,
  onChange,
  fullWidth,
  className,
}: PillSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  const selected = options.find((o) => o.value === value) ?? options[0];

  return (
    <div
      ref={ref}
      className={cn("relative", fullWidth ? "w-full" : "inline-block", className)}
    >
      <button
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-9 items-center gap-2 rounded-full border border-gray-900 bg-white px-3 text-sm text-gray-900 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
          fullWidth && "w-full justify-between"
        )}
      >
        <span className="flex items-center gap-2 whitespace-nowrap">
          {selected.icon}
          {selected.label}
        </span>
        <ArrowDown2
          size={16}
          color="currentColor"
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="menu"
          aria-label={label}
          className="absolute right-0 z-20 mt-2 min-w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-1 shadow-xl"
        >
          {options.map((o) => (
            <li key={o.value} role="none">
              <button
                type="button"
                role="menuitemradio"
                aria-checked={o.value === value}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-sm transition hover:bg-gray-100",
                  o.value === value ? "text-blue-600" : "text-gray-900"
                )}
              >
                {o.icon}
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}