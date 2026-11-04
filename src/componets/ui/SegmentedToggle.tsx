import { cn } from "../../lib/cn";

interface SegmentedToggleProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}

export function SegmentedToggle<T extends string>({
  label,
  options,
  value,
  onChange,
}: SegmentedToggleProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex shrink-0 rounded-full bg-gray-100 p-1"
    >
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={o === value}
          onClick={() => onChange(o)}
          className={cn(
            "rounded-full px-3 py-1 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
            o === value
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}