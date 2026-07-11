import type { HTMLAttributes } from "react";
import { cx } from "../cx";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline";
}

export function Badge({ variant = "outline", className, ...props }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-lofi border px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wide",
        variant === "solid"
          ? "border-ink bg-ink text-paper"
          : "border-ink bg-paper text-ink",
        className,
      )}
      {...props}
    />
  );
}
