import { Badge, Button, Card, CardBody, ImagePlaceholder, TextPlaceholder } from "../../src";
import { CodeBlock, Example, PageHeader, Principle, SectionTitle } from "../ui";

export function Introduction() {
  return (
    <div className="space-y-8">
      <PageHeader title="Protofi">
        A low-fidelity component library for throwaway UI prototypes. Grayscale
        primitives that look deliberately unfinished, plus the variant-switching
        machinery to compare radically different layouts on one route.
      </PageHeader>

      <div className="space-y-3">
        <SectionTitle>Quick start</SectionTitle>
        <CodeBlock
          code={`bun install
bun run dev   # docs site with HMR
bun run typecheck`}
        />
        <CodeBlock
          code={`import { Button, Card, Variants } from "./src";
import "./src/styles.css";`}
        />
      </div>

      <div className="space-y-3">
        <SectionTitle>Two halves</SectionTitle>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardBody className="space-y-2">
              <Badge variant="solid">Components</Badge>
              <p className="text-sm text-ink-soft">
                Lo-fi primitives: buttons, forms, cards, tables, placeholders.
                Enough to sketch any screen without deciding what it looks like.
              </p>
              <div className="flex gap-2 pt-1">
                <Button size="sm">Button</Button>
                <Button size="sm" variant="solid">
                  Button
                </Button>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="space-y-2">
              <Badge variant="solid">Prototypes</Badge>
              <p className="text-sm text-ink-soft">
                The workflow from the prototype skill: N structurally different
                variants on one route, switchable via ?variant= and a floating
                bar.
              </p>
              <div className="flex items-center gap-1 pt-1 font-mono text-xs">
                <span className="rounded-full bg-ink px-3 py-1 text-paper">
                  ← <strong>B</strong>
                  <span className="opacity-60"> Sidebar</span> →
                </span>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="space-y-3">
        <SectionTitle>Why lo-fi</SectionTitle>
        <Example
          code={`<ImagePlaceholder label="Hero" />
<TextPlaceholder lines={3} />`}
        >
          <div className="grid grid-cols-2 items-start gap-6">
            <ImagePlaceholder label="Hero" />
            <TextPlaceholder lines={3} />
          </div>
        </Example>
        <p className="max-w-prose text-sm text-ink-soft">
          A prototype is throwaway code that answers a question. Grayscale and
          hard borders keep the conversation on structure and hierarchy, the
          only things a prototype can actually settle. Anything prettier
          invites feedback about color and typography, which is noise at this
          stage.
        </p>
      </div>
    </div>
  );
}

export function Principles() {
  return (
    <div className="space-y-8">
      <PageHeader title="Principles">
        Distilled from the prototype skill. A prototype is throwaway code that
        answers a question; the question decides the shape.
      </PageHeader>

      <div className="space-y-5">
        <SectionTitle>Rules for every prototype</SectionTitle>
        <Principle n={1} title="Throwaway from day one, and clearly marked">
          Locate prototype code close to where it will be used so context is
          obvious, but name it so a casual reader sees it is a prototype, not
          production. Follow the routing convention the project already uses.
        </Principle>
        <Principle n={2} title="One command to run">
          Whatever the task runner supports: bun run, pnpm, make. The user must
          be able to start it without thinking.
        </Principle>
        <Principle n={3} title="No persistence by default">
          State lives in memory. Persistence is the thing a prototype checks,
          not something it depends on. If a database is the question, use a
          scratch DB with a clear "PROTOTYPE, wipe me" name.
        </Principle>
        <Principle n={4} title="Skip the polish">
          No tests, no error handling beyond runnable, no abstractions. The
          point is to learn something fast.
        </Principle>
        <Principle n={5} title="Surface the state">
          After every action or variant switch, render the full relevant state
          so the user can see what changed.
        </Principle>
        <Principle n={6} title="Capture it when done">
          Fold the validated decision into real code. Commit the prototype
          itself to a throwaway branch as a primary source, and record the
          verdict and the question it settled. Main keeps only the decision.
        </Principle>
      </div>

      <div className="space-y-5">
        <SectionTitle>UI variant principles</SectionTitle>
        <Principle title="Prototype in context, not in a vacuum">
          Variants are easiest to judge butting up against the real app: real
          header, real data, real density. Prefer mounting variants inside an
          existing page over a fresh throwaway route. An empty route hides
          design problems a populated one exposes.
        </Principle>
        <Principle title="Three variants, five max">
          Default to 3. Past 5, variants stop being radically different and
          start being noise.
        </Principle>
        <Principle title="Radically different means structure">
          Different layout, different information hierarchy, different primary
          affordance. Three slightly-tweaked card grids is wallpaper, not a
          prototype. If two drafts converge, redo one with explicit "do not use
          a card grid" guidance.
        </Principle>
        <Principle title="Share components, never layout">
          A shared header is fine; a shared layout defeats the point. Each
          variant must be free to throw out the layout.
        </Principle>
        <Principle title="Read-only by default">
          Point mutations at stubs. The question is "what should this look
          like", not "does the backend work".
        </Principle>
        <Principle title="Rewrite before promoting">
          Variant code was written under prototype constraints. When a variant
          wins, rewrite it properly as you fold it into the real page.
        </Principle>
      </div>

      <div className="space-y-5">
        <SectionTitle>Lo-fi visual principles</SectionTitle>
        <Principle title="Grayscale only">
          Color is a decision the prototype must not make. Ink on paper keeps
          feedback about structure.
        </Principle>
        <Principle title="Hard 2px borders, 2px radius">
          Crisp boxes read as wireframe. Softness and shadows read as finished,
          and finished invites the wrong critique.
        </Principle>
        <Principle title="Hatch and greek the content">
          Diagonal hatching for images, gray bars for copy. Real-looking
          content gets copyedited; placeholders get ignored, which is the goal.
        </Principle>
        <Principle title="Tooling looks like tooling">
          The variant switcher is an inverted high-contrast pill, deliberately
          unlike the lo-fi system, so nobody mistakes it for part of the design
          under evaluation. It disappears in production builds.
        </Principle>
      </div>

      <div className="space-y-3">
        <SectionTitle>Anti-patterns</SectionTitle>
        <ul className="max-w-prose space-y-2 text-sm text-ink-soft">
          <li className="flex gap-2">
            <span className="font-bold text-ink">×</span>
            Variants that differ only in color or copy. That is a tweak, not a
            prototype.
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-ink">×</span>
            Wiring variants to real mutations.
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-ink">×</span>
            Promoting prototype code directly to production.
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-ink">×</span>
            Leaving losing variants and the switcher in main. They rot fast and
            confuse the next reader.
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-ink">×</span>
            Adding tests to a prototype. A prototype that needs tests is no
            longer a prototype.
          </li>
        </ul>
      </div>
    </div>
  );
}
