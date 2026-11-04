import type { Icon } from "iconsax-react";

type IconBadgeProps = { icon: Icon; light?: boolean };

export const IconBadge = ({ icon: I, light = false }: IconBadgeProps) => (
  <span
    className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
      light ? "bg-white/20 text-white" : "bg-blue-600 text-white"
    }`}
  >
    <I size={18} variant="Bold" color="currentColor" />
  </span>
);
