---
name: protofi-sync
description: Sync the portable protofi skill's references from this repo's source Components, styles, and Blocks.
disable-model-invocation: true
metadata:
  internal: true
---

# protofi-sync

This repo is the workbench; `skills/protofi/` is the portable distillation. This skill re-derives the skill's reference files from the source of truth after Components change. It only ever runs in this repo.

| Source of truth | Derived reference |
| --- | --- |
| `src/styles.css` | `skills/protofi/TEMPLATE.md` (token block + token vocabulary table) |
| `src/components/*.tsx` (via `src/index.ts` exports) | `skills/protofi/COMPONENTS.md` |
| `docs/blocks/*.tsx` | `skills/protofi/BLOCKS.md` |
| `src/prototype/PrototypeSwitcher.tsx` | `skills/protofi/STATES.md` (bar styling only; the vanilla script is skill-native) |

## Process

### 1. Find what changed

Diff each source file against the reference that derives from it. `git log` on `src/` since the last commit touching `skills/protofi/` gives the candidate list; reading both sides confirms. Only rewrite sections whose source actually changed — but check **every** exported Component for a missing Reference, and every Reference for a deleted source (new Components get sections; dead ones get removed).

### 2. Translate each changed Component

Per Component, produce a vanilla recipe from the React source:

- **Classes copy over verbatim.** The class strings in the `.tsx` are the design; the Reference must carry them exactly, merged in rendered order (base + default variant + default size). Variant/size class recipes go in tables.
- **Behavior maps to native elements**, per this table:

| Base UI / React construct | Vanilla recreation |
| --- | --- |
| `Dialog.*` | `<dialog>` + `showModal()`, `backdrop:` classes, `p-0 m-auto` |
| `Drawer.*` | `<dialog>` with edge-pinning margins and `open:flex` (never bare `flex`) |
| `Menu.*` | `[popover]` + `popovertarget` + the toggle-event positioning script |
| `Select.*` | native `<select>` + `appearance-none` + drawn `▾` |
| `Tabs.*` | `[data-tabs]` buttons/panels + delegation script, styles on `aria-selected:` |
| `Checkbox/Radio/Switch` | `peer sr-only` input + drawn sibling `<span>` (`after:` pseudos; inputs can't carry pseudo-elements) |
| `data-checked:` | `checked:` / `peer-checked:` |
| `data-highlighted:` | `hover:` |
| `data-active:` | `aria-selected:` |
| `data-invalid:` | `aria-invalid:` (recipe notes to set `aria-invalid="true"`) |
| `data-disabled:` on label wrappers | `has-[:disabled]:` |
| `style={{width}}` and other inline styles | nearest Tailwind utility (e.g. `w-3/5`) |
| `lucide-react` icons | `<i data-lucide="kebab-name">` + `lucide.createIcons()` |

- **Accepted drift** (do not recreate; note it in the Reference where a reader would expect the feature): arrow-key navigation and typeahead in menus, custom select popups, drawer swipe/slide animation, focus-trap beyond what `<dialog>` provides.

### 3. Verify parity

For each rewritten Reference, walk the source component's class list token by token against the recipe and confirm every token is present or covered by a documented drift note. Tokens referenced by classes (`bg-hatch`, `rounded-lofi`, color names) must exist in TEMPLATE.md's `@theme` block — if `src/styles.css` gained a token, TEMPLATE.md gains it in the same pass.

### 4. Validate

Build or update one throwaway Prototype in the scratchpad using only the rewritten recipes, exercising each changed Component. Broken markup (unclosed tags, a `peer` selector that can't reach its input, a popover with no trigger) shows up here, not in a user's project.

## Reference format

Each section of COMPONENTS.md: `## Name`, one line of purpose/usage, a copy-paste HTML snippet with full class strings, then variant/size tables and drift notes. Snippets carry realistic example copy, never lorem ipsum. Keep the conventions block at the top of COMPONENTS.md true — it is the single source for the behavior-mapping assumptions readers rely on.

Done when: every export in `src/index.ts` (Components) and every file in `docs/blocks/` has a current Reference, class parity is verified for each, and the validation Prototype renders every changed Component.
