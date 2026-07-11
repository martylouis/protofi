# 1. Portable skill recreates Components in vanilla HTML

Date: 2026-07-10

## Status

Accepted

## Context

The protofi library is React + Base UI + Tailwind, which makes it excellent to iterate on in this repo but impossible to carry into arbitrary projects as a zero-dependency skill. The `protofi` skill must produce Prototypes that are single self-contained HTML files, viewable with no build step or install.

Alternatives considered:

1. Ship React via CDN with in-browser JSX transform — keeps source parity, but heavy, fragile, and contradicts "one HTML file"
2. Publish the library and have prototypes depend on it — requires an install and a bundler in every target project
3. Recreate each Component as a vanilla HTML/JS recipe using native elements (`<dialog>`, `popover`, checked inputs)

## Decision

Option 3. The React Components in `src/` remain the source of truth; the skill carries hand-translated vanilla recipes (Component References). Visual parity is enforced (identical class strings); behavioral parity is explicitly not a goal — Base UI's keyboard navigation, typeahead, swipe dismissal, and full ARIA wiring are accepted drift, replaced by whatever the native elements give for free. The `protofi-sync` skill re-derives the recipes when Components change.

## Consequences

- Prototypes work anywhere a browser and network exist; nothing to install
- Two representations of every Component exist and can drift; `protofi-sync` is the required discipline after Component changes, and its per-class parity check is the guard
- Prototype interactions are lo-fi: good enough to sell a flow, not accessibility-complete; anything needing real component behavior belongs in this repo's React docs, not a Prototype
