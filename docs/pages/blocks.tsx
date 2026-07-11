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
        A block, not a component: it is not exported from the library. Blocks
        reach prototypes through the protofi skill, which carries a vanilla
        HTML recipe of this design and pastes it into the prototype to be
        hacked up. App-frame layout with an inverted sidebar (grouped nav,
        user menu), a top bar with breadcrumbs, and an independently
        scrolling content area.
      </PageHeader>

      <Example title="Preview" previewClassName="overflow-hidden p-0">
        <div className="h-[560px]">
          <DashboardShell style={{ height: "100%" }} />
        </div>
      </Example>

      <section className="space-y-3">
        <SectionTitle>How this block ships</SectionTitle>
        <ol className="max-w-prose list-decimal space-y-1 pl-5 text-sm text-ink-soft">
          <li>
            This file (<code className="font-mono text-ink">docs/blocks/dashboard-shell.tsx</code>)
            is the source of truth for the design: edit and preview it here, with real rendering.
          </li>
          <li>
            <code className="font-mono text-ink">/protofi-sync</code> derives a vanilla HTML recipe
            from it in <code className="font-mono text-ink">skills/protofi/BLOCKS.md</code>. Run it
            after changing this file.
          </li>
          <li>
            The protofi skill pastes that recipe into single-page HTML prototypes, where it gets
            hacked up freely: the sidebar toggle is decoration; prototypes wire it if they need it.
          </li>
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
