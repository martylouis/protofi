import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { cx } from "../cx";

const labelClasses =
  "inline-flex cursor-pointer select-none items-center gap-2 text-sm text-ink " +
  "has-data-disabled:cursor-not-allowed has-data-disabled:opacity-40";

const focusRing =
  "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink";

export interface CheckboxProps
  extends Omit<BaseCheckbox.Root.Props, "className"> {
  label: string;
  className?: string;
}

/** Lo-fi checkbox on Base UI: hidden input, solid-fill square when checked. */
export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className={cx(labelClasses, className)}>
      <BaseCheckbox.Root
        className={cx(
          "size-4 shrink-0 border-2 border-ink bg-paper data-checked:bg-ink",
          focusRing,
        )}
        {...props}
      />
      {label}
    </label>
  );
}

export type RadioGroupProps = BaseRadioGroup.Props;

/** Holds the shared value for a set of Radios. */
export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <BaseRadioGroup
      className={cx("flex flex-wrap gap-6", className as string)}
      {...props}
    />
  );
}

export interface RadioProps extends Omit<BaseRadio.Root.Props, "className"> {
  label: string;
  className?: string;
}

/** Lo-fi radio on Base UI. Must live inside a RadioGroup. */
export function Radio({ label, className, ...props }: RadioProps) {
  return (
    <label className={cx(labelClasses, className)}>
      <BaseRadio.Root
        className={cx(
          "flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-paper",
          focusRing,
        )}
        {...props}
      >
        <BaseRadio.Indicator className="size-2 rounded-full bg-ink" />
      </BaseRadio.Root>
      {label}
    </label>
  );
}

export interface SwitchProps extends Omit<BaseSwitch.Root.Props, "className"> {
  label: string;
  className?: string;
}

/** Lo-fi toggle on Base UI: sliding square thumb. */
export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <label className={cx(labelClasses, className)}>
      <BaseSwitch.Root
        className={cx(
          "relative inline-block h-5 w-9 shrink-0 rounded-lofi border-2 border-ink bg-paper data-checked:bg-fill-strong",
          focusRing,
        )}
        {...props}
      >
        <BaseSwitch.Thumb className="absolute left-0.5 top-0.5 size-3 bg-ink transition-transform data-checked:translate-x-4" />
      </BaseSwitch.Root>
      {label}
    </label>
  );
}
