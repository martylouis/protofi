# CLAUDE.md

## What this repo is

- Product: the portable `protofi` skill in `skills/protofi/`: builds zero-dependency single-page HTML prototypes (Tailwind + Lucide via CDN, vanilla JS on native elements)
- Workbench: React 19 + Tailwind v4 + Base UI library in `src/`, docs site in `docs/`: where components are designed; never published, never a prototype dependency
- Name is **protofi**, lowercase; the dir name "protofi-2" is an accident, never use it in names or copy

## Non-obvious rules

- `src/` is the source of truth; `skills/protofi/*.md` are derived. After changing components/styles/blocks, run `/protofi-sync` (or follow its process): never let the two drift silently
- Class parity is the contract: skill recipes must carry component class strings exactly; behavioral parity with Base UI is explicitly out of scope (docs/adr/0001)
- Lo-fi constraints everywhere: grayscale tokens from `src/styles.css` only, no shadows/gradients, radius capped at `rounded-lofi` (2px), realistic copy never lorem ipsum
- `CONTEXT.md` is a glossary only (Component, Block, Prototype, State, Variant): use these terms precisely; no implementation details in it
- Repo-local skills: live in `.agents/skills/`, symlinked from `.claude/skills/`, with `metadata.internal: true` in frontmatter so `npx skills add martylouis/protofi` exposes only `protofi`
- Prototypes generated in this repo go to `docs/prototypes/<name>.html`; iterate in place, don't regenerate
- Blocks (`docs/blocks/`) are copy-paste compositions, never exported from `src/index.ts`; docs pages inline their real source via `with { type: "text" }` imports so preview and snippet can't drift

## Bun (not Node)

- `bun install`, `bun run dev` (docs + HMR), `bun run typecheck`, `bun test`, `bunx <pkg>`
- Server is `Bun.serve()` with HTML imports (`docs/index.html`): no vite/express; Bun bundles .tsx and CSS from `<script>`/`<link>` tags
- Prefer `Bun.file` over `node:fs`; Bun auto-loads `.env`
- API docs: `node_modules/bun-types/docs/**.mdx`
