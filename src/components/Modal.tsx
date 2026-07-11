import { useEffect } from "react";
import type { ReactNode } from "react";
import { cx } from "../cx";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Lo-fi dialog: dimmed backdrop, hard-bordered panel, Escape to close. */
export function Modal({ open, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal
        aria-label={title}
        className={cx(
          "w-full max-w-md rounded-lofi border-2 border-ink bg-paper",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-center justify-between border-b-2 border-ink px-4 py-2.5">
            <h2 className="text-sm font-bold uppercase tracking-wide">{title}</h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="cursor-pointer px-1 text-lg leading-none text-ink hover:text-ink-faint"
            >
              ×
            </button>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
