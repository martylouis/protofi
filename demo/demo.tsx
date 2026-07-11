// Protofi demo. Variant A is the component gallery; B/C/D are three
// structurally different takes on the same dashboard, switchable via
// ?variant= and the floating bar — the exact workflow the prototype
// skill describes.
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles.css";
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
  Variants,
} from "../src";

// ---- shared fake data --------------------------------------------------

const orders = [
  { id: "#1042", customer: "Ada Lovelace", status: "Shipped", total: "$120.00" },
  { id: "#1041", customer: "Grace Hopper", status: "Pending", total: "$86.50" },
  { id: "#1040", customer: "Alan Turing", status: "Shipped", total: "$302.10" },
  { id: "#1039", customer: "Edsger Dijkstra", status: "Refunded", total: "$45.00" },
];

const stats = [
  { label: "Revenue", value: "$12.4k" },
  { label: "Orders", value: "231" },
  { label: "Customers", value: "1,204" },
  { label: "Refunds", value: "6" },
];

// ---- Variant A: component gallery --------------------------------------

function Gallery() {
  const [tab, setTab] = useState("Buttons");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8 pb-24">
      <header>
        <h1 className="text-2xl font-bold uppercase tracking-wide">Protofi</h1>
        <p className="text-sm text-ink-soft">
          Lo-fi prototype kit. Grayscale, hard borders, zero opinions about
          your final design.
        </p>
      </header>

      <section className="space-y-3">
        <Divider label="Buttons & badges" />
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="solid">Solid</Button>
          <Button>Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
          <Badge>Outline</Badge>
          <Badge variant="solid">Solid</Badge>
        </div>
      </section>

      <section className="space-y-3">
        <Divider label="Forms" />
        <div className="grid grid-cols-2 gap-4">
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
          <Field label="Notes" className="col-span-2">
            <Textarea placeholder="Anything else…" />
          </Field>
        </div>
        <div className="flex flex-wrap gap-6">
          <Checkbox label="Email me updates" defaultChecked />
          <Radio name="freq" label="Weekly" defaultChecked />
          <Radio name="freq" label="Monthly" />
          <Switch label="Dark mode" />
        </div>
      </section>

      <section className="space-y-3">
        <Divider label="Placeholders" />
        <div className="grid grid-cols-3 gap-4">
          <ImagePlaceholder label="Hero" />
          <ImagePlaceholder label="Chart" className="aspect-square" />
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Avatar initials="AL" />
              <Avatar />
              <Avatar initials="GH" size="sm" />
            </div>
            <TextPlaceholder lines={4} />
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <Divider label="Tabs, table, modal" />
        <Tabs
          tabs={["Buttons", "Forms", "Data"]}
          active={tab}
          onChange={setTab}
        />
        <Table>
          <THead>
            <TR>
              <TH>Order</TH>
              <TH>Customer</TH>
              <TH>Status</TH>
              <TH>Total</TH>
            </TR>
          </THead>
          <TBody>
            {orders.map((o) => (
              <TR key={o.id}>
                <TD className="font-mono">{o.id}</TD>
                <TD>{o.customer}</TD>
                <TD>
                  <Badge>{o.status}</Badge>
                </TD>
                <TD>{o.total}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Confirm action"
        >
          <div className="space-y-4">
            <p className="text-sm text-ink-soft">
              This is a lo-fi modal. Escape or backdrop click closes it.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="solid" onClick={() => setModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </section>
    </main>
  );
}

// ---- Variant B: dashboard as card grid ----------------------------------

function DashboardCards() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 p-8 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold uppercase tracking-wide">Dashboard</h1>
        <Button variant="solid" size="sm">
          New order
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardBody>
              <div className="text-xs font-bold uppercase tracking-wide text-ink-faint">
                {s.label}
              </div>
              <div className="mt-1 text-2xl font-bold">{s.value}</div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <Badge>30 days</Badge>
          </CardHeader>
          <CardBody>
            <ImagePlaceholder label="Chart" />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent orders</CardTitle>
          </CardHeader>
          <CardBody className="space-y-3">
            {orders.map((o) => (
              <div key={o.id} className="flex items-center gap-3">
                <Avatar size="sm" initials={o.customer.split(" ").map((w) => w[0]).join("")} />
                <div className="flex-1 text-sm">{o.customer}</div>
                <Badge>{o.status}</Badge>
                <div className="w-16 text-right font-mono text-sm">{o.total}</div>
              </div>
            ))}
          </CardBody>
          <CardFooter>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

// ---- Variant C: dashboard with sidebar ----------------------------------

function DashboardSidebar() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-52 shrink-0 space-y-1 border-r-2 border-ink p-4">
        <div className="mb-6 flex items-center gap-2">
          <Avatar size="sm" initials="P" />
          <span className="font-bold uppercase tracking-wide">Protofi</span>
        </div>
        {["Overview", "Orders", "Customers", "Settings"].map((item, i) => (
          <a
            key={item}
            href="#"
            className={
              i === 0
                ? "block rounded-lofi bg-ink px-3 py-1.5 text-sm font-medium text-paper"
                : "block rounded-lofi px-3 py-1.5 text-sm text-ink-soft hover:bg-fill"
            }
          >
            {item}
          </a>
        ))}
      </aside>
      <main className="flex-1 space-y-6 p-8 pb-24">
        <h1 className="text-xl font-bold uppercase tracking-wide">Overview</h1>
        <div className="grid grid-cols-2 gap-4">
          {stats.slice(0, 2).map((s) => (
            <Card key={s.label}>
              <CardBody>
                <div className="text-xs font-bold uppercase tracking-wide text-ink-faint">
                  {s.label}
                </div>
                <div className="mt-1 text-3xl font-bold">{s.value}</div>
                <TextPlaceholder lines={1} className="mt-3 w-1/2" />
              </CardBody>
            </Card>
          ))}
        </div>
        <ImagePlaceholder label="Activity chart" className="aspect-21/9" />
        <TextPlaceholder lines={3} />
      </main>
    </div>
  );
}

// ---- Variant D: dashboard as dense table --------------------------------

function DashboardTable() {
  const [tab, setTab] = useState("All");

  return (
    <main className="mx-auto max-w-4xl space-y-4 p-8 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold uppercase tracking-wide">Orders</h1>
        <div className="flex gap-2">
          <Input placeholder="Search orders…" className="w-56" />
          <Button variant="solid">Export</Button>
        </div>
      </div>
      <Tabs
        tabs={["All", "Shipped", "Pending", "Refunded"]}
        active={tab}
        onChange={setTab}
      />
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
          {orders
            .filter((o) => tab === "All" || o.status === tab)
            .map((o) => (
              <TR key={o.id}>
                <TD className="font-mono">{o.id}</TD>
                <TD className="text-ink">{o.customer}</TD>
                <TD>
                  <Badge variant={o.status === "Refunded" ? "solid" : "outline"}>
                    {o.status}
                  </Badge>
                </TD>
                <TD className="text-right font-mono">{o.total}</TD>
              </TR>
            ))}
        </TBody>
      </Table>
      <p className="text-xs text-ink-faint">
        4 orders · fake data · use ← → or the bar below to switch variants
      </p>
    </main>
  );
}

// ---- wire it together ----------------------------------------------------

function App() {
  return (
    <Variants
      variants={{
        A: { name: "Component gallery", render: () => <Gallery /> },
        B: { name: "Dashboard / cards", render: () => <DashboardCards /> },
        C: { name: "Dashboard / sidebar", render: () => <DashboardSidebar /> },
        D: { name: "Dashboard / table", render: () => <DashboardTable /> },
      }}
    />
  );
}

createRoot(document.getElementById("root")!).render(<App />);
