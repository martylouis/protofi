# protofi

Lo-fi design system for single-page HTML prototypes. Grayscale, hard borders, hatched placeholders — deliberately unfinished-looking so nobody argues about color.

Two halves:

1. **The skill** (`skills/protofi/`) — the distributable. A portable, zero-dependency agent skill that builds self-contained single-page HTML prototypes anywhere: Tailwind + Lucide via CDN, vanilla JS on native elements (`<dialog>`, popover, checked inputs). Install into any project:

   ```bash
   npx skills add martylouis/protofi
   ```

   Then ask your agent for a prototype ("mock up a settings page"). Output lands in `docs/prototypes/<name>.html`, opens directly in a browser, and iterates in place. Supports States (empty/loading/error) and Variants (competing layouts) via a floating switcher.

2. **The workbench** (this repo) — where the design system is developed. A React 19 + Tailwind v4 + [Base UI](https://base-ui.com) component library with a live docs site. Components are designed and iterated here with real rendering, then distilled into the skill's markdown references. Nothing here is a dependency of any prototype.

## How the halves stay in sync

Source of truth is the React library. After changing Components, run the repo-local `protofi-sync` skill: it re-derives the skill's reference files (`TEMPLATE.md`, `COMPONENTS.md`, `BLOCKS.md`, `STATES.md`) from `src/`, mapping Base UI behavior to native-element patterns. Visual parity is exact (identical class strings); behavioral parity is explicitly out of scope — see `docs/adr/0001`.

Vocabulary (Component, Block, Prototype, State, Variant) is defined in `CONTEXT.md`.

## Run the docs

```bash
bun install
bun run dev
```

Open http://localhost:3000. Sidebar-layout doc site (`docs/`), built with the library itself:

- Guide: Introduction, Principles
- Components: one page per primitive, live examples + code + props
- Blocks: copy-paste compositions
- Prototypes: `Variants` demo with the floating switcher

## Library

Import from `src/index.ts`:

- **Lo-fi primitives** (no behavior to outsource): `Button`, `Card` (+ Header/Title/Body/Footer), `Badge`, `ImagePlaceholder`, `TextPlaceholder`, `Table` (+ THead/TBody/TR/TH/TD), `Breadcrumbs.*`, `Textarea`
- **Base UI-backed, lo-fi styled**: `Input`, `Field.*`, `Checkbox`, `Radio` + `RadioGroup`, `Switch`, `Select.*`, `Menu.*`, `Tabs.*`, `Dialog.*`, `Drawer.*`, `Divider`, `Avatar`
- **Prototype infrastructure**: `useVariant`, `PrototypeSwitcher`, `Variants`

Base UI supplies behavior (ARIA, focus traps, keyboard nav, positioning); protofi supplies the skin via `className`. Tokens live in `src/styles.css` (`@theme` block): ink/paper grayscale, 2px radius, hatch pattern.

### Blocks (copy-paste, not exported)

One-off compositions in `docs/blocks/`; the docs page renders the real file and inlines its source, so preview and snippet cannot drift.

- Dashboard Shell — app frame: inverted sidebar (grouped nav, user menu), top bar (breadcrumbs), scrollable content

## Repo layout

```
skills/protofi/     the portable skill (the product)
src/                component library (source of truth)
docs/               docs site (Bun.serve + HTML imports)
docs/prototypes/    sample prototypes built with the skill
docs/adr/           architecture decisions
.agents/skills/     installed dev skills + protofi-sync (repo-local, hidden from npx skills)
CONTEXT.md          ubiquitous language
```

## Scripts

- `bun run dev` — docs site with HMR
- `bun run typecheck` — `tsc --noEmit`
