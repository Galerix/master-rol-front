import React, { useState } from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";

const InventoryTable = ({ items, name }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>{name}</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item) => {
            let itemTooltip = (props) => (
              <Tooltip id="race-tooltip" {...props}>
                {item.attributes.Type} - {item.attributes.Range} <br />
                {item.attributes.bonus > 0 &&
                  `+${item.attributes.bonus}  ${item.attributes.bonusType}`}
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
                  <td className={item.attributes.Range}>
                    {item.attributes.Name}
                  </td>
                </OverlayTrigger>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default InventoryTable;
