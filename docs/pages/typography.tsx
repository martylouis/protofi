import { Badge, Divider, Table, TBody, TD, TextPlaceholder, TH, THead, TR } from "../../src";
import { Example, PageHeader, SectionTitle } from "../ui";

const scale = [
  { cls: "text-2xl font-bold uppercase tracking-wide", sample: "Page title", use: "One per page. The docs page headers use this." },
  { cls: "text-base font-bold uppercase tracking-wide", sample: "Section title", use: "Major sections within a page." },
  { cls: "text-sm font-bold uppercase tracking-wide", sample: "Card / dialog title", use: "Card headers, dialog and drawer titles." },
  { cls: "text-xs font-bold uppercase tracking-wide", sample: "Label", use: "Field labels, table headers, badges, nav groups." },
  { cls: "text-sm", sample: "Body text runs at small sizes because prototypes are dense.", use: "Default body, controls, table cells." },
  { cls: "text-xs text-ink-faint", sample: "Hint or caption text", use: "Field descriptions, timestamps, footnotes." },
  { cls: "font-mono text-sm", sample: "#1042 · $120.00", use: "IDs, numbers, code, anything tabular." },
];

export function TypographyDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Typography">
        There is no Heading component: lo-fi type is a small set of utility
        recipes, not a component API. Two system font stacks, one heading
        voice (bold, uppercase, letterspaced), and a deliberately short scale.
        If a sketch needs more levels than this, flatten the layout instead.
      </PageHeader>

      <div className="space-y-3">
        <SectionTitle>The scale</SectionTitle>
        <Table>
          <THead>
            <TR>
              <TH>Sample</TH>
              <TH>Classes</TH>
              <TH>Use for</TH>
            </TR>
          </THead>
          <TBody>
            {scale.map((s) => (
              <TR key={s.cls}>
                <TD className="whitespace-nowrap text-ink">
                  <span className={s.cls}>{s.sample}</span>
                </TD>
                <TD className="font-mono text-xs">{s.cls}</TD>
                <TD>{s.use}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </div>

      <div className="space-y-3">
        <SectionTitle>The heading voice</SectionTitle>
        <p className="max-w-prose text-sm text-ink-soft">
          Every heading level uses the same voice and only changes size:
          font-bold uppercase tracking-wide. Uppercase reads as a wireframe
          annotation rather than finished editorial type, which keeps feedback
          off the typography. Hierarchy comes from size, spacing, and borders,
          never from a second typeface or color.
        </p>
        <Example
          code={`<h1 className="text-2xl font-bold uppercase tracking-wide">Orders</h1>
<h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-line-soft pb-1">
  This week
</h2>
<h3 className="text-xs font-bold uppercase tracking-wide text-ink-soft">
  Shipped
</h3>`}
        >
          <div className="space-y-4">
            <h1 className="text-2xl font-bold uppercase tracking-wide">Orders</h1>
            <h2 className="border-b-2 border-line-soft pb-1 text-base font-bold uppercase tracking-wide">
              This week
            </h2>
            <h3 className="text-xs font-bold uppercase tracking-wide text-ink-soft">
              Shipped
            </h3>
          </div>
        </Example>
      </div>

      <div className="space-y-3">
        <SectionTitle>Text grays</SectionTitle>
        <Example
          code={`<p className="text-ink">Primary: the thing being said.</p>
<p className="text-ink-soft">Secondary: supporting copy, most body text.</p>
<p className="text-ink-faint">Faint: hints, placeholders, metadata.</p>`}
        >
          <div className="space-y-1 text-sm">
            <p className="text-ink">Primary: the thing being said.</p>
            <p className="text-ink-soft">Secondary: supporting copy, most body text.</p>
            <p className="text-ink-faint">Faint: hints, placeholders, metadata.</p>
          </div>
        </Example>
        <p className="max-w-prose text-sm text-ink-soft">
          Three grays is the whole emphasis system. No italics, no color, no
          font-weight steps besides bold.
        </p>
      </div>

      <div className="space-y-3">
        <SectionTitle>Mono</SectionTitle>
        <Example
          code={`<span className="font-mono text-sm">#1042</span>
<span className="font-mono text-xs">2026-07-10 14:32</span>`}
        >
          <div className="flex flex-wrap items-baseline gap-6">
            <span className="font-mono text-sm">#1042</span>
            <span className="font-mono text-sm">$120.00</span>
            <span className="font-mono text-xs text-ink-faint">2026-07-10 14:32</span>
          </div>
        </Example>
        <p className="max-w-prose text-sm text-ink-soft">
          Anything a user would scan vertically (IDs, money, dates) goes mono
          so columns align without effort.
        </p>
      </div>

      <div className="space-y-3">
        <SectionTitle>When there is no copy yet</SectionTitle>
        <p className="max-w-prose text-sm text-ink-soft">
          Real-looking placeholder sentences get copyedited in review. If the
          words are not decided, greek them with TextPlaceholder; if a heading
          is undecided, write its intent in brackets.
        </p>
        <Example
          code={`<h2 className="text-base font-bold uppercase tracking-wide">
  [Value prop headline]
</h2>
<TextPlaceholder lines={3} />`}
        >
          <div className="max-w-sm space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wide">
              [Value prop headline]
            </h2>
            <TextPlaceholder lines={3} />
          </div>
        </Example>
      </div>

      <div className="space-y-3">
        <SectionTitle>Putting it together</SectionTitle>
        <Example>
          <article className="max-w-md space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold uppercase tracking-wide">
                Invoice #1042
              </h2>
              <Badge>Overdue</Badge>
            </div>
            <p className="text-sm text-ink-soft">
              Issued to Ada Lovelace for engineering services, net 30.
            </p>
            <Divider />
            <dl className="space-y-1 text-sm">
              <div className="flex justify-between">
                <dt className="text-xs font-bold uppercase tracking-wide">Total</dt>
                <dd className="font-mono">$120.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-xs font-bold uppercase tracking-wide">Due</dt>
                <dd className="font-mono text-ink-faint">2026-06-10</dd>
              </div>
            </dl>
          </article>
        </Example>
      </div>
    </div>
  );
}
