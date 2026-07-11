import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { createContext, useContext } from "react";
import { cx } from "../cx";

/**
 * Lo-fi-styled Base UI Drawer. Slides in over the page; swipe-to-dismiss,
 * focus trap, and ARIA come from Base UI. Same composition as Dialog, plus
 * an Actions bar pinned at the bottom:
 *
 *   <Drawer.Root side="right">
 *     <Drawer.Trigger render={<Button>Edit</Button>} />
 *     <Drawer.Portal>
 *       <Drawer.Backdrop />
 *       <Drawer.Popup>
 *         <Drawer.Header>
 *           <Drawer.Title>Edit user</Drawer.Title>
 *           <Drawer.Close aria-label="Close">×</Drawer.Close>
 *         </Drawer.Header>
 *         <Drawer.Body>…</Drawer.Body>
 *         <Drawer.Actions>
 *           <Drawer.Close render={<Button variant="ghost">Cancel</Button>} />
 *           <Button variant="solid">Save</Button>
 *         </Drawer.Actions>
 *       </Drawer.Popup>
 *     </Drawer.Portal>
 *   </Drawer.Root>
 *
 * `side` lives on Root so placement and swipe direction always agree.
 * Snap points, indents, and grab handles are deliberately out of scope;
 * import the Base parts directly if a prototype needs them.
 */

export type DrawerSide = "right" | "bottom";

const SideContext = createContext<DrawerSide>("right");

const swipeFor: Record<DrawerSide, "right" | "down"> = {
  right: "right",
  bottom: "down",
};

export interface DrawerRootProps extends BaseDrawer.Root.Props {
  /** Edge the drawer slides in from; also sets the swipe-dismiss direction. */
  side?: DrawerSide;
}

function Root({ side = "right", swipeDirection, ...props }: DrawerRootProps) {
  return (
    <SideContext.Provider value={side}>
      <BaseDrawer.Root
        swipeDirection={swipeDirection ?? swipeFor[side]}
        {...props}
      />
    </SideContext.Provider>
  );
}

function Backdrop({ className, ...props }: Omit<BaseDrawer.Backdrop.Props, "className"> & { className?: string }) {
  return (
    <BaseDrawer.Backdrop
      className={cx(
        "fixed inset-0 bg-ink/40 transition-opacity duration-300",
        "data-starting-style:opacity-0 data-ending-style:opacity-0 data-swiping:duration-0",
        className,
      )}
      {...props}
    />
  );
}

const viewportSide: Record<DrawerSide, string> = {
  right: "justify-end items-stretch",
  bottom: "items-end justify-stretch",
};

const popupSide: Record<DrawerSide, string> = {
  right: cx(
    "h-full w-96 max-w-[85vw] border-l-2 border-ink",
    "[transform:translateX(var(--drawer-swipe-movement-x))]",
    "data-starting-style:[transform:translateX(100%)] data-ending-style:[transform:translateX(100%)]",
  ),
  bottom: cx(
    "w-full max-h-[85vh] border-t-2 border-ink",
    "[transform:translateY(var(--drawer-swipe-movement-y))]",
    "data-starting-style:[transform:translateY(100%)] data-ending-style:[transform:translateY(100%)]",
  ),
};

/** Includes Base UI's Viewport and Content wrappers so usage mirrors Dialog. */
function Popup({ className, children, ...props }: Omit<BaseDrawer.Popup.Props, "className"> & { className?: string }) {
  const side = useContext(SideContext);
  return (
    <BaseDrawer.Viewport className={cx("fixed inset-0 flex", viewportSide[side])}>
      <BaseDrawer.Popup
        className={cx(
          "bg-paper outline-none transition-transform duration-300 ease-out",
          "data-swiping:duration-0 data-swiping:select-none",
          popupSide[side],
          className,
        )}
        {...props}
      >
        <BaseDrawer.Content className="flex h-full min-h-0 flex-col">
          {children}
        </BaseDrawer.Content>
      </BaseDrawer.Popup>
    </BaseDrawer.Viewport>
  );
}

/** Title bar: compose Drawer.Title and Drawer.Close inside. Plain div. */
function Header({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "flex shrink-0 items-center justify-between border-b-2 border-ink px-4 py-2.5",
        className,
      )}
      {...props}
    />
  );
}

function Title({ className, ...props }: Omit<BaseDrawer.Title.Props, "className"> & { className?: string }) {
  return (
    <BaseDrawer.Title
      className={cx("text-sm font-bold uppercase tracking-wide", className)}
      {...props}
    />
  );
}

function Description({ className, ...props }: Omit<BaseDrawer.Description.Props, "className"> & { className?: string }) {
  return (
    <BaseDrawer.Description
      className={cx("text-sm text-ink-soft", className)}
      {...props}
    />
  );
}

function Close({ className, ...props }: Omit<BaseDrawer.Close.Props, "className"> & { className?: string }) {
  return (
    <BaseDrawer.Close
      className={cx(
        "cursor-pointer px-1 text-lg leading-none text-ink hover:text-ink-faint",
        className,
      )}
      {...props}
    />
  );
}

/** Scrollable content area between Header and Actions. Plain div. */
function Body({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("min-h-0 flex-1 overflow-y-auto overscroll-contain p-4", className)}
      {...props}
    />
  );
}

/** Action bar pinned at the bottom. Plain div. */
function Actions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "flex shrink-0 items-center justify-end gap-2 border-t-2 border-line-soft px-4 py-2.5",
        className,
      )}
      {...props}
    />
  );
}

export const Drawer = {
  Root,
  Trigger: BaseDrawer.Trigger,
  Portal: BaseDrawer.Portal,
  Backdrop,
  Popup,
  Header,
  Title,
  Description,
  Close,
  Body,
  Actions,
};
