import { Input as BaseInput } from "@base-ui/react/input";
import type { TextareaHTMLAttributes } from "react";
import { cx } from "../cx";

export const fieldControlClasses =
  "w-full rounded-lofi border-2 border-ink bg-paper px-3 py-1.5 text-sm text-ink " +
  "placeholder:text-ink-faint focus:outline-2 focus:outline-offset-2 focus:outline-ink " +
  "disabled:cursor-not-allowed disabled:bg-fill disabled:opacity-60 " +
  "data-invalid:border-dashed";

export interface InputProps extends Omit<BaseInput.Props, "className"> {
  className?: string;
}

/** Base UI Input: integrates with Field.Root (validation, label association). */
export function Input({ className, ...props }: InputProps) {
  return <BaseInput className={cx(fieldControlClasses, className)} {...props} />;
}

/** Plain native textarea; Base UI has no textarea primitive. */
export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cx(fieldControlClasses, "min-h-20", className)}
      {...props}
    />
  );
}
