import { useState } from "react";
import { Chart } from "iconsax-react";
import { Card } from "../../../componets/ui/card";
import { IconBadge } from "../../../componets/ui/IconBadge";
import { PillSelect } from "../../../componets/ui/PillSelect";
import { CoinIcon } from "../../../componets/ui/CoinIcon";
import { ChangeBadge } from "../../../componets/ui/ChangeBadge";
import { TRENDING } from "../data";

export function TrendingCard({ className }: { className?: string }) {
  const [period, setPeriod] = useState(TRENDING.periods[0]);

  return (
    <Card
      title="Trending on Market"
      icon={<IconBadge icon={Chart} />}
      action={
        <PillSelect
          label="Trending period"
          options={TRENDING.periods.map((p) => ({ label: p, value: p }))}
          value={period}
          onChange={setPeriod}
        />
      }
      className={className}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] text-sm">
          <caption className="sr-only">Trending coins over {period}</caption>
          <thead>
            <tr className="text-left text-gray-400">
              <th scope="col" className="pb-3 font-normal">Name</th>
              <th scope="col" className="pb-3 font-normal">Price</th>
              <th scope="col" className="pb-3 text-right font-normal">Price Change</th>
            </tr>
          </thead>
          <tbody>
            {TRENDING.rows.map((r) => (
              <tr key={r.symbol}>
                <th scope="row" className="py-2.5 text-left font-normal text-gray-900">
                  <span className="flex items-center gap-2">
                    <CoinIcon symbol={r.symbol} size={20} />
                    {r.symbol}
                  </span>
                </th>
                <td className="py-2.5 text-gray-900">{r.price}</td>
                <td className="py-2.5 text-right">
                  <ChangeBadge value={r.change} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}