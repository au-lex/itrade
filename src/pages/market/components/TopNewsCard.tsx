import { ArrowRight } from "iconsax-react";
import { Card } from "./ui";

export const TopNewsCard = ({ className = "" }: { className?: string }) => (
  <Card className={className}>
    <div className="flex items-start justify-between">
      <h3 className="font-medium">Top News</h3>
      <button
        aria-label="Open news"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
      >
        <ArrowRight size={18} color="currentColor" className="-rotate-45" />
      </button>
    </div>
    <span className="mt-5 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-400">First mover</span>
    <a href="#" className="mt-3 block text-lg font-medium leading-snug text-blue-600 hover:underline">
      Understanding the Success of Spot Bitcoin ETFs in Brazil
    </a>
    <p className="mt-3 text-xs leading-relaxed text-gray-400">
      As investors continue to await approval of a spot bitcoin exchange-traded fund (ETF) in the U.S., a check of
      Brazil finds hefty demand for such vehicles which have...
    </p>
  </Card>
);
