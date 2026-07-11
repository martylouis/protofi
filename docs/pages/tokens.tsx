import { Badge, Table, TBody, TD, TH, THead, TR } from "../../src";
import { CodeBlock, Example, PageHeader, SectionTitle } from "../ui";

interface ColorToken {
  name: string;
  value: string;
  usage: string;
  purpose: string;
}

const colors: ColorToken[] = [
  { name: "ink", value: "#1a1a1a", usage: "text-ink bg-ink border-ink", purpose: "Primary text, solid fills, hard borders." },
  { name: "ink-soft", value: "#555555", usage: "text-ink-soft", purpose: "Secondary text, body copy." },
  { name: "ink-faint", value: "#999999", usage: "text-ink-faint", purpose: "Hints, placeholders, inactive states." },
  { name: "line", value: "#1a1a1a", usage: "border-line", purpose: "Structural borders (same as ink)." },
  { name: "line-soft", value: "#bbbbbb", usage: "border-line-soft", purpose: "Secondary rules: dividers, table rows, action bars." },
  { name: "paper", value: "#ffffff", usage: "bg-paper text-paper", purpose: "Page and surface background; text on ink." },
  { name: "fill", value: "#f2f2f2", usage: "bg-fill", purpose: "Subtle fills: hovers, code blocks, table heads." },
  { name: "fill-strong", value: "#e0e0e0", usage: "bg-fill-strong", purpose: "Stronger fills: greeked text bars, checked switch track." },
  { name: "hatch", value: "#d8d8d8", usage: "bg-hatch", purpose: "Stripe color inside the hatch pattern." },
];

function Swatch({ value }: { value: string }) {
  return (
    <span
      className="inline-block size-6 shrink-0 rounded-lofi border-2 border-ink align-middle"
      style={{ background: value }}
    />
  );
}

export function TokensDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Design tokens">
        Every token lives in the @theme block of src/styles.css and compiles to
        a CSS variable plus Tailwind utilities. Grayscale only: color is a
        decision a prototype must not make. Nine grays, two fonts, one radius.
      </PageHeader>

      <div className="space-y-3">
        <SectionTitle>Color</SectionTitle>
        <Table>
          <THead>
            <TR>
              <TH></TH>
              <TH>Token</TH>
              <TH>Value</TH>
              <TH>Tailwind</TH>
              <TH>Use for</TH>
            </TR>
          </THead>
          <TBody>
            {colors.map((c) => (
              <TR key={c.name}>
                <TD className="w-10">
                  <Swatch value={c.value} />
                </TD>
                <TD className="font-mono font-bold text-ink">--color-{c.name}</TD>
                <TD className="font-mono text-xs">{c.value}</TD>
                <TD className="font-mono text-xs">{c.usage}</TD>
                <TD>{c.purpose}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
        <p className="max-w-prose text-sm text-ink-soft">
          The scale is intentionally cramped: three text grays, two fill grays,
          two border grays. If a sketch needs more distinctions than that, the
          hierarchy problem is in the layout, not the palette.
        </p>
      </div>

      <div className="space-y-3">
        <SectionTitle>Typography</SectionTitle>
        <Example
          code={`--font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-mono: "SF Mono", Menlo, Consolas, monospace;`}
        >
          <div className="space-y-4">
            <div>
              <Badge>font-sans</Badge>
              <p className="mt-1 text-lg">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <Badge>font-mono</Badge>
              <p className="mt-1 font-mono text-lg">
                #1042 · $120.00 · 2026-07-10
              </p>
            </div>
            <div>
              <Badge>labels</Badge>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide">
                Uppercase bold tracking-wide, the lo-fi heading voice
              </p>
            </div>
          </div>
        </Example>
        <p className="max-w-prose text-sm text-ink-soft">
          System stacks only; a webfont would be a design decision. Headings
          and labels are small, bold, uppercase, letterspaced. Numbers and IDs
          go mono.
        </p>
      </div>

      <div className="space-y-3">
        <SectionTitle>Radius & borders</SectionTitle>
        <Example
          code={`--radius-lofi: 2px;   /* rounded-lofi */

/* borders: 2px solid ink for structure, line-soft for secondary rules */
<div className="rounded-lofi border-2 border-ink" />
<hr className="border-t-2 border-line-soft" />`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex size-20 items-center justify-center rounded-lofi border-2 border-ink text-xs">
              2px / ink
            </div>
            <div className="flex size-20 items-center justify-center rounded-lofi border-2 border-line-soft text-xs">
              2px / soft
            </div>
            <div className="flex size-20 items-center justify-center rounded-full border-2 border-ink text-xs">
              full
            </div>
          </div>
        </Example>
        <p className="max-w-prose text-sm text-ink-soft">
          One radius: 2px, just enough to read as deliberate. No shadows, no
          gradients. The only circles are avatars, radios, and the switcher
          pill.
        </p>
      </div>

      <div className="space-y-3">
        <SectionTitle>Patterns</SectionTitle>
        <Example
          code={`/* bg-hatch: diagonal 45° stripes for content placeholders */
<div className="bg-hatch rounded-lofi border-2 border-ink h-24" />`}
        >
          <div className="h-24 max-w-sm rounded-lofi border-2 border-ink bg-hatch" />
        </Example>
        <p className="max-w-prose text-sm text-ink-soft">
          The hatch is a custom utility (repeating-linear-gradient) marking
          "content goes here, not designed yet": image placeholders and empty
          avatars.
        </p>
      </div>

      <div className="space-y-3">
        <SectionTitle>Overriding</SectionTitle>
        <p className="max-w-prose text-sm text-ink-soft">
          Redefine any token after importing the stylesheet; utilities pick up
          the new values. Useful for a dark lo-fi theme or nudging contrast.
        </p>
        <CodeBlock
          code={`@import "./src/styles.css";

@theme {
  /* invert to dark paper */
  --color-paper: #111111;
  --color-ink: #f0f0f0;
  --color-fill: #1e1e1e;
}`}
        />
      </div>
    </div>
  );
}
