import type { ReactNode } from "react";

type CardProps = { className?: string; children: ReactNode };

export const Card = ({ className = "", children }: CardProps) => (
  <div className={`rounded-2xl bg-white p-4 ${className}`}>{children}</div>
);
