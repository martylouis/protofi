import type { HTMLAttributes, LiHTMLAttributes } from "react";
import { cx } from "../cx";

/**
 * Hand-rolled breadcrumb trail (Base UI has no Breadcrumb part), following
 * the Base UI part anatomy anyway:
 *
 *   <Breadcrumbs.Root>
 *     <Breadcrumbs.Item href="/settings">Settings</Breadcrumbs.Item>
 *     <Breadcrumbs.Item>Profile</Breadcrumbs.Item>
 *   </Breadcrumbs.Root>
 *
 * "/" separators are CSS-injected between items. An Item without href is the
 * current page: rendered as plain text with aria-current="page".
 */

export interface BreadcrumbsRootProps
  extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  className?: string;
}

function Root({ className, children, ...props }: BreadcrumbsRootProps) {
  return (
    <nav aria-label="Breadcrumbs" className={className} {...props}>
      <ol className="flex flex-wrap items-center text-sm">{children}</ol>
    </nav>
  );
}

export interface BreadcrumbsItemProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, "className"> {
  /** Link target; omit on the last item to mark it as the current page. */
  href?: string;
  className?: string;
}

function Item({ href, className, children, ...props }: BreadcrumbsItemProps) {
  return (
    <li
      className={cx(
        "flex items-center [&+li]:before:mx-2 [&+li]:before:text-ink-faint [&+li]:before:content-['/']",
        className,
      )}
      {...props}
    >
      {href ? (
        <a href={href} className="text-ink-soft underline-offset-2 hover:text-ink hover:underline">
          {children}
        </a>
      ) : (
        <span aria-current="page" className="font-medium text-ink">
          {children}
        </span>
      )}
    </li>
  );
}

export const Breadcrumbs = {
  Root,
  Item,
};
