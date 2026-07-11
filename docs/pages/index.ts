import type { ReactNode } from "react";
import { Introduction, Principles } from "./guide";
import {
  BadgeDocs,
  ButtonDocs,
  CardDocs,
  ChoiceDocs,
  DividerDocs,
  FormDocs,
  ModalDocs,
  PlaceholderDocs,
  TableDocs,
  TabsDocs,
} from "./components";
import { SwitcherDocs, UseVariantDocs, VariantsDocs } from "./prototypes";

export interface DocPage {
  slug: string;
  title: string;
  section: "Guide" | "Components" | "Prototypes";
  render: () => ReactNode;
}

export const PAGES: DocPage[] = [
  { slug: "introduction", title: "Introduction", section: "Guide", render: Introduction },
  { slug: "principles", title: "Principles", section: "Guide", render: Principles },

  { slug: "button", title: "Button", section: "Components", render: ButtonDocs },
  { slug: "forms", title: "Form controls", section: "Components", render: FormDocs },
  { slug: "choice", title: "Checkbox / Radio / Switch", section: "Components", render: ChoiceDocs },
  { slug: "card", title: "Card", section: "Components", render: CardDocs },
  { slug: "badge", title: "Badge", section: "Components", render: BadgeDocs },
  { slug: "placeholders", title: "Placeholders", section: "Components", render: PlaceholderDocs },
  { slug: "table", title: "Table", section: "Components", render: TableDocs },
  { slug: "tabs", title: "Tabs", section: "Components", render: TabsDocs },
  { slug: "divider", title: "Divider", section: "Components", render: DividerDocs },
  { slug: "modal", title: "Modal", section: "Components", render: ModalDocs },

  { slug: "variants", title: "Variants", section: "Prototypes", render: VariantsDocs },
  { slug: "switcher", title: "PrototypeSwitcher", section: "Prototypes", render: SwitcherDocs },
  { slug: "use-variant", title: "useVariant", section: "Prototypes", render: UseVariantDocs },
];

export const SECTIONS = ["Guide", "Components", "Prototypes"] as const;
