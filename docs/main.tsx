import { useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles.css";
import { Avatar, Badge, cx } from "../src";
import { PAGES, SECTIONS } from "./pages";

const DEFAULT_SLUG = "introduction";

function readSlug(): string {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return PAGES.some((p) => p.slug === path) ? path : DEFAULT_SLUG;
}

function useRoute() {
  const [slug, setSlug] = useState(readSlug);

  const navigate = useCallback((next: string) => {
    // Preserve ?variant= etc. only within a page; drop params when leaving.
    window.history.pushState(null, "", `/${next}`);
    setSlug(next);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onPop = () => setSlug(readSlug());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return { slug, navigate };
}

function Sidebar({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (slug: string) => void;
}) {
  return (
    <aside className="fixed inset-y-0 left-0 w-60 overflow-y-auto border-r-2 border-ink bg-paper p-4">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigate(DEFAULT_SLUG);
        }}
        className="mb-6 flex items-center gap-2"
      >
        <Avatar size="sm" initials="P" />
        <span className="font-bold uppercase tracking-wide">Protofi</span>
        <Badge>v0.1</Badge>
      </a>

      {SECTIONS.map((section) => (
        <nav key={section} className="mb-5">
          <div className="mb-1.5 px-3 text-[11px] font-bold uppercase tracking-wide text-ink-faint">
            {section}
          </div>
          <div className="space-y-0.5">
            {PAGES.filter((p) => p.section === section).map((p) => (
              <a
                key={p.slug}
                href={`/${p.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(p.slug);
                }}
                className={cx(
                  "block rounded-lofi px-3 py-1 text-sm",
                  p.slug === slug
                    ? "bg-ink font-medium text-paper"
                    : "text-ink-soft hover:bg-fill hover:text-ink",
                )}
              >
                {p.title}
              </a>
            ))}
          </div>
        </nav>
      ))}
    </aside>
  );
}

function App() {
  const { slug, navigate } = useRoute();
  const page = PAGES.find((p) => p.slug === slug) ?? PAGES[0]!;

  return (
    <div>
      <Sidebar slug={slug} navigate={navigate} />
      <main className="ml-60 min-h-screen">
        <div className="mx-auto max-w-3xl p-10 pb-28">
          <page.render />
        </div>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
