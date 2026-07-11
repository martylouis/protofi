import { cx } from "../cx";

export interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
  className?: string;
}

/** Underline-style tab strip. Controlled. */
export function Tabs({ tabs, active, onChange, className }: TabsProps) {
  return (
    <div
      role="tablist"
      className={cx("flex gap-1 border-b-2 border-ink", className)}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={tab === active}
          onClick={() => onChange(tab)}
          className={cx(
            "-mb-0.5 cursor-pointer border-b-4 px-3 py-1.5 text-sm font-medium",
            tab === active
              ? "border-ink text-ink"
              : "border-transparent text-ink-faint hover:text-ink",
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
