import { useCallback, useEffect, useState } from "react";

const PARAM = "variant";

function readVariant(keys: string[]): string {
  const fallback = keys[0] ?? "";
  if (typeof window === "undefined") return fallback;
  const value = new URLSearchParams(window.location.search).get(PARAM);
  return value && keys.includes(value) ? value : fallback;
}

export interface UseVariantResult {
  /** Current variant key. */
  variant: string;
  /** Jump to a specific variant. */
  setVariant: (key: string) => void;
  /** Cycle forward (wraps). */
  next: () => void;
  /** Cycle backward (wraps). */
  prev: () => void;
}

/**
 * Syncs the active variant with the `?variant=` URL search param so a
 * variant is shareable and reload-stable. Framework-agnostic: uses the
 * History API directly, so it works under Bun.serve, Next, or anything else.
 */
export function useVariant(keys: string[]): UseVariantResult {
  const [variant, setState] = useState(() => readVariant(keys));

  const setVariant = useCallback(
    (key: string) => {
      if (!keys.includes(key)) return;
      const url = new URL(window.location.href);
      url.searchParams.set(PARAM, key);
      window.history.replaceState(null, "", url);
      setState(key);
    },
    [keys],
  );

  const step = useCallback(
    (delta: number) => {
      const i = keys.indexOf(readVariant(keys));
      setVariant(keys[(i + delta + keys.length) % keys.length]!);
    },
    [keys, setVariant],
  );

  const next = useCallback(() => step(1), [step]);
  const prev = useCallback(() => step(-1), [step]);

  // Back/forward navigation re-reads the param.
  useEffect(() => {
    const onPop = () => setState(readVariant(keys));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [keys]);

  return { variant, setVariant, next, prev };
}
