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

/** Lo-fi checkbox on Base UI: ink-filled square with a paper check mark. */
export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className={cx(labelClasses, className)}>
      <BaseCheckbox.Root
        className={cx(
          "relative size-4 shrink-0 border-2 border-ink bg-paper data-checked:bg-ink",
          focusRing,
        )}
        {...props}
      >
        <BaseCheckbox.Indicator className="absolute inset-0 flex items-center justify-center text-paper">
          <svg
            viewBox="0 0 10 10"
            className="size-2.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M1 5.5 L4 8 L9 2" />
          </svg>
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
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
          "relative size-4 shrink-0 rounded-full border-2 border-ink bg-paper",
          focusRing,
        )}
        {...props}
      >
        {/* Absolutely centered: the hidden input inside Root skews flex centering. */}
        <BaseRadio.Indicator className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
      </BaseRadio.Root>
      {label}
    </label>
  );
}

export interface SwitchProps extends Omit<BaseSwitch.Root.Props, "className"> {
  label: string;
  className?: string;
}

/** Lo-fi toggle on Base UI: round track, sliding round thumb. */
export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <label className={cx(labelClasses, className)}>
      <BaseSwitch.Root
        className={cx(
          "relative inline-block h-5 w-9 shrink-0 rounded-full border-2 border-ink bg-paper data-checked:bg-fill-strong",
          focusRing,
        )}
        {...props}
      >
        <BaseSwitch.Thumb className="absolute left-0.5 top-0.5 size-3 rounded-full bg-ink transition-transform data-checked:translate-x-4" />
      </BaseSwitch.Root>
      {label}
    </label>
  );
}
