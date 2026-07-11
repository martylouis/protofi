# Component References

Vanilla HTML recipes for every protofi Component. Copy the markup, keep the classes exactly, change only content and layout wrappers. The React library (protofi repo) is the source of truth; these recipes match its rendered classes.

Conventions used throughout:

- Interactive behavior comes from native elements (`<dialog>`, `popover`, checked inputs). Small script snippets are included where required (Tabs, Menu positioning); put them at the end of `<body>`, before `lucide.createIcons()`.
- Keyboard highlight styles from the library map to `hover:` here; full arrow-key navigation inside menus is intentionally not recreated.
- Mark invalid controls with `aria-invalid="true"`; disabled with the native `disabled` attribute.

## Button

Variants: `solid`, `outline` (default), `ghost`. Sizes: `sm`, `md` (default), `lg`.

```html
<button
  class="inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-lofi border-2 px-4 py-1.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-40 border-ink bg-paper text-ink hover:bg-fill"
>
  Save changes
</button>
```

Swap the trailing variant/size classes:

| Variant | Classes |
| --- | --- |
| `solid` | `border-ink bg-ink text-paper hover:border-ink-soft hover:bg-ink-soft` |
| `outline` | `border-ink bg-paper text-ink hover:bg-fill` |
| `ghost` | `border-transparent bg-transparent text-ink hover:bg-fill` |

| Size | Classes |
| --- | --- |
| `sm` | `px-2.5 py-1 text-xs` |
| `md` | `px-4 py-1.5 text-sm` |
| `lg` | `px-6 py-2.5 text-base` |

Icon-only: keep `md` padding tight with `class="... px-1.5"` and add `aria-label`.

## Badge

Variants: `solid`, `outline` (default).

```html
<span class="inline-flex items-center rounded-lofi border border-ink bg-paper px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">Active</span>
```

`solid`: replace `bg-paper text-ink` with `bg-ink text-paper`.

## Card

```html
<div class="rounded-lofi border-2 border-ink bg-paper">
  <div class="flex items-center justify-between gap-2 border-b-2 border-ink px-4 py-2.5">
    <h3 class="text-sm font-bold uppercase tracking-wide">Card title</h3>
    <!-- optional header actions -->
  </div>
  <div class="p-4">
    <!-- body -->
  </div>
  <div class="flex items-center justify-end gap-2 border-t-2 border-line-soft px-4 py-2.5">
    <!-- footer actions -->
  </div>
</div>
```

Header and footer are optional; body alone is fine.

## Divider

```html
<hr class="border-t-2 border-line-soft" />
```

With label:

```html
<div class="flex items-center gap-3" role="separator">
  <hr class="flex-1 border-t-2 border-line-soft" />
  <span class="text-xs font-bold uppercase tracking-wide text-ink-faint">or</span>
  <hr class="flex-1 border-t-2 border-line-soft" />
</div>
```

## Breadcrumbs

`/` separators are CSS-injected between items. The last item (no link) is the current page.

```html
<nav aria-label="Breadcrumbs">
  <ol class="flex flex-wrap items-center text-sm">
    <li class="flex items-center [&+li]:before:mx-2 [&+li]:before:text-ink-faint [&+li]:before:content-['/']">
      <a href="#" class="text-ink-soft underline-offset-2 hover:text-ink hover:underline">Settings</a>
    </li>
    <li class="flex items-center [&+li]:before:mx-2 [&+li]:before:text-ink-faint [&+li]:before:content-['/']">
      <span aria-current="page" class="font-medium text-ink">Profile</span>
    </li>
  </ol>
</nav>
```

## ImagePlaceholder

Wireframe image box: hatched fill with a corner-to-corner X. Default aspect is video; override with any aspect/size classes. Label is optional.

```html
<div class="relative flex aspect-video items-center justify-center overflow-hidden rounded-lofi border-2 border-ink bg-hatch">
  <svg class="absolute inset-0 size-full text-line-soft" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke" />
    <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke" />
  </svg>
  <span class="relative bg-paper px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-ink-soft">Hero</span>
</div>
```

## TextPlaceholder

Greeked text: gray bars standing in for copy. One `div` per line; last line is short (`w-3/5`).

```html
<div class="space-y-2" aria-hidden="true">
  <div class="h-3 rounded-lofi bg-fill-strong"></div>
  <div class="h-3 rounded-lofi bg-fill-strong"></div>
  <div class="h-3 w-3/5 rounded-lofi bg-fill-strong"></div>
</div>
```

## Avatar

Sizes: `sm` `size-7 text-[10px]`, `md` (default) `size-10 text-xs`, `lg` `size-14 text-base`.

```html
<!-- initials -->
<span class="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-paper text-xs font-bold uppercase">GH</span>

<!-- empty: hatch fallback -->
<span class="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-hatch"></span>

<!-- image -->
<span class="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-paper">
  <img src="…" alt="" class="size-full object-cover" />
</span>
```

## Table

```html
<div class="overflow-x-auto rounded-lofi border-2 border-ink">
  <table class="w-full border-collapse text-sm">
    <thead class="bg-fill">
      <tr class="border-b border-line-soft last:border-b-0">
        <th class="border-b-2 border-ink px-3 py-2 text-left text-xs font-bold uppercase tracking-wide">Name</th>
        <th class="border-b-2 border-ink px-3 py-2 text-left text-xs font-bold uppercase tracking-wide">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-line-soft last:border-b-0">
        <td class="px-3 py-2 text-ink-soft">Grace Hopper</td>
        <td class="px-3 py-2 text-ink-soft">Active</td>
      </tr>
    </tbody>
  </table>
</div>
```

Every `<tr>` (head and body) carries the same row classes. Override cell text color per cell when needed (e.g. `text-ink font-medium` for a primary column).

## Input / Textarea

The shared field-control class string (also used by Select):

```
w-full rounded-lofi border-2 border-ink bg-paper px-3 py-1.5 text-sm text-ink placeholder:text-ink-faint focus:outline-2 focus:outline-offset-2 focus:outline-ink disabled:cursor-not-allowed disabled:bg-fill disabled:opacity-60 aria-invalid:border-dashed
```

```html
<input type="text" placeholder="Jane Doe"
  class="w-full rounded-lofi border-2 border-ink bg-paper px-3 py-1.5 text-sm text-ink placeholder:text-ink-faint focus:outline-2 focus:outline-offset-2 focus:outline-ink disabled:cursor-not-allowed disabled:bg-fill disabled:opacity-60 aria-invalid:border-dashed" />

<textarea placeholder="Add a note…"
  class="min-h-20 w-full rounded-lofi border-2 border-ink bg-paper px-3 py-1.5 text-sm text-ink placeholder:text-ink-faint focus:outline-2 focus:outline-offset-2 focus:outline-ink disabled:cursor-not-allowed disabled:bg-fill disabled:opacity-60 aria-invalid:border-dashed"></textarea>
```

Invalid state: add `aria-invalid="true"` (border goes dashed).

## Field

Label + control + description/error stack. Wire `for`/`id`. Show either the description or the error, not both.

```html
<div class="block space-y-1">
  <label for="name" class="block text-xs font-bold uppercase tracking-wide text-ink">Name</label>
  <input id="name" type="text" placeholder="Jane Doe" class="…field-control classes…" />
  <p class="text-xs text-ink-faint">As it appears on the card</p>
  <!-- error variant: -->
  <!-- <p class="text-xs font-bold text-ink underline decoration-2">Required</p> -->
</div>
```

## Checkbox

Native input visually hidden (`peer sr-only`); the sibling `<span>` is the drawn box. No JS.

```html
<label class="inline-flex cursor-pointer select-none items-center gap-2 text-sm text-ink has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-40">
  <input type="checkbox" class="peer sr-only" />
  <span class="flex size-4 shrink-0 items-center justify-center border-2 border-ink bg-paper text-[10px] font-bold text-paper peer-checked:bg-ink peer-checked:after:content-['✓'] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink"></span>
  Email me updates
</label>
```

## Radio

Same pattern; radios in a set share a `name`. Group wrapper: `<div class="flex flex-wrap gap-6" role="radiogroup">`.

```html
<label class="inline-flex cursor-pointer select-none items-center gap-2 text-sm text-ink has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-40">
  <input type="radio" name="plan" value="pro" class="peer sr-only" />
  <span class="relative size-4 shrink-0 rounded-full border-2 border-ink bg-paper after:absolute after:left-1/2 after:top-1/2 after:size-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-ink after:opacity-0 peer-checked:after:opacity-100 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink"></span>
  Pro
</label>
```

## Switch

Round track, sliding round thumb. No JS.

```html
<label class="inline-flex cursor-pointer select-none items-center gap-2 text-sm text-ink has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-40">
  <input type="checkbox" role="switch" class="peer sr-only" />
  <span class="relative inline-block h-5 w-9 shrink-0 rounded-full border-2 border-ink bg-paper transition-colors peer-checked:bg-fill-strong after:absolute after:left-0.5 after:top-0.5 after:size-3 after:rounded-full after:bg-ink after:transition-transform peer-checked:after:translate-x-4 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink"></span>
  Theme
</label>
```

## Select

Native `<select>` wearing the field-control classes, with a drawn `▾` chevron. The open popup is browser-native (accepted lo-fi drift from the library's custom popup).

```html
<span class="relative block">
  <select
    class="w-full cursor-pointer appearance-none rounded-lofi border-2 border-ink bg-paper py-1.5 pl-3 pr-8 text-sm text-ink focus:outline-2 focus:outline-offset-2 focus:outline-ink disabled:cursor-not-allowed disabled:bg-fill disabled:opacity-60 aria-invalid:border-dashed">
    <option value="" disabled selected>Choose a plan…</option>
    <option value="free">Free</option>
    <option value="pro">Pro</option>
  </select>
  <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs" aria-hidden="true">▾</span>
</span>
```

Placeholder styling: when showing the disabled placeholder option, add `text-ink-faint` to the select and swap it for `text-ink` once a value is chosen (fine to just pick whichever state the Prototype needs).

## Tabs

Buttons + panels wired by a small script. Active styles key off `aria-selected`.

```html
<div data-tabs>
  <div role="tablist" class="flex gap-1 border-b-2 border-ink">
    <button data-tab="all" aria-selected="true"
      class="-mb-0.5 cursor-pointer border-b-4 border-transparent px-3 py-1.5 text-sm font-medium text-ink-faint hover:text-ink aria-selected:border-ink aria-selected:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">All</button>
    <button data-tab="done" aria-selected="false" class="…same classes…">Done</button>
  </div>
  <div data-panel="all" class="pt-4">…</div>
  <div data-panel="done" class="pt-4" hidden>…</div>
</div>
```

Behavior script (once per file, handles every `[data-tabs]` group):

```html
<script>
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    group.querySelectorAll("[data-tab]").forEach((tab) => {
      tab.addEventListener("click", () => {
        group.querySelectorAll("[data-tab]").forEach((t) =>
          t.setAttribute("aria-selected", String(t === tab)),
        );
        group.querySelectorAll("[data-panel]").forEach((p) => {
          p.hidden = p.dataset.panel !== tab.dataset.tab;
        });
      });
    });
  });
</script>
```

## Menu

Dropdown via the native popover API: light dismiss and Escape are free. A small script positions the popup at its trigger. Items are hover-highlighted (arrow-key navigation is not recreated).

```html
<button popovertarget="row-menu"
  class="inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-lofi border-2 border-ink bg-paper px-4 py-1.5 text-sm font-medium text-ink hover:bg-fill focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
  Actions ▾
</button>

<div id="row-menu" popover class="m-0 min-w-40 rounded-lofi border-2 border-ink bg-paper py-1">
  <div class="px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-faint">File</div>
  <button class="flex w-full cursor-pointer select-none items-center gap-2 px-3 py-1 text-left text-sm text-ink hover:bg-ink hover:text-paper disabled:opacity-40">Rename</button>
  <button class="flex w-full cursor-pointer select-none items-center gap-2 px-3 py-1 text-left text-sm text-ink hover:bg-ink hover:text-paper disabled:opacity-40">Duplicate</button>
  <hr class="my-1 border-t-2 border-line-soft" />
  <button class="flex w-full cursor-pointer select-none items-center gap-2 px-3 py-1 text-left text-sm text-ink hover:bg-ink hover:text-paper disabled:opacity-40">Delete</button>
</div>
```

Positioning script (once per file, handles every popover; `data-side="top"` on the popover opens it above the trigger, e.g. for a menu at the bottom of a sidebar):

```html
<script>
  document.querySelectorAll("[popover][id]").forEach((pop) => {
    const trigger = document.querySelector(`[popovertarget="${pop.id}"]`);
    if (!trigger) return;
    pop.addEventListener("toggle", (e) => {
      if (e.newState !== "open") return;
      const r = trigger.getBoundingClientRect();
      pop.style.position = "fixed";
      pop.style.top =
        pop.dataset.side === "top"
          ? `${r.top - pop.offsetHeight - 4}px`
          : `${r.bottom + 4}px`;
      pop.style.left = `${Math.min(r.left, innerWidth - pop.offsetWidth - 8)}px`;
    });
  });
</script>
```

Checkbox/radio menu items: prefix the label with a fixed-width mark gutter `<span class="w-4 shrink-0 font-bold">✓</span>` (empty span when unchecked).

## Dialog

Native `<dialog>`: focus trap, Escape, and backdrop come free. Open with `showModal()`.

```html
<button onclick="document.getElementById('confirm-dialog').showModal()" class="…Button classes…">Open</button>

<dialog id="confirm-dialog"
  class="m-auto w-[calc(100%-2rem)] max-w-md rounded-lofi border-2 border-ink bg-paper p-0 backdrop:bg-ink/40">
  <div class="flex items-center justify-between border-b-2 border-ink px-4 py-2.5">
    <h2 class="text-sm font-bold uppercase tracking-wide">Confirm action</h2>
    <button onclick="this.closest('dialog').close()" aria-label="Close"
      class="cursor-pointer px-1 text-lg leading-none text-ink hover:text-ink-faint">×</button>
  </div>
  <div class="p-4">
    <p class="text-sm text-ink-soft">This can't be undone.</p>
  </div>
  <div class="flex items-center justify-end gap-2 border-t-2 border-line-soft px-4 py-2.5">
    <button onclick="this.closest('dialog').close()" class="…ghost Button classes…">Cancel</button>
    <button onclick="this.closest('dialog').close()" class="…solid Button classes…">Confirm</button>
  </div>
</dialog>
```

## Drawer

A `<dialog>` pinned to an edge. `open:flex` keeps it hidden while closed (don't use a bare `flex` — it would force the closed dialog visible). Slide/swipe animation from the library is intentionally not recreated.

```html
<!-- side: right -->
<dialog id="edit-drawer"
  class="m-0 ml-auto h-dvh max-h-none w-96 max-w-[85vw] flex-col border-l-2 border-ink bg-paper p-0 open:flex backdrop:bg-ink/40">
  <div class="flex shrink-0 items-center justify-between border-b-2 border-ink px-4 py-2.5">
    <h2 class="text-sm font-bold uppercase tracking-wide">Edit user</h2>
    <button onclick="this.closest('dialog').close()" aria-label="Close"
      class="cursor-pointer px-1 text-lg leading-none text-ink hover:text-ink-faint">×</button>
  </div>
  <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4">
    <!-- scrollable body -->
  </div>
  <div class="flex shrink-0 items-center justify-end gap-2 border-t-2 border-line-soft px-4 py-2.5">
    <!-- actions -->
  </div>
</dialog>
```

`side: bottom`: replace `ml-auto h-dvh max-h-none w-96 max-w-[85vw] border-l-2` with `mt-auto max-h-[85vh] w-full border-t-2`.
