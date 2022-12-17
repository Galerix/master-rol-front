import React, { useState } from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";

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
            items.map((item) => {
              let itemTooltip = (props) => (
                <Tooltip id="race-tooltip" {...props}>
                  {item.type.name} - {item.tier.name} <br />
                  {item.bonus > 0 && `+${item.bonus}  ${item.bonusType}`} <br />
                  {item.penalty > 0 && `-${item.penalty}  ${item.penaltyType}`}
                </Tooltip>
              );

              return (
                <tr key={item.id}>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 100, hide: 100 }}
                    overlay={itemTooltip}
                    trigger={["hover", "click"]}
                  >
                    <td className={item.tier.name}>{item.name}</td>
                  </OverlayTrigger>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default InventoryTable;
