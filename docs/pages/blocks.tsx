import { useEffect, useState } from "react";
import DashboardShell from "../blocks/dashboard-shell";
import { CodeBlock, Example, PageHeader, SectionTitle } from "../ui";

/** Fetches a block's real source from the dev server so it cannot drift. */
function useBlockSource(name: string) {
  const [source, setSource] = useState("Loading source…");
  useEffect(() => {
    fetch(`/source/blocks/${name}`)
      .then((res) => (res.ok ? res.text() : Promise.reject(res.status)))
      .then(setSource)
      .catch(() => setSource("Failed to load source."));
  }, [name]);
  return source;
}

export function DashboardShellDocs() {
  const shellSource = useBlockSource("dashboard-shell");
  return (
    <div className="space-y-8">
      <PageHeader title="Dashboard Shell">
        A block, not a component: it is not exported from the library. Copy the
        source below into your prototype and hack it up. App-frame layout with
        an inverted sidebar (grouped nav, user menu), a top bar with
        breadcrumbs, and an independently scrolling content area.
      </PageHeader>

      <Example title="Preview" previewClassName="overflow-hidden p-0">
        <div className="h-[560px]">
          <DashboardShell style={{ height: "100%" }} />
        </div>
      </Example>

      <section className="space-y-3">
        <SectionTitle>How to use</SectionTitle>
        <ol className="max-w-prose list-decimal space-y-1 pl-5 text-sm text-ink-soft">
          <li>
            Copy the source below into a new <code className="font-mono text-ink">.tsx</code> file
            in your prototype (it is TSX, not HTML).
          </li>
          <li>
            Adjust the <code className="font-mono text-ink">"../../src"</code> import to point at
            Protofi from your file's location.
          </li>
          <li>
            Render it from an entry file: import{" "}
            <code className="font-mono text-ink">src/styles.css</code> once, then{" "}
            <code className="font-mono text-ink">{"createRoot(...).render(<DashboardShell />)"}</code>.
            See <code className="font-mono text-ink">test/test.tsx</code> for a working example.
          </li>
          <li>Hack it up: the sidebar toggle is decoration; wire it if you need it.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <SectionTitle>Source</SectionTitle>
        <p className="max-w-prose text-sm text-ink-soft">
          The preview above renders this exact file; the snippet cannot drift.
        </p>
        <CodeBlock code={shellSource} />
      </section>
    </div>
  );
}
