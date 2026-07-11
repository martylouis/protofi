// Protofi — lo-fi prototype component library.

// Lo-fi primitives
export { Button, type ButtonProps } from "./components/Button";
export { Input, Textarea, Select } from "./components/Input";
export { Field, type FieldProps } from "./components/Field";
export { Checkbox, Radio, Switch } from "./components/Choice";
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
export { Tabs, type TabsProps } from "./components/Tabs";
export { Divider, type DividerProps } from "./components/Divider";
export { Modal, type ModalProps } from "./components/Modal";

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
