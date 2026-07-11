import { Select as BaseSelect } from "@base-ui/react/select";
import type { ReactNode } from "react";
import { cx } from "../cx";
import { fieldControlClasses } from "./Input";

/**
 * Lo-fi-styled Base UI Select parts:
 *
 *   <Select.Root items={items} defaultValue="pro">
 *     <Select.Trigger />
 *     <Select.Popup>
 *       <Select.Item value="free">Free</Select.Item>
 *       <Select.Item value="pro">Pro</Select.Item>
 *     </Select.Popup>
 *   </Select.Root>
 *
 * Trigger includes Value + Icon; Popup includes Portal + Positioner. Use the
 * Base parts (exported unstyled) when you need the full anatomy.
 */

function Trigger({
  className,
  placeholder,
  children,
  ...props
}: Omit<BaseSelect.Trigger.Props, "className"> & {
  className?: string;
  placeholder?: string;
}) {
  return (
    <BaseSelect.Trigger
      className={cx(
        fieldControlClasses,
        "flex cursor-pointer items-center justify-between gap-2 text-left data-placeholder:text-ink-faint",
        className,
      )}
      {...props}
    >
      {children ?? <BaseSelect.Value placeholder={placeholder} />}
      <BaseSelect.Icon className="text-xs">▾</BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

function Popup({
  className,
  children,
  ...props
}: Omit<BaseSelect.Popup.Props, "className"> & {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner
        className="z-50 outline-none"
        alignItemWithTrigger={false}
        sideOffset={4}
      >
        <BaseSelect.Popup
          className={cx(
            "min-w-(--anchor-width) rounded-lofi border-2 border-ink bg-paper py-1",
            className,
          )}
          {...props}
        >
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

function Item({
  className,
  children,
  ...props
}: Omit<BaseSelect.Item.Props, "className"> & {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <BaseSelect.Item
      className={cx(
        "flex cursor-pointer items-center justify-between gap-3 px-3 py-1 text-sm text-ink",
        "data-highlighted:bg-ink data-highlighted:text-paper data-disabled:opacity-40",
        className,
      )}
      {...props}
    >
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="font-bold">✓</BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
}

export const Select = {
  Root: BaseSelect.Root,
  Trigger,
  Popup,
  Item,
  // Unstyled Base parts for full-anatomy composition.
  Value: BaseSelect.Value,
  Icon: BaseSelect.Icon,
  Portal: BaseSelect.Portal,
  Positioner: BaseSelect.Positioner,
  Group: BaseSelect.Group,
  GroupLabel: BaseSelect.GroupLabel,
  Separator: BaseSelect.Separator,
};
