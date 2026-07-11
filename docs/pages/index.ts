import type { ReactNode } from "react";
import { Introduction, Principles } from "./guide";
import {
  BadgeDocs,
  BreadcrumbsDocs,
  ButtonDocs,
  CardDocs,
  ChoiceDocs,
  DialogDocs,
  DividerDocs,
  DrawerDocs,
  FormDocs,
  MenuDocs,
  PlaceholderDocs,
  TableDocs,
  TabsDocs,
} from "./components";
import { SwitcherDocs, UseVariantDocs, VariantsDocs } from "./prototypes";
import { DashboardShellDocs } from "./blocks";
import { TokensDocs } from "./tokens";
import { TypographyDocs } from "./typography";

export interface DocPage {
  slug: string;
  title: string;
  section: "Guide" | "Components" | "Blocks" | "Prototypes";
  render: () => ReactNode;
}

export const PAGES: DocPage[] = [
  { slug: "introduction", title: "Introduction", section: "Guide", render: Introduction },
  { slug: "principles", title: "Principles", section: "Guide", render: Principles },
  { slug: "tokens", title: "Design tokens", section: "Guide", render: TokensDocs },
  { slug: "typography", title: "Typography", section: "Guide", render: TypographyDocs },

  { slug: "button", title: "Button", section: "Components", render: ButtonDocs },
  { slug: "forms", title: "Field / Input / Select", section: "Components", render: FormDocs },
  { slug: "choice", title: "Checkbox / Radio / Switch", section: "Components", render: ChoiceDocs },
  { slug: "card", title: "Card", section: "Components", render: CardDocs },
  { slug: "badge", title: "Badge", section: "Components", render: BadgeDocs },
  { slug: "placeholders", title: "Placeholders", section: "Components", render: PlaceholderDocs },
  { slug: "table", title: "Table", section: "Components", render: TableDocs },
  { slug: "tabs", title: "Tabs", section: "Components", render: TabsDocs },
  { slug: "divider", title: "Divider", section: "Components", render: DividerDocs },
  { slug: "dialog", title: "Dialog", section: "Components", render: DialogDocs },
  { slug: "drawer", title: "Drawer", section: "Components", render: DrawerDocs },
  { slug: "menu", title: "Menu", section: "Components", render: MenuDocs },
  { slug: "breadcrumbs", title: "Breadcrumbs", section: "Components", render: BreadcrumbsDocs },

  { slug: "dashboard-shell", title: "Dashboard Shell", section: "Blocks", render: DashboardShellDocs },

  { slug: "variants", title: "Variants", section: "Prototypes", render: VariantsDocs },
  { slug: "switcher", title: "PrototypeSwitcher", section: "Prototypes", render: SwitcherDocs },
  { slug: "use-variant", title: "useVariant", section: "Prototypes", render: UseVariantDocs },
];

export const SECTIONS = ["Guide", "Components", "Blocks", "Prototypes"] as const;
