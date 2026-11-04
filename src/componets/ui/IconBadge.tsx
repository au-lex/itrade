import type { Icon } from "iconsax-react";

export function IconBadge({ icon: IconCmp }: { icon: Icon }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"
    >
      <IconCmp size={18} color="currentColor" />
    </span>
  );
}