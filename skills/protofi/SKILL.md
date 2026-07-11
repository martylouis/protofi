---
name: protofi
description: Build a lo-fi single-page HTML prototype with the protofi design system. Use when the user wants a prototype, mockup, or wireframe of a page, screen, or flow, or asks what a UI could look like.
---

# protofi

Build **Prototypes**: self-contained single-page HTML documents in the protofi lo-fi design system. One file, no build step, no dependencies — Tailwind and Lucide load from CDN, behavior is inline vanilla JS on native elements. The file opens directly in a browser (network required for the CDNs).

## Process

### 1. Locate the file

Default path: `docs/prototypes/<name>.html`, kebab-case, named after the thing being prototyped (`settings-page.html`, `onboarding-flow.html`). The user's stated location wins over the default.

**If the file already exists, this is an iteration: edit it in place.** Never regenerate from scratch what can be edited — the user's previous feedback lives in that file.

### 2. Load the references

- [TEMPLATE.md](TEMPLATE.md) — the skeleton every new Prototype starts from, plus the token vocabulary. Always.
- [COMPONENTS.md](COMPONENTS.md) — markup recipes for every Component. Always.
- [BLOCKS.md](BLOCKS.md) — page chrome (Dashboard Shell). When the Prototype is an app screen that needs navigation around it.
- [STATES.md](STATES.md) — the floating switcher. When showing States (empty/loading/error) or Variants (competing designs).

### 3. Build

Compose the page from Component recipes inside the Template skeleton. Rules:

- **Copy recipe classes exactly.** Layout (flex, grid, spacing, widths) is yours; component classes are not. A Button that doesn't match the recipe is a bug.
- **Icons never stand in for controls.** Lucide icons are decorative glyphs beside text. Anything interactive is built from its Component recipe: a `toggle-left`/`toggle-right` icon is not a Switch, `square-check` is not a Checkbox, `circle-dot` is not a Radio, `chevron-down` is not a Select.
- **Grayscale only.** Every color comes from the token vocabulary in TEMPLATE.md. No other colors, no shadows, no gradients, no radius beyond `rounded-lofi` — the design must look unfinished so nobody argues about color. (The States switcher bar is tooling and is exempt.)
- **Realistic copy, placeholder imagery.** Write plausible names, labels, and data ("Grace Hopper", "Invoice #2041 — overdue"), never lorem ipsum. Where an image or chart would go, use ImagePlaceholder or bg-hatch, never a real image.
- **Behavior only where it sells the flow.** Dialogs open, tabs switch, menus drop — via the recipes' native-element patterns. No state management, no fetch, no persistence; a button that would save just closes the dialog.
- **Everything inline.** No external files beyond the two CDNs already in the Template.

Done when: every UI element on the page traces to a Component recipe or a plain layout wrapper, and the file contains zero colors outside the token vocabulary.

### 4. Hand over

Report the file path and how to view it (open the file in a browser). If the Prototype has States or Variants, list the keys and note the `#hash` is shareable. Invite the mix-and-match reaction — "the table from this state with the header from that one" is the useful kind of feedback.

## Iterating

Follow-up requests ("make the sidebar collapsible", "add an empty state") are edits to the existing file. Adding a first State to a stateless Prototype means wrapping the current view in `data-state="populated"` and adding siblings per STATES.md.
