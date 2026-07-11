import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cx } from "../cx";

const fieldClasses =
  "w-full rounded-lofi border-2 border-ink bg-paper px-3 py-1.5 text-sm text-ink " +
  "placeholder:text-ink-faint focus:outline-2 focus:outline-offset-2 focus:outline-ink " +
  "disabled:cursor-not-allowed disabled:bg-fill disabled:opacity-60";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cx(fieldClasses, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={cx(fieldClasses, "min-h-20", className)} {...props} />
  );
}

export function Select({
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cx(fieldClasses, className)} {...props} />;
}
