import type { ReactNode } from "react";
import { cx } from "../src/cx";

/** Monospace code block, lo-fi styled. */
export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-lofi border-2 border-line-soft bg-fill p-4 font-mono text-xs leading-relaxed text-ink">
      {code.trim()}
    </pre>
  );
}

/** Live preview area with the code that produced it below. */
export function Example({
  title,
  code,
  children,
  previewClassName,
}: {
  title?: string;
  code?: string;
  children: ReactNode;
  previewClassName?: string;
}) {
  return (
    <div className="space-y-2">
      {title && (
        <h3 className="text-xs font-bold uppercase tracking-wide text-ink-soft">
          {title}
        </h3>
      )}
      <div
        className={cx(
          "rounded-lofi border-2 border-ink bg-paper p-6",
          previewClassName,
        )}
      >
        {children}
      </div>
      {code && <CodeBlock code={code} />}
    </div>
  );
}

/** Page heading + intro blurb. */
export function PageHeader({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="space-y-2 border-b-2 border-ink pb-4">
      <h1 className="text-2xl font-bold uppercase tracking-wide">{title}</h1>
      {children && <p className="max-w-prose text-sm text-ink-soft">{children}</p>}
    </header>
  );
}

/** Section sub-heading within a page. */
export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="border-b-2 border-line-soft pb-1 text-base font-bold uppercase tracking-wide">
      {children}
    </h2>
  );
}

/** Numbered or bulleted principle: bold rule, plain explanation. */
export function Principle({
  n,
  title,
  children,
}: {
  n?: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      {n !== undefined && (
        <div className="flex size-8 shrink-0 items-center justify-center border-2 border-ink font-mono text-sm font-bold">
          {n}
        </div>
      )}
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="mt-0.5 max-w-prose text-sm text-ink-soft">{children}</p>
      </div>
    </div>
  );
}

/** Prop documentation row data. */
export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}
