import type { ReactNode } from "react";
import { PrototypeSwitcher } from "./PrototypeSwitcher";
import { useVariant } from "./useVariant";

export interface VariantDef {
  /** Human-readable name shown in the switcher, e.g. "Sidebar layout". */
  name?: string;
  render: () => ReactNode;
}

export interface VariantsProps {
  /** Keyed variants, e.g. { A: { name: "Cards", render: () => <VariantA/> } } */
  variants: Record<string, VariantDef>;
}

/**
 * One-stop wrapper: renders the active variant (from `?variant=`) plus the
 * floating switcher. Drop it into an existing page (sub-shape A) or a
 * throwaway route (sub-shape B):
 *
 *   <Variants variants={{
 *     A: { name: "Card grid", render: () => <VariantA {...data} /> },
 *     B: { name: "Sidebar",   render: () => <VariantB {...data} /> },
 *   }} />
 */
export function Variants({ variants }: VariantsProps) {
  const keys = Object.keys(variants);
  const { variant, setVariant } = useVariant(keys);
  const active = variants[variant] ?? variants[keys[0]!];

  const names: Record<string, string> = {};
  for (const key of keys) {
    const name = variants[key]?.name;
    if (name) names[key] = name;
  }

  return (
    <>
      {active?.render()}
      <PrototypeSwitcher
        variants={keys}
        current={variant}
        names={names}
        onChange={setVariant}
      />
    </>
  );
}
