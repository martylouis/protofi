import { Table, TBody, TD, TH, THead, TR } from "../src";
import type { PropDef } from "./ui";

/** Props reference table, dogfooding the library's own Table. */
export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Prop</TH>
          <TH>Type</TH>
          <TH>Default</TH>
          <TH>Description</TH>
        </TR>
      </THead>
      <TBody>
        {props.map((p) => (
          <TR key={p.name}>
            <TD className="font-mono font-bold text-ink">{p.name}</TD>
            <TD className="font-mono text-xs">{p.type}</TD>
            <TD className="font-mono text-xs">{p.default ?? "-"}</TD>
            <TD>{p.description}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}
