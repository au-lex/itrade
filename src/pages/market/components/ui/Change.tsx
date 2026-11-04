import { ArrowRight } from "iconsax-react";

type ChangeProps = { value: number; className?: string };

export const Change = ({ value, className = "" }: ChangeProps) => {
  const up = value >= 0;
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium ${up ? "text-green-500" : "text-red-500"} ${className}`}>
      <ArrowRight size={12} color="currentColor" className={up ? "-rotate-45" : "rotate-45"} />
      {up ? "+" : ""}
      {value}%
    </span>
  );
};
