import { cx } from "../cx";

export interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className }: DividerProps) {
  if (!label) {
    return <hr className={cx("border-t-2 border-line-soft", className)} />;
  }
  return (
    <div className={cx("flex items-center gap-3", className)}>
      <hr className="flex-1 border-t-2 border-line-soft" />
      <span className="text-xs font-bold uppercase tracking-wide text-ink-faint">
        {label}
      </span>
      <hr className="flex-1 border-t-2 border-line-soft" />
    </div>
  );
}
