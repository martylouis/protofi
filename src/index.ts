// Protofi — lo-fi prototype component library, built on Base UI.
// Behavior (ARIA, focus, keyboard, positioning) comes from @base-ui/react;
// the lo-fi skin and the prototype workflow are ours.

// Lo-fi primitives (no behavior to outsource)
export { Button, type ButtonProps } from "./components/Button";
export {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
} from "./components/Card";
export { Badge, type BadgeProps } from "./components/Badge";
export {
  ImagePlaceholder,
  TextPlaceholder,
  Avatar,
  type ImagePlaceholderProps,
  type TextPlaceholderProps,
  type AvatarProps,
} from "./components/Placeholder";
export { Table, THead, TBody, TR, TH, TD } from "./components/Table";
export {
  Breadcrumbs,
  type BreadcrumbsRootProps,
  type BreadcrumbsItemProps,
} from "./components/Breadcrumbs";

// Base UI-backed components, lo-fi styled
export { Input, Textarea, type InputProps } from "./components/Input";
export { Field } from "./components/Field";
export {
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  type CheckboxProps,
  type RadioProps,
  type RadioGroupProps,
  type SwitchProps,
} from "./components/Choice";
export { Select } from "./components/Select";
export { Menu } from "./components/Menu";
export { Tabs } from "./components/Tabs";
export { Dialog } from "./components/Dialog";
export {
  Drawer,
  type DrawerRootProps,
  type DrawerSide,
} from "./components/Drawer";
export { Divider, type DividerProps } from "./components/Divider";

// Prototype infrastructure (variant switching per the prototype skill)
export { useVariant, type UseVariantResult } from "./prototype/useVariant";
export {
  PrototypeSwitcher,
  type PrototypeSwitcherProps,
} from "./prototype/PrototypeSwitcher";
export {
  Variants,
  type VariantsProps,
  type VariantDef,
} from "./prototype/Variants";

export { cx } from "./cx";
