import { useState } from "react";
import { Code, DocumentText, Global, Link as LinkIcon, Message, Star1 } from "iconsax-react";
import { BtcDot, Card } from "./shared";

export default function SidePanels() {
  const [following, setFollowing] = useState(false);

  return (
    <aside className="flex flex-col gap-5 lg:col-start-3 lg:row-start-1">
      <Card className="p-5">
        <div className="flex items-center gap-3">
          <BtcDot />
          <h2 className="font-medium">My Bitcoin</h2>
        </div>
        <p className="mt-5 text-5xl font-medium tracking-tight">
          12,32 <span className="text-xl font-normal text-gray-700">BTC</span>
        </p>
        <p className="mt-1 text-lg text-gray-400">
          <sup className="text-xs">$</sup>369,533.41
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-400">
          <span>Price per 1 BTC</span>
          <span className="font-medium text-gray-900">
            <sup className="text-xs text-gray-500">$</sup>43.419,20
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {["Buy", "Sell"].map((l) => (
            <button
              key={l}
              className="rounded-full border border-blue-600 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              {l}
            </button>
          ))}
        </div>
      </Card>

      <Card className="flex-1 p-5">
        <h2 className="font-medium">About Bitcoin</h2>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BtcDot size={48} />
            <div className="leading-tight">
              <p className="font-medium">Bitcoin</p>
              <p className="mt-1 text-sm text-gray-400">7,7M Followers</p>
            </div>
          </div>
          <button
            onClick={() => setFollowing((f) => !f)}
            className={`rounded-full border border-blue-600 px-4 py-1.5 text-sm font-medium transition ${
              following ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-50"
            }`}
          >
            {following ? "Following" : "Follow"}
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 font-medium">
            <Star1 size={20} variant="Bold" color="currentColor" className="text-amber-400" />
            Rating
          </span>
          <span className="font-medium">4.5/5</span>
        </div>
        <div className="mt-4 flex gap-2">
          {(
            [
              [Global, "Website", "text-blue-600 border-blue-600"],
              [DocumentText, "Whitepaper", "text-blue-600 border-blue-600"],
              [Message, "Community", "text-red-500 border-red-500"],
              [Code, "Source code", "text-gray-900 border-gray-900"],
              [LinkIcon, "Forum", "text-orange-500 border-orange-500"],
            ] as const
          ).map(([I, label, cls]) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className={`flex h-9 flex-1 items-center justify-center rounded-full border transition hover:bg-gray-50 ${cls}`}
            >
              <I size={16} color="currentColor" />
            </a>
          ))}
        </div>
      </Card>
    </aside>
  );
}
