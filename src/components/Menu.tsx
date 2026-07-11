import { Menu as BaseMenu } from "@base-ui/react/menu";
import type { ReactNode } from "react";
import { cx } from "../cx";

/**
 * Lo-fi-styled Base UI Menu. Keyboard navigation, typeahead, submenus, and
 * ARIA come from Base UI:
 *
 *   <Menu.Root>
 *     <Menu.Trigger render={<Button>Actions ▾</Button>} />
 *     <Menu.Popup>
 *       <Menu.Item onClick={...}>Rename</Menu.Item>
 *       <Menu.Item>Duplicate</Menu.Item>
 *       <Menu.Separator />
 *       <Menu.CheckboxItem checked={...}>Show archived</Menu.CheckboxItem>
 *       <Menu.SubmenuRoot>
 *         <Menu.SubmenuTrigger>Move to…</Menu.SubmenuTrigger>
 *         <Menu.Popup>
 *           <Menu.Item>Inbox</Menu.Item>
 *         </Menu.Popup>
 *       </Menu.SubmenuRoot>
 *     </Menu.Popup>
 *   </Menu.Root>
 *
 * Popup folds in Portal + Positioner (like Select.Popup); pass side/align to
 * reposition. Unstyled Base parts are exported for full-anatomy composition.
 */

const itemClasses =
  "flex cursor-pointer select-none items-center gap-2 px-3 py-1 text-sm text-ink outline-none " +
  "data-highlighted:bg-ink data-highlighted:text-paper data-disabled:opacity-40";

function Popup({
  className,
  children,
  side,
  align,
  sideOffset = 4,
  ...props
}: Omit<BaseMenu.Popup.Props, "className"> & {
  className?: string;
  children?: ReactNode;
  side?: BaseMenu.Positioner.Props["side"];
  align?: BaseMenu.Positioner.Props["align"];
  sideOffset?: BaseMenu.Positioner.Props["sideOffset"];
}) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner
        className="z-50 outline-none"
        side={side}
        align={align}
        sideOffset={sideOffset}
      >
        <BaseMenu.Popup
          className={cx(
            "min-w-40 rounded-lofi border-2 border-ink bg-paper py-1",
            className,
          )}
          {...props}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

function Item({ className, ...props }: Omit<BaseMenu.Item.Props, "className"> & { className?: string }) {
  return <BaseMenu.Item className={cx(itemClasses, className)} {...props} />;
}

function LinkItem({ className, ...props }: Omit<BaseMenu.LinkItem.Props, "className"> & { className?: string }) {
  return <BaseMenu.LinkItem className={cx(itemClasses, className)} {...props} />;
}

function Separator({ className, ...props }: Omit<BaseMenu.Separator.Props, "className"> & { className?: string }) {
  return (
    <BaseMenu.Separator
      className={cx("my-1 border-t-2 border-line-soft", className)}
      {...props}
    />
  );
}

function GroupLabel({ className, ...props }: Omit<BaseMenu.GroupLabel.Props, "className"> & { className?: string }) {
  return (
    <BaseMenu.GroupLabel
      className={cx(
        "px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-faint",
        className,
      )}
      {...props}
    />
  );
}

/** Left gutter keeps labels aligned whether or not the mark is showing. */
function CheckboxItem({
  className,
  children,
  ...props
}: Omit<BaseMenu.CheckboxItem.Props, "className"> & {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <BaseMenu.CheckboxItem className={cx(itemClasses, className)} {...props}>
      <span className="w-4 shrink-0 font-bold">
        <BaseMenu.CheckboxItemIndicator>✓</BaseMenu.CheckboxItemIndicator>
      </span>
      {children}
    </BaseMenu.CheckboxItem>
  );
}

function RadioItem({
  className,
  children,
  ...props
}: Omit<BaseMenu.RadioItem.Props, "className"> & {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <BaseMenu.RadioItem className={cx(itemClasses, className)} {...props}>
      <span className="w-4 shrink-0 font-bold">
        <BaseMenu.RadioItemIndicator>●</BaseMenu.RadioItemIndicator>
      </span>
      {children}
    </BaseMenu.RadioItem>
  );
}

function SubmenuTrigger({
  className,
  children,
  ...props
}: Omit<BaseMenu.SubmenuTrigger.Props, "className"> & {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <BaseMenu.SubmenuTrigger
      className={cx(itemClasses, "justify-between", className)}
      {...props}
    >
      {children}
      <span aria-hidden>▸</span>
    </BaseMenu.SubmenuTrigger>
  );
}

export const Menu = {
  Root: BaseMenu.Root,
  Trigger: BaseMenu.Trigger,
  Popup,
  Item,
  LinkItem,
  Separator,
  Group: BaseMenu.Group,
  GroupLabel,
  CheckboxItem,
  RadioGroup: BaseMenu.RadioGroup,
  RadioItem,
  SubmenuRoot: BaseMenu.SubmenuRoot,
  SubmenuTrigger,
  // Unstyled Base parts for full-anatomy composition.
  Portal: BaseMenu.Portal,
  Positioner: BaseMenu.Positioner,
  Arrow: BaseMenu.Arrow,
  Backdrop: BaseMenu.Backdrop,
};
