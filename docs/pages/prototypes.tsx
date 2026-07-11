import { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  ImagePlaceholder,
  PrototypeSwitcher,
  Table,
  TBody,
  TD,
  TextPlaceholder,
  TH,
  THead,
  TR,
  Variants,
} from "../../src";
import { PropsTable } from "../props";
import { CodeBlock, Example, PageHeader, SectionTitle } from "../ui";

// Mini variants for the live demo: deliberately structurally different.
function MiniHero() {
  return (
    <div className="space-y-4">
      <ImagePlaceholder label="Hero" className="aspect-21/9" />
      <TextPlaceholder lines={2} />
      <Button variant="solid">Primary action</Button>
    </div>
  );
}

function MiniSplit() {
  return (
    <div className="flex gap-4">
      <div className="w-40 shrink-0 space-y-2">
        <Avatar initials="P" />
        <TextPlaceholder lines={4} />
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="solid">Split</Badge>
          <Button size="sm">Action</Button>
        </div>
        <ImagePlaceholder label="Content" />
      </div>
    </div>
  );
}

function MiniList() {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Item</TH>
          <TH>Status</TH>
        </TR>
      </THead>
      <TBody>
        {["One", "Two", "Three"].map((x) => (
          <TR key={x}>
            <TD className="text-ink">{x}</TD>
            <TD>
              <Badge>Draft</Badge>
            </TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}

export function VariantsDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Variants">
        The one-stop wrapper for a UI prototype: renders the active variant
        (from ?variant=) and mounts the floating switcher. Drop it into an
        existing page, keep the data fetching above it, and only the rendered
        subtree changes per variant.
      </PageHeader>

      <Example
        title="Live demo (the floating bar at the bottom of this page is real; try ← →)"
        code={`<Variants
  variants={{
    A: { name: "Hero", render: () => <MiniHero /> },
    B: { name: "Split", render: () => <MiniSplit /> },
    C: { name: "List", render: () => <MiniList /> },
  }}
/>`}
      >
        <div className="max-w-lg">
          <Variants
            variants={{
              A: { name: "Hero", render: () => <MiniHero /> },
              B: { name: "Split", render: () => <MiniSplit /> },
              C: { name: "List", render: () => <MiniList /> },
            }}
          />
        </div>
      </Example>

      <SectionTitle>Usage in a real page</SectionTitle>
      <CodeBlock
        code={`// existing page: keep data fetching above the switcher
export function SettingsPage() {
  const data = useSettings(); // unchanged

  return (
    <Variants
      variants={{
        A: { name: "Single column", render: () => <VariantA {...data} /> },
        B: { name: "Sidebar nav",   render: () => <VariantB {...data} /> },
        C: { name: "Tabbed",        render: () => <VariantC {...data} /> },
      }}
    />
  );
}`}
      />
      <PropsTable
        props={[
          {
            name: "variants",
            type: "Record<string, VariantDef>",
            description:
              "Keyed variants. VariantDef = { name?: string; render: () => ReactNode }. Key order is cycle order; first key is the default.",
          },
        ]}
      />
    </div>
  );
}

export function SwitcherDocs() {
  const keys = ["A", "B", "C"];
  const names = { A: "Card grid", B: "Sidebar", C: "Dense table" };
  const [current, setCurrent] = useState("A");

  return (
    <div className="space-y-8">
      <PageHeader title="PrototypeSwitcher">
        The floating bottom-center bar. Left arrow, variant label, right arrow;
        wraps around. Arrow keys also cycle, except when an input, textarea, or
        contenteditable is focused. Deliberately styled unlike the lo-fi system
        (inverted pill) so it reads as tooling, not as part of the design under
        evaluation. Returns null in production builds so a stray prototype
        merge cannot ship it.
      </PageHeader>

      <Example
        title="Live (bottom of this page; controlled by local state here)"
        code={`const [current, setCurrent] = useState("A");

<PrototypeSwitcher
  variants={["A", "B", "C"]}
  current={current}
  names={{ A: "Card grid", B: "Sidebar", C: "Dense table" }}
  onChange={setCurrent}
/>`}
      >
        <div className="space-y-3">
          <p className="text-sm text-ink-soft">
            Selected variant:{" "}
            <strong className="text-ink">
              {current} ({names[current as keyof typeof names]})
            </strong>
          </p>
          <Card className="max-w-sm">
            <CardBody>
              <TextPlaceholder lines={current === "C" ? 5 : current === "B" ? 3 : 1} />
            </CardBody>
          </Card>
        </div>
      </Example>

      <PropsTable
        props={[
          {
            name: "variants",
            type: "string[]",
            description: "Variant keys in cycle order.",
          },
          {
            name: "current",
            type: "string",
            description: "The active key.",
          },
          {
            name: "names",
            type: "Record<string, string>",
            description: "Optional readable name per key, shown after the key.",
          },
          {
            name: "onChange",
            type: "(key: string) => void",
            description: "Called with the next key when cycling or jumping.",
          },
        ]}
      />

      <PrototypeSwitcher
        variants={keys}
        current={current}
        names={names}
        onChange={setCurrent}
      />
    </div>
  );
}

export function UseVariantDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="useVariant">
        The state behind the switcher: syncs the active variant with the
        ?variant= URL search param so every variant is shareable and
        reload-stable. Framework-agnostic; it talks to the History API
        directly, so it works under Bun.serve, Next, React Router, anything.
      </PageHeader>

      <SectionTitle>API</SectionTitle>
      <CodeBlock
        code={`const { variant, setVariant, next, prev } = useVariant(["A", "B", "C"]);

variant;         // current key, validated against the list, defaults to first
setVariant("B"); // jump; writes ?variant=B via history.replaceState
next();          // cycle forward, wraps
prev();          // cycle backward, wraps`}
      />

      <SectionTitle>Behavior</SectionTitle>
      <ul className="max-w-prose space-y-2 text-sm text-ink-soft">
        <li className="flex gap-2">
          <span className="font-bold text-ink">·</span>
          Unknown or missing ?variant= falls back to the first key.
        </li>
        <li className="flex gap-2">
          <span className="font-bold text-ink">·</span>
          Uses history.replaceState, so cycling does not pollute the back
          stack.
        </li>
        <li className="flex gap-2">
          <span className="font-bold text-ink">·</span>
          Listens to popstate, so back/forward navigation re-reads the param.
        </li>
        <li className="flex gap-2">
          <span className="font-bold text-ink">·</span>
          Use it directly when you want a custom switcher UI; Variants wires it
          to PrototypeSwitcher for you.
        </li>
      </ul>

      <SectionTitle>Custom switcher example</SectionTitle>
      <CodeBlock
        code={`function MyPrototype() {
  const { variant, next } = useVariant(["compact", "cozy"]);
  return (
    <div onDoubleClick={next}>
      {variant === "compact" ? <Compact /> : <Cozy />}
    </div>
  );
}`}
      />
    </div>
  );
}
