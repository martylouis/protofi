import { Field as BaseField } from "@base-ui/react/field";
import { cx } from "../cx";

/**
 * Lo-fi-styled Base UI Field parts. Compose them:
 *
 *   <Field.Root>
 *     <Field.Label>Name</Field.Label>
 *     <Input placeholder="Jane Doe" />
 *     <Field.Description>As it appears on the card</Field.Description>
 *     <Field.Error match="valueMissing">Required</Field.Error>
 *   </Field.Root>
 *
 * Any Base UI control (Input, Checkbox, Switch, Select, RadioGroup) dropped
 * inside Root is labeled and validated automatically.
 */

function Root({ className, ...props }: Omit<BaseField.Root.Props, "className"> & { className?: string }) {
  return <BaseField.Root className={cx("block space-y-1", className)} {...props} />;
}

function Label({ className, ...props }: Omit<BaseField.Label.Props, "className"> & { className?: string }) {
  return (
    <BaseField.Label
      className={cx(
        "block text-xs font-bold uppercase tracking-wide text-ink",
        className,
      )}
      {...props}
    />
  );
}

function Description({ className, ...props }: Omit<BaseField.Description.Props, "className"> & { className?: string }) {
  return (
    <BaseField.Description
      className={cx("text-xs text-ink-faint", className)}
      {...props}
    />
  );
}

function ErrorPart({ className, ...props }: Omit<BaseField.Error.Props, "className"> & { className?: string }) {
  return (
    <BaseField.Error
      className={cx("text-xs font-bold text-ink underline decoration-2", className)}
      {...props}
    />
  );
}

export const Field = {
  Root,
  Label,
  Description,
  Error: ErrorPart,
  Control: BaseField.Control,
  Validity: BaseField.Validity,
  Item: BaseField.Item,
};
