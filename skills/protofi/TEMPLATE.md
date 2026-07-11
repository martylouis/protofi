# Template

Every Prototype starts from this skeleton. Copy it verbatim, then build inside `<body>`.

- Tailwind v4 runs in the browser via CDN; the `@theme` block below defines every design token. Network access is required to view the file.
- Lucide icons load from CDN: write `<i data-lucide="users" class="size-4"></i>`, and the `lucide.createIcons()` call at the end of `<body>` swaps them for inline SVG (classes carry over).
- Keep the closing `<script>lucide.createIcons();</script>` last in `<body>`, after any component behavior scripts.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>PROTOTYPE NAME — protofi</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
      /*
       * protofi — lo-fi design tokens.
       * Grayscale only. Hard borders. No shadows, no gradients, no rounded
       * corners beyond 2px. The point is to look unfinished so nobody argues
       * about color.
       */
      @theme {
        --font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif;
        --font-mono: "SF Mono", Menlo, Consolas, monospace;

        --color-ink: #1a1a1a;
        --color-ink-soft: #555555;
        --color-ink-faint: #999999;
        --color-line: #1a1a1a;
        --color-line-soft: #bbbbbb;
        --color-paper: #ffffff;
        --color-fill: #f2f2f2;
        --color-fill-strong: #e0e0e0;
        --color-hatch: #d8d8d8;

        --radius-lofi: 2px;
      }

      @layer base {
        body {
          background: var(--color-paper);
          color: var(--color-ink);
          font-family: var(--font-sans);
        }
      }

      /* Diagonal hatch pattern for placeholder fills */
      @utility bg-hatch {
        background-color: var(--color-fill);
        background-image: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 6px,
          var(--color-hatch) 6px,
          var(--color-hatch) 7px
        );
      }
    </style>
    <script src="https://unpkg.com/lucide@latest"></script>
  </head>
  <body>
    <!-- prototype content -->

    <script>
      lucide.createIcons();
    </script>
  </body>
</html>
```

## Token vocabulary

Use only these color utilities (plus opacity modifiers like `bg-ink/40`, `text-paper/70`):

| Utility stem | Token | Role |
| --- | --- | --- |
| `ink` | `#1a1a1a` | Primary text, solid fills, hard borders |
| `ink-soft` | `#555555` | Secondary text |
| `ink-faint` | `#999999` | Tertiary text, placeholders, separators |
| `line-soft` | `#bbbbbb` | Soft borders (row dividers, footers) |
| `paper` | `#ffffff` | Background, text on ink |
| `fill` | `#f2f2f2` | Subtle fills (table heads, hover, disabled) |
| `fill-strong` | `#e0e0e0` | Stronger fills (skeleton bars, checked switch track) |
| `bg-hatch` | pattern | Placeholder fills (image boxes, empty avatars) |

`rounded-lofi` (2px) is the only corner radius. No other colors, no shadows, no gradients anywhere in the design (the States switcher bar is tooling and is exempt).
