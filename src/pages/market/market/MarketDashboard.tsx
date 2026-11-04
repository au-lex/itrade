import StatCards from "./StatCards";
import Stablecoins from "./Stablecoins";
import Sidebar from "./Sidebar";
import MarketTable from "./MarketTable";

export default function MarketDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans text-gray-900 sm:p-8">
      <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-[1fr_1fr_1.1fr_300px]">
        <StatCards />
        <Stablecoins />
        <Sidebar />
        <MarketTable />
      </div>
    </div>
  );
}
