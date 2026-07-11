# States & Variants Switcher

A floating bottom-center bar for flipping through views of the Prototype:

- **States** — one design under different data conditions: `populated`, `empty`, `loading`, `error`. Add when the user asks to see states, or when a list/table/detail view has an obvious empty or error condition worth showing.
- **Variants** — structurally different design alternatives being compared to pick a direction. Only when the user asks for options. Variants must disagree about layout and hierarchy, not colors or copy.

Same mechanism for both; the `data-state` key names just change (`a`, `b`, `c` or descriptive names for variants).

The bar is tooling, not part of the design under evaluation, so it is deliberately styled unlike the lo-fi system: inverted pill, rounded, with a shadow (the one place a shadow is allowed).

## Markup

One wrapper per view, sharing a parent. Exactly the first one visible; the rest `hidden`. The current view key lives in the URL hash, so a specific state is shareable and reload-stable.

```html
<div data-state="populated"><!-- full view --></div>
<div data-state="empty" hidden><!-- empty view --></div>
<div data-state="error" hidden><!-- error view --></div>

<div class="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full bg-ink px-2 py-1.5 font-mono text-sm text-paper shadow-lg">
  <button data-proto-prev aria-label="Previous" class="cursor-pointer rounded-full px-2 py-0.5 hover:bg-paper/20">←</button>
  <span data-proto-label class="min-w-24 px-2 text-center font-bold"></span>
  <button data-proto-next aria-label="Next" class="cursor-pointer rounded-full px-2 py-0.5 hover:bg-paper/20">→</button>
</div>
```

When the switcher flips whole pages (e.g. each state is a full Dashboard Shell), each `[data-state]` wrapper holds the entire page.

## Behavior

`←`/`→` keys also cycle, except while typing in a form control.

```html
<script>
  (() => {
    const sections = [...document.querySelectorAll("[data-state]")];
    const keys = sections.map((s) => s.dataset.state);
    const label = document.querySelector("[data-proto-label]");
    const isTyping = (el) =>
      el instanceof HTMLElement &&
      (["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName) || el.isContentEditable);

    function show(key) {
      if (!keys.includes(key)) key = keys[0];
      sections.forEach((s) => (s.hidden = s.dataset.state !== key));
      label.textContent = key;
      history.replaceState(null, "", "#" + key);
    }
    function step(delta) {
      const i = Math.max(0, keys.indexOf(location.hash.slice(1)));
      show(keys[(i + delta + keys.length) % keys.length]);
    }

    document.querySelector("[data-proto-prev]").addEventListener("click", () => step(-1));
    document.querySelector("[data-proto-next]").addEventListener("click", () => step(1));
    window.addEventListener("keydown", (e) => {
      if (isTyping(e.target)) return;
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    show(location.hash.slice(1));
  })();
</script>
```
