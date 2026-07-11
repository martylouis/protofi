# Protofi — Ubiquitous Language

Glossary of canonical terms for this project. Definitions only; no implementation details.

## Terms

### Component
A reusable primitive exported from the library's public index. Imported by prototypes, never copied. Examples: Button, Card, Dialog.

### Block
A one-off composition of Components documented as a copy-paste code snippet. Never exported from the library index; prototypers copy the code and mutate it freely. A Block is expected to be hacked up per prototype. First example: the Dashboard Shell.

### Dashboard Shell
A Block giving a prototype its page chrome: sidebar navigation on the left, a breadcrumbs area at the top, and a main content area.

### Prototype
A self-contained single-page HTML document that renders a design for iteration and sharing. Built anywhere from Component References; depends on nothing in this repo.

### Component Reference
A markdown recipe inside the protofi skill describing how to recreate one Component (or Block) in plain HTML: markup, classes, tokens, and any minimal behavior. Derived from this repo's Components, which remain the source of truth.

### Variant
One of several structurally different design alternatives for the same Prototype, compared to pick a direction.

### State
One design shown under a different data condition (empty, loading, error, populated). Switchable within a Prototype; not a Variant.
