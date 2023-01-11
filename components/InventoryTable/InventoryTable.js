import React from "react";
import { Table } from "react-bootstrap";
import ItemCell from "../ItemCell/ItemCell";

const InventoryTable = ({ items, name }) => {
  return (
    <div style={{ maxHeight: "240px", overflowY: "auto", width: "100%" }}>
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead style={{ position: "sticky", top: 0 }}>
          <tr>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => (
              <tr key={item.id}>
                <ItemCell item={item} />
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InventoryTable;
