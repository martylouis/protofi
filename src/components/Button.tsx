import type { ButtonHTMLAttributes } from "react";
import { cx } from "../cx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  solid:
    "bg-ink text-paper border-2 border-ink hover:bg-ink-soft hover:border-ink-soft",
  outline: "bg-paper text-ink border-2 border-ink hover:bg-fill",
  ghost: "bg-transparent text-ink border-2 border-transparent hover:bg-fill",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-4 py-1.5 text-sm",
  lg: "px-6 py-2.5 text-base",
};

export function Button({
  variant = "outline",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-lofi font-medium",
        "cursor-pointer select-none disabled:cursor-not-allowed disabled:opacity-40",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
