import type { ReactNode } from "react";
import { cx } from "../cx";

export interface FieldProps {
  label: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}

/** Label + control + optional hint. */
export function Field({ label, hint, children, className }: FieldProps) {
  return (
    <label className={cx("block", className)}>
      <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-ink">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1 block text-xs text-ink-faint">{hint}</span>}
    </label>
  );
}
