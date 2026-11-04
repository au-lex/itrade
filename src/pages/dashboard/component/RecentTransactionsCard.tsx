import { Clock } from "iconsax-react";
import { Card, MoreButton } from "../../../componets/ui/card";
import { IconBadge } from "../../../componets/ui/IconBadge";
import { cn } from "../../../lib/cn";
import { TRANSACTION_GROUPS, type TxStatus } from "../data";

const DOT: Record<TxStatus, string> = {
  Pending: "bg-amber-400",
  Failed: "bg-red-500",
  Completed: "bg-blue-600",
};

export function RecentTransactionsCard({ className }: { className?: string }) {
  return (
    <Card
      title="Recent Transaction"
      icon={<IconBadge icon={Clock} />}
      action={<MoreButton label="Transaction options" />}
      className={className}
    >
      {TRANSACTION_GROUPS.map((group) => (
        <div key={group.label}>
          <h3 className="mb-2 text-xs text-gray-400">{group.label}</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[380px] text-sm">
              <caption className="sr-only">{group.label} transactions</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Time</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((t, i) => (
                  <tr key={i}>
                    <th scope="row" className="py-2.5 text-left font-normal text-gray-900">
                      {t.name}
                    </th>
                    <td
                      className={cn(
                        "py-2.5",
                        t.status === "Failed" ? "text-gray-900" : "text-emerald-500"
                      )}
                    >
                      {t.amount}
                    </td>
                    <td className="py-2.5 text-gray-900">{t.time}</td>
                    <td className="py-2.5 text-gray-900">
                      <span className="inline-flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className={cn("h-1.5 w-1.5 rounded-full", DOT[t.status])}
                        />
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </Card>
  );
}