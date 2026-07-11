import type { InputHTMLAttributes } from "react";
import { cx } from "../cx";

interface ChoiceProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/** Checkbox with a lo-fi square box. */
export function Checkbox({ label, className, ...props }: ChoiceProps) {
  return (
    <label
      className={cx(
        "inline-flex cursor-pointer select-none items-center gap-2 text-sm text-ink",
        className,
      )}
    >
      <input
        type="checkbox"
        className="size-4 cursor-pointer appearance-none rounded-none border-2 border-ink bg-paper checked:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        {...props}
      />
      {label}
    </label>
  );
}

/** Radio with a lo-fi circle. */
export function Radio({ label, className, ...props }: ChoiceProps) {
  return (
    <label
      className={cx(
        "inline-flex cursor-pointer select-none items-center gap-2 text-sm text-ink",
        className,
      )}
    >
      <input
        type="radio"
        className="size-4 cursor-pointer appearance-none rounded-full border-2 border-ink bg-paper checked:border-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        {...props}
      />
      {label}
    </label>
  );
}

/** Toggle switch drawn as a sliding square. */
export function Switch({ label, className, ...props }: ChoiceProps) {
  return (
    <label
      className={cx(
        "inline-flex cursor-pointer select-none items-center gap-2 text-sm text-ink",
        className,
      )}
    >
      <span className="relative inline-block">
        <input type="checkbox" className="peer sr-only" {...props} />
        <span className="block h-5 w-9 rounded-lofi border-2 border-ink bg-paper peer-checked:bg-fill-strong peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink" />
        <span className="absolute left-0.5 top-0.5 size-3 bg-ink transition-transform peer-checked:translate-x-4" />
      </span>
      {label}
    </label>
  );
}
