# Protofi — Prototype Fidelity 2 Design System

TypeScript React component library for low-fidelity prototypes, built on the `.agents/skills/prototype` skill. Grayscale, hard borders, hatched placeholders. Bun + React 19 + Tailwind v4.

## Run the docs

```bash
bun install
bun run dev
```

Open http://localhost:3000. Sidebar-layout doc site (`docs/`), built with the library itself:

- Guide: Introduction, Principles (UX/UI rules distilled from the skill)
- Components: one page per primitive, live examples + code + props
- Prototypes: `Variants` (live demo with the floating switcher), `PrototypeSwitcher`, `useVariant`

## Library

Import from `src/index.ts`:

### Lo-fi primitives

`Button`, `Input`, `Textarea`, `Select`, `Field`, `Checkbox`, `Radio`, `Switch`, `Card` (+ `CardHeader`/`CardTitle`/`CardBody`/`CardFooter`), `Badge`, `Avatar`, `ImagePlaceholder`, `TextPlaceholder`, `Table` (+ `THead`/`TBody`/`TR`/`TH`/`TD`), `Tabs`, `Divider`, `Modal`

Tokens live in `src/styles.css` (`@theme` block): ink/paper grayscale, 2px radius, hatch pattern.

### Prototype infrastructure

Implements the UI-prototype workflow from the skill:

- `useVariant(keys)` — syncs active variant with `?variant=`, framework-agnostic (History API)
- `PrototypeSwitcher` — floating bottom bar: arrows, label, keyboard cycling, skips inputs, hidden in production builds
- `Variants` — one-stop wrapper:

```tsx
<Variants
  variants={{
    A: { name: "Card grid", render: () => <VariantA {...data} /> },
    B: { name: "Sidebar", render: () => <VariantB {...data} /> },
  }}
/>
```

## Scripts

- `bun run dev` — docs site with HMR
- `bun run typecheck` — `tsc --noEmit`
