import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { cx } from "../cx";

/**
 * Lo-fi-styled Base UI Dialog. Focus trap, scroll lock, Escape, and ARIA all
 * come from Base UI:
 *
 *   <Dialog.Root>
 *     <Dialog.Trigger render={<Button>Open</Button>} />
 *     <Dialog.Portal>
 *       <Dialog.Backdrop />
 *       <Dialog.Popup>
 *         <Dialog.Header>
 *           <Dialog.Title>Confirm action</Dialog.Title>
 *           <Dialog.Close aria-label="Close">×</Dialog.Close>
 *         </Dialog.Header>
 *         …
 *       </Dialog.Popup>
 *     </Dialog.Portal>
 *   </Dialog.Root>
 */

function Backdrop({ className, ...props }: Omit<BaseDialog.Backdrop.Props, "className"> & { className?: string }) {
  return (
    <BaseDialog.Backdrop
      className={cx("fixed inset-0 bg-ink/40", className)}
      {...props}
    />
  );
}

function Popup({ className, ...props }: Omit<BaseDialog.Popup.Props, "className"> & { className?: string }) {
  return (
    <BaseDialog.Popup
      className={cx(
        "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2",
        "rounded-lofi border-2 border-ink bg-paper outline-none",
        className,
      )}
      {...props}
    />
  );
}

/** Title bar: composes Dialog.Title and Dialog.Close inside. Plain div. */
function Header({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "flex items-center justify-between border-b-2 border-ink px-4 py-2.5",
        className,
      )}
      {...props}
    />
  );
}

function Title({ className, ...props }: Omit<BaseDialog.Title.Props, "className"> & { className?: string }) {
  return (
    <BaseDialog.Title
      className={cx("text-sm font-bold uppercase tracking-wide", className)}
      {...props}
    />
  );
}

function Description({ className, ...props }: Omit<BaseDialog.Description.Props, "className"> & { className?: string }) {
  return (
    <BaseDialog.Description
      className={cx("text-sm text-ink-soft", className)}
      {...props}
    />
  );
}

function Close({ className, ...props }: Omit<BaseDialog.Close.Props, "className"> & { className?: string }) {
  return (
    <BaseDialog.Close
      className={cx(
        "cursor-pointer px-1 text-lg leading-none text-ink hover:text-ink-faint",
        className,
      )}
      {...props}
    />
  );
}

/** Padded content area below the header. Plain div. */
function Body({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("p-4", className)} {...props} />;
}

export const Dialog = {
  Root: BaseDialog.Root,
  Trigger: BaseDialog.Trigger,
  Portal: BaseDialog.Portal,
  Backdrop,
  Popup,
  Header,
  Title,
  Description,
  Close,
  Body,
};
