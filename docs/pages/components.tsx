import { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Divider,
  Field,
  ImagePlaceholder,
  Input,
  Modal,
  Radio,
  Select,
  Switch,
  Table,
  Tabs,
  TBody,
  TD,
  TextPlaceholder,
  TH,
  THead,
  TR,
  Textarea,
} from "../../src";
import { PropsTable } from "../props";
import { Example, PageHeader, SectionTitle } from "../ui";

export function ButtonDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Button">
        The one interactive primitive every prototype needs. Three variants,
        three sizes, no icons or loading states: if the prototype question
        involves those, it is past lo-fi.
      </PageHeader>
      <Example
        title="Variants"
        code={`<Button variant="solid">Solid</Button>
<Button>Outline</Button>
<Button variant="ghost">Ghost</Button>`}
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="solid">Solid</Button>
          <Button>Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Example>
      <Example
        title="Sizes & states"
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Example>
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        props={[
          {
            name: "variant",
            type: '"solid" | "outline" | "ghost"',
            default: '"outline"',
            description: "Visual weight. Solid is the primary action.",
          },
          {
            name: "size",
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description: "Padding and text size.",
          },
          {
            name: "...rest",
            type: "ButtonHTMLAttributes",
            description: "Everything a native button accepts.",
          },
        ]}
      />
    </div>
  );
}

export function FormDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Form controls">
        Input, Textarea, Select, and the Field wrapper that labels them. All
        take native props; Field adds the uppercase label and an optional hint.
      </PageHeader>
      <Example
        title="Field + controls"
        code={`<Field label="Name" hint="As it appears on the card">
  <Input placeholder="Jane Doe" />
</Field>
<Field label="Plan">
  <Select defaultValue="pro">
    <option value="free">Free</option>
    <option value="pro">Pro</option>
  </Select>
</Field>
<Field label="Notes">
  <Textarea placeholder="Anything else…" />
</Field>`}
      >
        <div className="grid max-w-lg gap-4">
          <Field label="Name" hint="As it appears on the card">
            <Input placeholder="Jane Doe" />
          </Field>
          <Field label="Plan">
            <Select defaultValue="pro">
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="team">Team</option>
            </Select>
          </Field>
          <Field label="Notes">
            <Textarea placeholder="Anything else…" />
          </Field>
        </div>
      </Example>
      <SectionTitle>Props (Field)</SectionTitle>
      <PropsTable
        props={[
          {
            name: "label",
            type: "string",
            description: "Uppercase label above the control.",
          },
          {
            name: "hint",
            type: "string",
            description: "Faint helper text below the control.",
          },
        ]}
      />
    </div>
  );
}

export function ChoiceDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Checkbox, Radio, Switch">
        Selection controls drawn from scratch so they match the wireframe
        aesthetic instead of the browser default. Each takes a label plus
        native input props.
      </PageHeader>
      <Example
        title="All three"
        code={`<Checkbox label="Email me updates" defaultChecked />
<Radio name="freq" label="Weekly" defaultChecked />
<Radio name="freq" label="Monthly" />
<Switch label="Dark mode" />`}
      >
        <div className="flex flex-wrap gap-8">
          <Checkbox label="Email me updates" defaultChecked />
          <Radio name="docs-freq" label="Weekly" defaultChecked />
          <Radio name="docs-freq" label="Monthly" />
          <Switch label="Dark mode" />
        </div>
      </Example>
    </div>
  );
}

export function CardDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Card">
        The workhorse container. Compose Header, Title, Body, and Footer; skip
        any part the sketch does not need.
      </PageHeader>
      <Example
        title="Full composition"
        code={`<Card>
  <CardHeader>
    <CardTitle>Revenue</CardTitle>
    <Badge>30 days</Badge>
  </CardHeader>
  <CardBody>
    <ImagePlaceholder label="Chart" />
  </CardBody>
  <CardFooter>
    <Button variant="ghost" size="sm">View report</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <Badge>30 days</Badge>
          </CardHeader>
          <CardBody>
            <ImagePlaceholder label="Chart" />
          </CardBody>
          <CardFooter>
            <Button variant="ghost" size="sm">
              View report
            </Button>
          </CardFooter>
        </Card>
      </Example>
      <Example
        title="Body only"
        code={`<Card>
  <CardBody>
    <TextPlaceholder lines={2} />
  </CardBody>
</Card>`}
      >
        <Card className="max-w-sm">
          <CardBody>
            <TextPlaceholder lines={2} />
          </CardBody>
        </Card>
      </Example>
    </div>
  );
}

export function BadgeDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Badge">
        Status and category labels. Uppercase, tiny, two weights.
      </PageHeader>
      <Example
        code={`<Badge>Outline</Badge>
<Badge variant="solid">Solid</Badge>`}
      >
        <div className="flex gap-3">
          <Badge>Pending</Badge>
          <Badge>Shipped</Badge>
          <Badge variant="solid">Refunded</Badge>
        </div>
      </Example>
    </div>
  );
}

export function PlaceholderDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Placeholders">
        Stand-ins for content the prototype must not decide: images get a
        hatched box with a corner-to-corner X, copy gets greeked gray bars,
        people get initialed circles.
      </PageHeader>
      <Example
        title="ImagePlaceholder"
        code={`<ImagePlaceholder label="Hero" />
<ImagePlaceholder label="Chart" className="aspect-square" />`}
      >
        <div className="grid max-w-lg grid-cols-2 items-start gap-4">
          <ImagePlaceholder label="Hero" />
          <ImagePlaceholder label="Chart" className="aspect-square" />
        </div>
      </Example>
      <Example
        title="TextPlaceholder"
        code={`<TextPlaceholder lines={4} />`}
      >
        <div className="max-w-sm">
          <TextPlaceholder lines={4} />
        </div>
      </Example>
      <Example
        title="Avatar"
        code={`<Avatar initials="AL" size="lg" />
<Avatar initials="GH" />
<Avatar size="sm" />   {/* empty = hatched */}`}
      >
        <div className="flex items-center gap-3">
          <Avatar initials="AL" size="lg" />
          <Avatar initials="GH" />
          <Avatar size="sm" />
        </div>
      </Example>
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        props={[
          {
            name: "label",
            type: "string",
            description: "ImagePlaceholder: caption chip over the hatch.",
          },
          {
            name: "lines",
            type: "number",
            default: "3",
            description: "TextPlaceholder: bar count; last bar is short.",
          },
          {
            name: "initials",
            type: "string",
            description: "Avatar: text inside the circle; empty shows hatch.",
          },
          {
            name: "size",
            type: '"sm" | "md" | "lg"',
            default: '"md"',
            description: "Avatar diameter.",
          },
        ]}
      />
    </div>
  );
}

const orders = [
  { id: "#1042", customer: "Ada Lovelace", status: "Shipped", total: "$120.00" },
  { id: "#1041", customer: "Grace Hopper", status: "Pending", total: "$86.50" },
  { id: "#1040", customer: "Alan Turing", status: "Shipped", total: "$302.10" },
];

export function TableDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Table">
        Thin wrappers over native table elements: Table, THead, TBody, TR, TH,
        TD. The outer wrapper scrolls horizontally so wide sketches stay
        usable.
      </PageHeader>
      <Example
        code={`<Table>
  <THead>
    <TR><TH>Order</TH><TH>Customer</TH><TH>Status</TH><TH>Total</TH></TR>
  </THead>
  <TBody>
    <TR>
      <TD>#1042</TD>
      <TD>Ada Lovelace</TD>
      <TD><Badge>Shipped</Badge></TD>
      <TD>$120.00</TD>
    </TR>
  </TBody>
</Table>`}
      >
        <Table>
          <THead>
            <TR>
              <TH>Order</TH>
              <TH>Customer</TH>
              <TH>Status</TH>
              <TH className="text-right">Total</TH>
            </TR>
          </THead>
          <TBody>
            {orders.map((o) => (
              <TR key={o.id}>
                <TD className="font-mono">{o.id}</TD>
                <TD className="text-ink">{o.customer}</TD>
                <TD>
                  <Badge>{o.status}</Badge>
                </TD>
                <TD className="text-right font-mono">{o.total}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Example>
    </div>
  );
}

export function TabsDocs() {
  const [tab, setTab] = useState("All");
  return (
    <div className="space-y-8">
      <PageHeader title="Tabs">
        Controlled underline tabs. You own the state; the component only draws
        the strip.
      </PageHeader>
      <Example
        code={`const [tab, setTab] = useState("All");

<Tabs tabs={["All", "Shipped", "Pending"]} active={tab} onChange={setTab} />`}
      >
        <div className="space-y-4">
          <Tabs
            tabs={["All", "Shipped", "Pending"]}
            active={tab}
            onChange={setTab}
          />
          <p className="text-sm text-ink-soft">
            Active tab: <strong className="text-ink">{tab}</strong>
          </p>
        </div>
      </Example>
    </div>
  );
}

export function DividerDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Divider">
        Horizontal rule, optionally with a centered uppercase label.
      </PageHeader>
      <Example
        code={`<Divider />
<Divider label="Or continue with" />`}
      >
        <div className="max-w-md space-y-6">
          <Divider />
          <Divider label="Or continue with" />
        </div>
      </Example>
    </div>
  );
}

export function ModalDocs() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-8">
      <PageHeader title="Modal">
        Dimmed backdrop, hard-bordered panel. Escape and backdrop click both
        close it. Controlled: you own the open state.
      </PageHeader>
      <Example
        code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>
<Modal open={open} onClose={() => setOpen(false)} title="Confirm action">
  ...
</Modal>`}
      >
        <Button onClick={() => setOpen(true)}>Open modal</Button>
      </Example>
      <Modal open={open} onClose={() => setOpen(false)} title="Confirm action">
        <div className="space-y-4">
          <p className="text-sm text-ink-soft">
            This is a lo-fi modal. Escape or backdrop click closes it.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="solid" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
