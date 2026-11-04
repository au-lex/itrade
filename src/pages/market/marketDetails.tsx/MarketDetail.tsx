import CoinSummary from "./CoinSummary";
import PriceChart from "./PriceChart";
import SidePanels from "./SidePanels";
import MarketTable from "./MarketTable";
import DashboardNav from "../../dashboard/component/DashHeader";

export default function MarketDetail() {
  return (
    <>
<DashboardNav />
    <div className="min-h-screen bg-gray-50 p-4  text-gray-900 sm:p-6">
      <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-[300px_minmax(0,1fr)_300px]">
        <CoinSummary />
        <PriceChart />
        <SidePanels />
        <MarketTable />
      </div>
    </div>
        </>
  );
}
