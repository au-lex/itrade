import { useId } from "react";
import { Crown1 } from "iconsax-react";
import { cn } from "../../../lib/cn";

export function PremiumCard({ className }: { className?: string }) {
  const id = useId();
  return (
    <aside
      aria-labelledby={id}
      className={cn(
        "flex flex-col justify-between gap-5 rounded-3xl bg-blue-600 p-5 text-white sm:p-6",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id={id} className="text-lg font-bold uppercase tracking-wide">
            Try our premium features
          </h2>
          <p className="mt-3 max-w-xs text-sm text-blue-200">
            Let AI be your guide in unraveling optimal asset analysis and help
            you to get to know crypto more!
          </p>
        </div>
        <Crown1
          aria-hidden="true"
          size={64}
          variant="Bold"
          color="#fbbf24"
          className="shrink-0 drop-shadow-lg"
        />
      </div>

      <a
        href="/premium"
        className="flex h-12 items-center justify-center rounded-full bg-white text-sm font-medium text-blue-600 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
      >
        See other premium features
      </a>
    </aside>
  );
}