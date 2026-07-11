import {
  ChevronsUpDown,
  LayoutDashboard,
  List,
  ListChecks,
  PanelLeft,
  Settings2,
  Users,
} from "lucide-react";
import type { HTMLAttributes } from "react";
import {
  Avatar,
  Breadcrumbs,
  Button,
  ImagePlaceholder,
  Menu,
  Switch,
  cx,
} from "../../src";

/**
 * Dashboard Shell — a copy-paste block, not a library component.
 * Inverted sidebar with grouped nav and a user menu; top bar with
 * breadcrumbs; scrollable content area. Copy it into your prototype
 * (adjust the import path) and hack it up.
 */

function NavItem({
  icon: Icon,
  label,
  active,
}: {
  icon: typeof LayoutDashboard;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className={cx(
        "flex items-center gap-2.5 rounded-lofi px-3 py-2 text-sm",
        active
          ? "bg-paper font-medium text-ink"
          : "text-paper/70 hover:bg-paper/10 hover:text-paper",
      )}
    >
      <Icon className="size-4 shrink-0" />
      {label}
    </a>
  );
}

export default function DashboardShell(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cx("flex h-screen overflow-hidden bg-paper", props.className)}
    >
      {/* Sidebar */}
      <aside className="flex w-60 shrink-0 flex-col bg-ink text-paper">
        <div className="flex items-center gap-2.5 px-4 py-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lofi border-2 border-paper/60">
            <span className="size-3 rounded-full border-2 border-paper/60" />
          </div>
          <div className="leading-tight">
            <div className="text-[10px] font-bold uppercase tracking-wide text-paper/60">
              Brand
            </div>
            <div className="text-sm font-bold">Platform</div>
          </div>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto p-2">
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={List} label="List" />
          <NavItem icon={ListChecks} label="Tasks" />
          <div className="px-3 pb-1 pt-4 text-[11px] font-bold uppercase tracking-wide text-paper/50">
            Manage
          </div>
          <NavItem icon={Users} label="Users" />
          <NavItem icon={Settings2} label="Settings" />
        </nav>

        <Menu.Root>
          <Menu.Trigger className="flex w-full items-center gap-2 border-t-2 border-paper/20 px-4 py-3 text-left hover:bg-paper/10">
            <Avatar size="sm" initials="GH" />
            <span className="flex-1 truncate text-sm font-medium">
              Grace Hopper
            </span>
            <ChevronsUpDown className="size-4 shrink-0 text-paper/60" aria-hidden />
          </Menu.Trigger>
          <Menu.Popup side="top" align="start">
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Separator />
            <Menu.Item>Sign out</Menu.Item>
          </Menu.Popup>
        </Menu.Root>
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex shrink-0 items-center gap-3 border-b-2 border-ink px-4 py-2.5">
          <Button variant="ghost" className="px-1.5" aria-label="Toggle sidebar">
            <PanelLeft className="size-4" aria-hidden />
          </Button>
          <span className="h-5 border-l-2 border-line-soft" aria-hidden />
          <Breadcrumbs.Root>
            <Breadcrumbs.Item href="#">Dashboard</Breadcrumbs.Item>
            <Breadcrumbs.Item>Overview</Breadcrumbs.Item>
          </Breadcrumbs.Root>
          <div className="ml-auto">
            <Switch label="Theme" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <ImagePlaceholder
            label="Content"
            className="aspect-auto min-h-full"
          />
        </main>
      </div>
    </div>
  );
}
