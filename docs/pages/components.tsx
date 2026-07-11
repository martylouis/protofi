import { useState } from "react";
import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  Divider,
  Drawer,
  Field,
  ImagePlaceholder,
  Input,
  Menu,
  Radio,
  RadioGroup,
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
        involves those, it is past lo-fi. Plain native button, no Base UI
        needed.
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
      <PageHeader title="Field, Input, Select">
        Built on Base UI Field, Input, and Select. Field.Root associates the
        label with whatever control sits inside it and owns validation; any
        Base UI-backed control (Input, Select, Checkbox, Switch) integrates
        automatically.
      </PageHeader>
      <Example
        title="Field + Input"
        code={`<Field.Root>
  <Field.Label>Name</Field.Label>
  <Input placeholder="Jane Doe" />
  <Field.Description>As it appears on the card</Field.Description>
</Field.Root>`}
      >
        <div className="grid max-w-lg gap-4">
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input placeholder="Jane Doe" />
            <Field.Description>As it appears on the card</Field.Description>
          </Field.Root>
          <Field.Root>
            <Field.Label>Notes</Field.Label>
            <Textarea placeholder="Anything else…" />
          </Field.Root>
        </div>
      </Example>
      <Example
        title="Validation"
        code={`<Field.Root validationMode="onBlur">
  <Field.Label>Email</Field.Label>
  <Input type="email" required placeholder="you@example.com" />
  <Field.Error match="valueMissing">Required</Field.Error>
  <Field.Error match="typeMismatch">Not an email address</Field.Error>
</Field.Root>`}
      >
        <div className="max-w-lg">
          <Field.Root validationMode="onBlur">
            <Field.Label>Email</Field.Label>
            <Input type="email" required placeholder="you@example.com" />
            <Field.Description>
              Blur the field while empty or invalid to see the error.
            </Field.Description>
            <Field.Error match="valueMissing">Required</Field.Error>
            <Field.Error match="typeMismatch">Not an email address</Field.Error>
          </Field.Root>
        </div>
      </Example>
      <Example
        title="Select"
        code={`<Field.Root>
  <Field.Label>Plan</Field.Label>
  <Select.Root defaultValue="pro">
    <Select.Trigger placeholder="Pick a plan" />
    <Select.Popup>
      <Select.Item value="free">Free</Select.Item>
      <Select.Item value="pro">Pro</Select.Item>
      <Select.Item value="team">Team</Select.Item>
    </Select.Popup>
  </Select.Root>
</Field.Root>`}
      >
        <div className="max-w-lg">
          <Field.Root>
            <Field.Label>Plan</Field.Label>
            <Select.Root defaultValue="pro">
              <Select.Trigger placeholder="Pick a plan" />
              <Select.Popup>
                <Select.Item value="free">Free</Select.Item>
                <Select.Item value="pro">Pro</Select.Item>
                <Select.Item value="team">Team</Select.Item>
              </Select.Popup>
            </Select.Root>
          </Field.Root>
        </div>
      </Example>
      <SectionTitle>Parts</SectionTitle>
      <PropsTable
        props={[
          {
            name: "Field.Root",
            type: "part",
            description:
              "Groups label + control + messages; owns validation (validate, validationMode).",
          },
          {
            name: "Field.Label / Description / Error",
            type: "part",
            description:
              "Error takes match: a ValidityState key like \"valueMissing\", or true.",
          },
          {
            name: "Select.Trigger",
            type: "part",
            description:
              "Renders Value + arrow icon; pass placeholder for empty state.",
          },
          {
            name: "Select.Popup",
            type: "part",
            description:
              "Includes Portal + Positioner; put Select.Item children inside.",
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
        Base UI primitives (hidden inputs, keyboard and form integration) in
        lo-fi clothes. Each takes a label prop and renders wrapped in a real
        label element. Radios live inside a RadioGroup, which holds the value.
      </PageHeader>
      <Example
        title="All three"
        code={`<Checkbox label="Email me updates" defaultChecked />

<RadioGroup defaultValue="weekly">
  <Radio value="weekly" label="Weekly" />
  <Radio value="monthly" label="Monthly" />
</RadioGroup>

<Switch label="Dark mode" />`}
      >
        <div className="flex flex-wrap items-center gap-8">
          <Checkbox label="Email me updates" defaultChecked />
          <RadioGroup defaultValue="weekly">
            <Radio value="weekly" label="Weekly" />
            <Radio value="monthly" label="Monthly" />
          </RadioGroup>
          <Switch label="Dark mode" />
        </div>
      </Example>
      <Example
        title="Controlled"
        code={`const [checked, setChecked] = useState(false);

<Switch
  label="Notifications"
  checked={checked}
  onCheckedChange={setChecked}
/>`}
      >
        <ControlledSwitchDemo />
      </Example>
      <SectionTitle>Props</SectionTitle>
      <PropsTable
        props={[
          {
            name: "label",
            type: "string",
            description: "Visible label; the control is wrapped in <label>.",
          },
          {
            name: "checked / defaultChecked",
            type: "boolean",
            description: "Checkbox and Switch: controlled / uncontrolled.",
          },
          {
            name: "onCheckedChange",
            type: "(checked, details) => void",
            description: "Checkbox and Switch change handler.",
          },
          {
            name: "value / defaultValue / onValueChange",
            type: "Base UI RadioGroup props",
            description: "Selection lives on RadioGroup; each Radio has a value.",
          },
        ]}
      />
    </div>
  );
}

function ControlledSwitchDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <Switch
        label="Notifications"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Badge>{checked ? "On" : "Off"}</Badge>
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
        people get initialed circles. Avatar rides on Base UI, so a real image
        src falls back to initials (or hatch) if it fails to load.
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
<Avatar src="/broken.jpg" initials="KO" />  {/* falls back */}
<Avatar size="sm" />                        {/* empty = hatched */}`}
      >
        <div className="flex items-center gap-3">
          <Avatar initials="AL" size="lg" />
          <Avatar initials="GH" />
          <Avatar src="/broken.jpg" initials="KO" />
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
            description: "Avatar: fallback text; empty shows hatch.",
          },
          {
            name: "src",
            type: "string",
            description: "Avatar: optional image; falls back on error.",
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
  return (
    <div className="space-y-8">
      <PageHeader title="Tabs">
        Base UI Tabs: roving focus, arrow-key navigation, home/end, and ARIA
        wiring for free. Panels pair with tabs by value; uncontrolled via
        defaultValue or controlled via value + onValueChange.
      </PageHeader>
      <Example
        code={`<Tabs.Root defaultValue="all">
  <Tabs.List>
    <Tabs.Tab value="all">All</Tabs.Tab>
    <Tabs.Tab value="shipped">Shipped</Tabs.Tab>
    <Tabs.Tab value="pending">Pending</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="all">Everything.</Tabs.Panel>
  <Tabs.Panel value="shipped">Only shipped.</Tabs.Panel>
  <Tabs.Panel value="pending">Only pending.</Tabs.Panel>
</Tabs.Root>`}
      >
        <Tabs.Root defaultValue="all">
          <Tabs.List>
            <Tabs.Tab value="all">All</Tabs.Tab>
            <Tabs.Tab value="shipped">Shipped</Tabs.Tab>
            <Tabs.Tab value="pending">Pending</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="all">
            <TextPlaceholder lines={2} />
          </Tabs.Panel>
          <Tabs.Panel value="shipped">
            <TextPlaceholder lines={3} />
          </Tabs.Panel>
          <Tabs.Panel value="pending">
            <TextPlaceholder lines={1} />
          </Tabs.Panel>
        </Tabs.Root>
      </Example>
      <SectionTitle>Parts</SectionTitle>
      <PropsTable
        props={[
          {
            name: "Tabs.Root",
            type: "part",
            description:
              "defaultValue / value + onValueChange; orientation for vertical tabs.",
          },
          {
            name: "Tabs.List",
            type: "part",
            description: "Holds the tab strip; loops focus by default.",
          },
          {
            name: "Tabs.Tab",
            type: "part",
            description: "value pairs it with a Panel; data-active when selected.",
          },
          {
            name: "Tabs.Panel",
            type: "part",
            description: "value matches its Tab; keepMounted to keep in DOM.",
          },
        ]}
      />
    </div>
  );
}

export function BreadcrumbsDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Breadcrumbs">
        Hand-rolled trail (Base UI has no Breadcrumb part) following the Base
        UI part anatomy. Separators are CSS-injected; an Item without href is
        the current page and gets aria-current.
      </PageHeader>
      <Example
        code={`<Breadcrumbs.Root>
  <Breadcrumbs.Item href="#">Dashboard</Breadcrumbs.Item>
  <Breadcrumbs.Item href="#">Settings</Breadcrumbs.Item>
  <Breadcrumbs.Item>Profile</Breadcrumbs.Item>
</Breadcrumbs.Root>`}
      >
        <Breadcrumbs.Root>
          <Breadcrumbs.Item href="#">Dashboard</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">Settings</Breadcrumbs.Item>
          <Breadcrumbs.Item>Profile</Breadcrumbs.Item>
        </Breadcrumbs.Root>
      </Example>
      <section className="space-y-3">
        <SectionTitle>Breadcrumbs.Item props</SectionTitle>
        <PropsTable
          props={[
            {
              name: "href",
              type: "string",
              description:
                "Link target. Omit on the last item to render it as the current page with aria-current=\"page\".",
            },
            {
              name: "className",
              type: "string",
              description: "Extra classes for the list item.",
            },
          ]}
        />
      </section>
    </div>
  );
}

export function DividerDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Divider">
        Base UI Separator (accessible role, orientation aware) drawn as a
        lo-fi rule, optionally with a centered uppercase label.
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

export function MenuDocs() {
  const [showArchived, setShowArchived] = useState(true);
  const [sort, setSort] = useState("name");

  return (
    <div className="space-y-8">
      <PageHeader title="Menu">
        Base UI Menu: keyboard navigation, typeahead, checkbox and radio
        items, and nested submenus for free. Popup folds in Portal and
        Positioner, same shape as Select; pass side and align to reposition.
      </PageHeader>
      <Example
        title="Actions menu"
        code={`<Menu.Root>
  <Menu.Trigger render={<Button>Actions ▾</Button>} />
  <Menu.Popup align="start">
    <Menu.Item>Rename</Menu.Item>
    <Menu.Item>Duplicate</Menu.Item>
    <Menu.SubmenuRoot>
      <Menu.SubmenuTrigger>Move to…</Menu.SubmenuTrigger>
      <Menu.Popup>
        <Menu.Item>Inbox</Menu.Item>
        <Menu.Item>Archive</Menu.Item>
      </Menu.Popup>
    </Menu.SubmenuRoot>
    <Menu.Separator />
    <Menu.Item className="font-bold">Delete…</Menu.Item>
  </Menu.Popup>
</Menu.Root>`}
      >
        <Menu.Root>
          <Menu.Trigger render={<Button>Actions ▾</Button>} />
          <Menu.Popup align="start">
            <Menu.Item>Rename</Menu.Item>
            <Menu.Item>Duplicate</Menu.Item>
            <Menu.SubmenuRoot>
              <Menu.SubmenuTrigger>Move to…</Menu.SubmenuTrigger>
              <Menu.Popup>
                <Menu.Item>Inbox</Menu.Item>
                <Menu.Item>Archive</Menu.Item>
                <Menu.Item>Trash</Menu.Item>
              </Menu.Popup>
            </Menu.SubmenuRoot>
            <Menu.Separator />
            <Menu.Item className="font-bold">Delete…</Menu.Item>
          </Menu.Popup>
        </Menu.Root>
      </Example>
      <Example
        title="Checkbox and radio items"
        code={`<Menu.Popup>
  <Menu.Group>
    <Menu.GroupLabel>View</Menu.GroupLabel>
    <Menu.CheckboxItem
      checked={showArchived}
      onCheckedChange={setShowArchived}
      closeOnClick={false}
    >
      Show archived
    </Menu.CheckboxItem>
  </Menu.Group>
  <Menu.Separator />
  <Menu.RadioGroup value={sort} onValueChange={setSort}>
    <Menu.GroupLabel>Sort by</Menu.GroupLabel>
    <Menu.RadioItem value="name" closeOnClick={false}>Name</Menu.RadioItem>
    <Menu.RadioItem value="date" closeOnClick={false}>Date</Menu.RadioItem>
  </Menu.RadioGroup>
</Menu.Popup>`}
      >
        <Menu.Root>
          <Menu.Trigger render={<Button>View options ▾</Button>} />
          <Menu.Popup align="start">
            <Menu.Group>
              <Menu.GroupLabel>View</Menu.GroupLabel>
              <Menu.CheckboxItem
                checked={showArchived}
                onCheckedChange={setShowArchived}
                closeOnClick={false}
              >
                Show archived
              </Menu.CheckboxItem>
            </Menu.Group>
            <Menu.Separator />
            <Menu.RadioGroup value={sort} onValueChange={setSort}>
              <Menu.GroupLabel>Sort by</Menu.GroupLabel>
              <Menu.RadioItem value="name" closeOnClick={false}>
                Name
              </Menu.RadioItem>
              <Menu.RadioItem value="date" closeOnClick={false}>
                Date
              </Menu.RadioItem>
              <Menu.RadioItem value="size" closeOnClick={false}>
                Size
              </Menu.RadioItem>
            </Menu.RadioGroup>
          </Menu.Popup>
        </Menu.Root>
      </Example>
      <SectionTitle>Parts</SectionTitle>
      <PropsTable
        props={[
          {
            name: "Menu.Root / Trigger",
            type: "part",
            description:
              "Base UI pass-throughs; use render={<Button/>} on Trigger.",
          },
          {
            name: "Menu.Popup",
            type: "part",
            default: "sideOffset=4",
            description:
              "Includes Portal + Positioner; side / align / sideOffset forward to the Positioner.",
          },
          {
            name: "Menu.Item / LinkItem",
            type: "part",
            description:
              "Highlighted row inverts to ink. LinkItem renders an anchor.",
          },
          {
            name: "Menu.CheckboxItem / RadioItem",
            type: "part",
            description:
              "Left-gutter ✓ / ● marks; pass closeOnClick={false} to keep the menu open.",
          },
          {
            name: "Menu.SubmenuRoot / SubmenuTrigger",
            type: "part",
            description:
              "Nest a full Menu.Popup inside; trigger row gets a trailing ▸.",
          },
          {
            name: "Menu.Group / GroupLabel / Separator",
            type: "part",
            description:
              "Sectioning within the popup. GroupLabel must sit inside a Group or RadioGroup.",
          },
        ]}
      />
    </div>
  );
}

export function DrawerDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Drawer">
        Base UI Drawer in lo-fi clothes: slides in over the page, focus
        trapped, Escape and backdrop dismiss, swipe-to-dismiss on touch. Set
        side on Root and placement and swipe direction stay in agreement.
        Compose Header, Body, and a pinned Actions bar. Snap points and grab
        handles are deliberately out of scope.
      </PageHeader>
      <Example
        title="Right drawer with header and actions"
        code={`<Drawer.Root side="right">
  <Drawer.Trigger render={<Button>Edit user</Button>} />
  <Drawer.Portal>
    <Drawer.Backdrop />
    <Drawer.Popup>
      <Drawer.Header>
        <Drawer.Title>Edit user</Drawer.Title>
        <Drawer.Close aria-label="Close">×</Drawer.Close>
      </Drawer.Header>
      <Drawer.Body>…form…</Drawer.Body>
      <Drawer.Actions>
        <Drawer.Close render={<Button variant="ghost">Cancel</Button>} />
        <Button variant="solid">Save</Button>
      </Drawer.Actions>
    </Drawer.Popup>
  </Drawer.Portal>
</Drawer.Root>`}
      >
        <Drawer.Root side="right">
          <Drawer.Trigger render={<Button>Edit user</Button>} />
          <Drawer.Portal>
            <Drawer.Backdrop />
            <Drawer.Popup>
              <Drawer.Header>
                <Drawer.Title>Edit user</Drawer.Title>
                <Drawer.Close aria-label="Close">×</Drawer.Close>
              </Drawer.Header>
              <Drawer.Body className="space-y-4">
                <Field.Root>
                  <Field.Label>Name</Field.Label>
                  <Input defaultValue="Ada Lovelace" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Role</Field.Label>
                  <Select.Root defaultValue="admin">
                    <Select.Trigger />
                    <Select.Popup>
                      <Select.Item value="admin">Admin</Select.Item>
                      <Select.Item value="member">Member</Select.Item>
                    </Select.Popup>
                  </Select.Root>
                </Field.Root>
                <TextPlaceholder lines={6} />
              </Drawer.Body>
              <Drawer.Actions>
                <Drawer.Close render={<Button variant="ghost">Cancel</Button>} />
                <Drawer.Close render={<Button variant="solid">Save</Button>} />
              </Drawer.Actions>
            </Drawer.Popup>
          </Drawer.Portal>
        </Drawer.Root>
      </Example>
      <Example
        title="Bottom sheet (swipe down to dismiss on touch)"
        code={`<Drawer.Root side="bottom">
  <Drawer.Trigger render={<Button>Filters</Button>} />
  <Drawer.Portal>
    <Drawer.Backdrop />
    <Drawer.Popup>
      <Drawer.Header>
        <Drawer.Title>Filters</Drawer.Title>
        <Drawer.Close aria-label="Close">×</Drawer.Close>
      </Drawer.Header>
      <Drawer.Body>…</Drawer.Body>
    </Drawer.Popup>
  </Drawer.Portal>
</Drawer.Root>`}
      >
        <Drawer.Root side="bottom">
          <Drawer.Trigger render={<Button>Filters</Button>} />
          <Drawer.Portal>
            <Drawer.Backdrop />
            <Drawer.Popup>
              <Drawer.Header>
                <Drawer.Title>Filters</Drawer.Title>
                <Drawer.Close aria-label="Close">×</Drawer.Close>
              </Drawer.Header>
              <Drawer.Body className="space-y-4">
                <Checkbox label="In stock only" defaultChecked />
                <Divider />
                <RadioGroup defaultValue="new">
                  <Radio value="new" label="Newest first" />
                  <Radio value="price" label="Price" />
                </RadioGroup>
              </Drawer.Body>
            </Drawer.Popup>
          </Drawer.Portal>
        </Drawer.Root>
      </Example>
      <SectionTitle>Parts</SectionTitle>
      <PropsTable
        props={[
          {
            name: "Drawer.Root",
            type: "part",
            default: 'side="right"',
            description:
              'side: "right" | "bottom"; sets swipe-dismiss direction to match. Plus Base UI open/onOpenChange.',
          },
          {
            name: "Drawer.Popup",
            type: "part",
            description:
              "Includes Base UI Viewport + Content; flex column so Body scrolls between Header and Actions.",
          },
          {
            name: "Drawer.Header / Body / Actions",
            type: "part",
            description:
              "Protofi layout helpers (plain divs): title bar, scrollable content, pinned action bar.",
          },
          {
            name: "Drawer.Trigger / Close",
            type: "part",
            description:
              "Buttons; use render={<Button/>} to reuse the lo-fi Button.",
          },
        ]}
      />
    </div>
  );
}

export function DialogDocs() {
  return (
    <div className="space-y-8">
      <PageHeader title="Dialog">
        Base UI Dialog: focus trap, scroll lock, Escape, backdrop dismissal,
        and ARIA for free. Compositional; the Trigger can render your own
        Button via the render prop.
      </PageHeader>
      <Example
        code={`<Dialog.Root>
  <Dialog.Trigger render={<Button>Open dialog</Button>} />
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Popup>
      <Dialog.Header>
        <Dialog.Title>Confirm action</Dialog.Title>
        <Dialog.Close aria-label="Close">×</Dialog.Close>
      </Dialog.Header>
      <Dialog.Body>
        <Dialog.Description>
          This is a lo-fi dialog. Focus is trapped; Escape closes it.
        </Dialog.Description>
      </Dialog.Body>
      <Dialog.Actions>
        <Dialog.Close render={<Button variant="ghost">Cancel</Button>} />
        <Dialog.Close render={<Button variant="solid">Confirm</Button>} />
      </Dialog.Actions>
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>`}
      >
        <Dialog.Root>
          <Dialog.Trigger render={<Button>Open dialog</Button>} />
          <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Popup>
              <Dialog.Header>
                <Dialog.Title>Confirm action</Dialog.Title>
                <Dialog.Close aria-label="Close">×</Dialog.Close>
              </Dialog.Header>
              <Dialog.Body>
                <Dialog.Description>
                  This is a lo-fi dialog. Focus is trapped; Escape closes it.
                </Dialog.Description>
              </Dialog.Body>
              <Dialog.Actions>
                <Dialog.Close render={<Button variant="ghost">Cancel</Button>} />
                <Dialog.Close render={<Button variant="solid">Confirm</Button>} />
              </Dialog.Actions>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </Example>
      <SectionTitle>Parts</SectionTitle>
      <PropsTable
        props={[
          {
            name: "Dialog.Root",
            type: "part",
            description:
              "defaultOpen / open + onOpenChange; modal defaults to true.",
          },
          {
            name: "Dialog.Trigger / Close",
            type: "part",
            description:
              "Buttons; use render={<Button/>} to reuse the lo-fi Button.",
          },
          {
            name: "Dialog.Backdrop / Popup",
            type: "part",
            description:
              "Styled: dimmed backdrop, centered hard-bordered panel.",
          },
          {
            name: "Dialog.Header / Body / Actions",
            type: "part",
            description:
              "Protofi-only layout helpers (plain divs): title bar, padded content, pinned action bar.",
          },
        ]}
      />
    </div>
  );
}
