import { useEffect } from "react";

export interface PrototypeSwitcherProps {
  /** Variant keys, in cycle order. */
  variants: string[];
  /** Current variant key. */
  current: string;
  /** Optional human-readable name per variant key, shown next to the key. */
  names?: Record<string, string>;
  onChange: (key: string) => void;
}

function isTypingTarget(el: EventTarget | null): boolean {
  if (!(el instanceof HTMLElement)) return false;
  return (
    el.tagName === "INPUT" ||
    el.tagName === "TEXTAREA" ||
    el.tagName === "SELECT" ||
    el.isContentEditable
  );
}

/**
 * Floating bottom-center bar for flipping between prototype variants.
 * Deliberately styled unlike the lo-fi system (inverted pill) so it reads
 * as tooling, not as part of the design under evaluation.
 * Renders nothing in production builds.
 */
export function PrototypeSwitcher({
  variants,
  current,
  names,
  onChange,
}: PrototypeSwitcherProps) {
  const index = Math.max(0, variants.indexOf(current));
  const step = (delta: number) =>
    onChange(variants[(index + delta + variants.length) % variants.length]!);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target)) return;
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // A stray prototype merge must not ship the bar to users.
  if (process.env.NODE_ENV === "production") return null;

  const name = names?.[current];

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full bg-ink px-2 py-1.5 font-mono text-sm text-paper shadow-lg">
      <button
        onClick={() => step(-1)}
        aria-label="Previous variant"
        className="cursor-pointer rounded-full px-2 py-0.5 hover:bg-paper/20"
      >
        ←
      </button>
      <span className="min-w-24 px-2 text-center">
        <strong>{current}</strong>
        {name && <span className="opacity-60"> — {name}</span>}
      </span>
      <button
        onClick={() => step(1)}
        aria-label="Next variant"
        className="cursor-pointer rounded-full px-2 py-0.5 hover:bg-paper/20"
      >
        →
      </button>
    </div>
  );
}
