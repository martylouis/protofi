import { Separator } from "@base-ui/react/separator";
import { cx } from "../cx";

export interface DividerProps {
  label?: string;
  className?: string;
}

/** Horizontal rule (Base UI Separator, role="separator") with optional label. */
export function Divider({ label, className }: DividerProps) {
  if (!label) {
    return (
      <Separator className={cx("border-t-2 border-line-soft", className)} />
    );
  }
  return (
    <div className={cx("flex items-center gap-3", className)}>
      <Separator className="flex-1 border-t-2 border-line-soft" />
      <span className="text-xs font-bold uppercase tracking-wide text-ink-faint">
        {label}
      </span>
      <Separator className="flex-1 border-t-2 border-line-soft" />
    </div>
  );
}
