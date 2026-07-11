import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cx } from "../cx";

/**
 * Lo-fi-styled Base UI Tabs. Full keyboard nav (arrow keys, home/end) and
 * ARIA come from Base UI:
 *
 *   <Tabs.Root defaultValue="all">
 *     <Tabs.List>
 *       <Tabs.Tab value="all">All</Tabs.Tab>
 *       <Tabs.Tab value="done">Done</Tabs.Tab>
 *     </Tabs.List>
 *     <Tabs.Panel value="all">…</Tabs.Panel>
 *     <Tabs.Panel value="done">…</Tabs.Panel>
 *   </Tabs.Root>
 */

function List({ className, ...props }: Omit<BaseTabs.List.Props, "className"> & { className?: string }) {
  return (
    <BaseTabs.List
      className={cx("flex gap-1 border-b-2 border-ink", className)}
      {...props}
    />
  );
}

function Tab({ className, ...props }: Omit<BaseTabs.Tab.Props, "className"> & { className?: string }) {
  return (
    <BaseTabs.Tab
      className={cx(
        "-mb-0.5 cursor-pointer border-b-4 border-transparent px-3 py-1.5 text-sm font-medium text-ink-faint",
        "hover:text-ink data-active:border-ink data-active:text-ink data-disabled:opacity-40",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        className,
      )}
      {...props}
    />
  );
}

function Panel({ className, ...props }: Omit<BaseTabs.Panel.Props, "className"> & { className?: string }) {
  return (
    <BaseTabs.Panel className={cx("pt-4 outline-none", className)} {...props} />
  );
}

export const Tabs = {
  Root: BaseTabs.Root,
  List,
  Tab,
  Panel,
  Indicator: BaseTabs.Indicator,
};
