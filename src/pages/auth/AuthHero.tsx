import React from "react";
import bitcoin from "./bitcoin.png";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";

type CryptoUpdateCardProps = {
  title?: string;
  description?: string;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
};

const AuthHero: React.FC<CryptoUpdateCardProps> = ({
  title = "Stay Informed: Real-Time Market Updates",
  description = "Access up-to-the-minute market insights, live prices, and trends right at your fingertips. Stay informed about the crypto landscape and make informed decisions effortlessly. Welcome to a dashboard that keeps you ahead in the crypto game!",
  onPrev,
  onNext,
  className = "",
}) => {
  return (
    <section
      className={`relative flex min-h-[45rem] w- flex-col overflow-hidden rounded-2xl bg-[#1a3df0] text-white ${className}`}
    >
      {/* decorative circles */}
      <div className="pointer-events-none absolute -top-[23rem] left-[34%] h-[36rem] w-[36rem] rounded-full bg-white/[0.07]" />
      <div className="pointer-events-none absolute -top-[8rem] -right-[12rem] h-[24rem] w-[24rem] rounded-full bg-white/[0.08]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-white/[0.07]" />

      {/* illustration */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-10 pt-32">
        <img
          src={bitcoin}
          alt="Bitcoin illustration"
          className=" w-[80%] h-[25rem] object-contain"
        />
      </div>

      {/* glass panel */}
      <div className="relative z-10 m-6 rounded-2xl bg-white/15 p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="relative flex h-14 flex-1 items-center">
            <span className="absolute left-0 h-14 w-14 rounded-full border border-white/90" />
            <span className="ml-12 flex h-14 flex-1 items-center rounded-full border border-white/90 pl-6 pr-4 text-lg leading-none">
              <span className="truncate">{title}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20 text-xl transition hover:bg-white/30 active:scale-95"
          >
            <BsArrowDownLeft />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20 text-xl transition hover:bg-white/30 active:scale-95"
          >
            <BsArrowUpRight />
          </button>
        </div>

        <p className="mt-5 text-[13px] leading-relaxed text-white/60">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AuthHero;