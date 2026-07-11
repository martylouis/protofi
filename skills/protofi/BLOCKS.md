# Blocks

Blocks are one-off compositions of Components: copy the code into the Prototype and hack it up freely. They are starting points, not primitives.

## Dashboard Shell

Page chrome for app-style Prototypes: inverted sidebar with grouped nav and a user menu, top bar with breadcrumbs, scrollable content area. Put the page's actual content where the comment marks the main area.

Requires the Menu positioning script from [COMPONENTS.md](COMPONENTS.md#menu) (the user menu opens upward via `data-side="top"`).

```html
<div class="flex h-screen overflow-hidden bg-paper">
  <!-- Sidebar -->
  <aside class="flex w-60 shrink-0 flex-col bg-ink text-paper">
    <div class="flex items-center gap-2.5 px-4 py-3">
      <div class="flex size-8 shrink-0 items-center justify-center rounded-lofi border-2 border-paper/60">
        <span class="size-3 rounded-full border-2 border-paper/60"></span>
      </div>
      <div class="leading-tight">
        <div class="text-[10px] font-bold uppercase tracking-wide text-paper/60">Brand</div>
        <div class="text-sm font-bold">Platform</div>
      </div>
    </div>

    <nav class="flex-1 space-y-0.5 overflow-y-auto p-2">
      <!-- active item -->
      <a href="#" class="flex items-center gap-2.5 rounded-lofi bg-paper px-3 py-2 text-sm font-medium text-ink">
        <i data-lucide="layout-dashboard" class="size-4 shrink-0"></i>
        Dashboard
      </a>
      <!-- inactive items -->
      <a href="#" class="flex items-center gap-2.5 rounded-lofi px-3 py-2 text-sm text-paper/70 hover:bg-paper/10 hover:text-paper">
        <i data-lucide="list" class="size-4 shrink-0"></i>
        List
      </a>
      <a href="#" class="flex items-center gap-2.5 rounded-lofi px-3 py-2 text-sm text-paper/70 hover:bg-paper/10 hover:text-paper">
        <i data-lucide="list-checks" class="size-4 shrink-0"></i>
        Tasks
      </a>
      <div class="px-3 pb-1 pt-4 text-[11px] font-bold uppercase tracking-wide text-paper/50">Manage</div>
      <a href="#" class="flex items-center gap-2.5 rounded-lofi px-3 py-2 text-sm text-paper/70 hover:bg-paper/10 hover:text-paper">
        <i data-lucide="users" class="size-4 shrink-0"></i>
        Users
      </a>
      <a href="#" class="flex items-center gap-2.5 rounded-lofi px-3 py-2 text-sm text-paper/70 hover:bg-paper/10 hover:text-paper">
        <i data-lucide="settings-2" class="size-4 shrink-0"></i>
        Settings
      </a>
    </nav>

    <!-- User menu -->
    <button popovertarget="user-menu" class="flex w-full cursor-pointer items-center gap-2 border-t-2 border-paper/20 px-4 py-3 text-left hover:bg-paper/10">
      <span class="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-paper bg-paper text-[10px] font-bold uppercase text-ink">GH</span>
      <span class="flex-1 truncate text-sm font-medium">Grace Hopper</span>
      <i data-lucide="chevrons-up-down" class="size-4 shrink-0 text-paper/60"></i>
    </button>
    <div id="user-menu" popover data-side="top" class="m-0 min-w-40 rounded-lofi border-2 border-ink bg-paper py-1">
      <button class="flex w-full cursor-pointer select-none items-center gap-2 px-3 py-1 text-left text-sm text-ink hover:bg-ink hover:text-paper">Profile</button>
      <button class="flex w-full cursor-pointer select-none items-center gap-2 px-3 py-1 text-left text-sm text-ink hover:bg-ink hover:text-paper">Settings</button>
      <hr class="my-1 border-t-2 border-line-soft" />
      <button class="flex w-full cursor-pointer select-none items-center gap-2 px-3 py-1 text-left text-sm text-ink hover:bg-ink hover:text-paper">Sign out</button>
    </div>
  </aside>

  <!-- Main column -->
  <div class="flex min-w-0 flex-1 flex-col">
    <header class="flex shrink-0 items-center gap-3 border-b-2 border-ink px-4 py-2.5">
      <button aria-label="Toggle sidebar"
        class="inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-lofi border-2 border-transparent bg-transparent px-1.5 py-1.5 text-sm font-medium text-ink hover:bg-fill focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">
        <i data-lucide="panel-left" class="size-4"></i>
      </button>
      <span class="h-5 border-l-2 border-line-soft" aria-hidden="true"></span>
      <nav aria-label="Breadcrumbs">
        <ol class="flex flex-wrap items-center text-sm">
          <li class="flex items-center [&+li]:before:mx-2 [&+li]:before:text-ink-faint [&+li]:before:content-['/']">
            <a href="#" class="text-ink-soft underline-offset-2 hover:text-ink hover:underline">Dashboard</a>
          </li>
          <li class="flex items-center [&+li]:before:mx-2 [&+li]:before:text-ink-faint [&+li]:before:content-['/']">
            <span aria-current="page" class="font-medium text-ink">Overview</span>
          </li>
        </ol>
      </nav>
      <div class="ml-auto">
        <!-- header actions -->
      </div>
    </header>

    <main class="flex-1 overflow-y-auto p-6">
      <!-- page content -->
    </main>
  </div>
</div>
```
