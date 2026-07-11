import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import type { HTMLAttributes } from "react";
import { cx } from "../cx";

export interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

/** Wireframe image box: hatched fill with a corner-to-corner X. */
export function ImagePlaceholder({
  label,
  className,
  ...props
}: ImagePlaceholderProps) {
  return (
    <div
      className={cx(
        "relative flex aspect-video items-center justify-center overflow-hidden rounded-lofi border-2 border-ink bg-hatch",
        className,
      )}
      {...props}
    >
      <svg
        className="absolute inset-0 size-full text-line-soft"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      {label && (
        <span className="relative bg-paper px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-ink-soft">
          {label}
        </span>
      )}
    </div>
  );
}

export interface TextPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of skeleton lines. */
  lines?: number;
}

/** Greeked text: gray bars standing in for copy. Last line is short. */
export function TextPlaceholder({
  lines = 3,
  className,
  ...props
}: TextPlaceholderProps) {
  return (
    <div className={cx("space-y-2", className)} aria-hidden {...props}>
      {Array.from({ length: lines }, (_, i) => (
        <div
          key={i}
          className="h-3 rounded-lofi bg-fill-strong"
          style={{ width: i === lines - 1 ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}

export interface AvatarProps
  extends Omit<BaseAvatar.Root.Props, "className"> {
  /** Initials fallback; shown when no image or while it fails/loads. */
  initials?: string;
  /** Optional real image; initials (or hatch) show if it fails to load. */
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const avatarSizes = {
  sm: "size-7 text-[10px]",
  md: "size-10 text-xs",
  lg: "size-14 text-base",
};

/** Base UI Avatar with lo-fi fallbacks: initials, or hatch when empty. */
export function Avatar({
  initials,
  src,
  size = "md",
  className,
  ...props
}: AvatarProps) {
  return (
    <BaseAvatar.Root
      className={cx(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-ink font-bold uppercase",
        initials ? "bg-paper text-ink" : "bg-hatch",
        avatarSizes[size],
        className,
      )}
      {...props}
    >
      {src && (
        <BaseAvatar.Image src={src} className="size-full object-cover" />
      )}
      {initials && <BaseAvatar.Fallback>{initials}</BaseAvatar.Fallback>}
    </BaseAvatar.Root>
  );
}
