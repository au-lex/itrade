import { cn } from "../../lib/cn";
import { HOLDINGS } from "./data";
import { TotalBalanceCard } from "./component/TotalBalanceCard";
import { CryptoCard } from "./component/CryptoCard";
import { ProfitCard } from "./component/ProfitCard";
import { PortfolioOverviewCard } from "./component/PortfolioOverviewCard";
import { TrendingCard } from "./component/TrendingCard";
import { QuickExchangeCard } from "./component/QuickExchangeCard";
import { RecentTransactionsCard } from "./component/RecentTransactionsCard";
import { PremiumCard } from "./component/PremiumCard";

export default function DashboardPage() {
  return (
    <main className="mx-auto grid  max-w-[1400px] grid-cols-1 gap-4 p-2 sm:grid-cols-2 sm:p-4 xl:grid-cols-12">


      {/* Row 1 */}
      <TotalBalanceCard className="sm:col-span-2 xl:col-span-3" />
      {HOLDINGS.map((h, i) => (
        <CryptoCard
          key={h.symbol}
          holding={h}
          className={cn("xl:col-span-3", i === HOLDINGS.length - 1 && "sm:col-span-2")}
        />
      ))}

      {/* Row 2 */}
      <ProfitCard className="sm:col-span-2 xl:col-span-3" />
      <PortfolioOverviewCard className="sm:col-span-2 xl:col-span-5" />
      <TrendingCard className="sm:col-span-2 xl:col-span-4" />

      {/* Row 3 */}
      <QuickExchangeCard className="sm:col-span-2 xl:col-span-4" />
      <RecentTransactionsCard className="sm:col-span-2 xl:col-span-4" />
      <PremiumCard className="sm:col-span-2 xl:col-span-4" />
    </main>
  );
}