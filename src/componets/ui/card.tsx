import { useId, type ReactNode } from "react";
import { More } from "iconsax-react";
import { cn } from "../../lib/cn";

interface CardProps {
  title: string;
  icon: ReactNode;
  action?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function Card({ title, icon, action, className, children }: CardProps) {
  const id = useId();
  return (
    <section
      aria-labelledby={id}
      className={cn("rounded-3xl bg-white p-4 sm:p-5", className)}
    >
      <header className="mb-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {icon}
          <h2 id={id} className="truncate text-base text-gray-900 sm:text-lg">
            {title}
          </h2>
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}

export function MoreButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="rounded-full p-1 text-gray-900 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      <More size={20} color="currentColor" variant="Bold" />
    </button>
  );
}