# Protofi — Ubiquitous Language

Glossary of canonical terms for this project. Definitions only; no implementation details.

## Terms

### Component
A reusable primitive exported from the library's public index. Imported by prototypes, never copied. Examples: Button, Card, Dialog.

### Block
A one-off composition of Components documented as a copy-paste code snippet. Never exported from the library index; prototypers copy the code and mutate it freely. A Block is expected to be hacked up per prototype. First example: the Dashboard Shell.

### Dashboard Shell
A Block giving a prototype its page chrome: sidebar navigation on the left, a breadcrumbs area at the top, and a main content area.
