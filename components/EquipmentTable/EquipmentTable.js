import React, { useState } from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";

const EquipmentTable = ({ equipment, name }) => {
  let leftHandTooltip = (props) => (
    <Tooltip id="race-tooltip" {...props}>
      {equipment.leftHand.name} - {equipment.leftHand.tier.name} <br />
      {equipment.leftHand.bonus > 0 &&
        `+${equipment.leftHand.bonus}  ${equipment.leftHand.bonusType}`}{" "}
      <br />
      {equipment.leftHand.penalty > 0 &&
        `-${equipment.leftHand.penalty}  ${equipment.leftHand.penaltyType}`}
    </Tooltip>
  );
  let rightHandTooltip = (props) => (
    <Tooltip id="race-tooltip" {...props}>
      {equipment.rightHand.name} - {equipment.rightHand.tier.name} <br />
      {equipment.rightHand.bonus > 0 &&
        `+${equipment.rightHand.bonus}  ${equipment.rightHand.bonusType}`}{" "}
      <br />
      {equipment.rightHand.penalty > 0 &&
        `-${equipment.rightHand.penalty}  ${equipment.rightHand.penaltyType}`}
    </Tooltip>
  );
  let armorTooltip = (props) => (
    <Tooltip id="race-tooltip" {...props}>
      {equipment.armor.name} - {equipment.armor.tier.name} <br />
      {equipment.armor.bonus > 0 &&
        `+${equipment.armor.bonus}  ${equipment.armor.bonusType}`}{" "}
      <br />
      {equipment.armor.penalty > 0 &&
        `-${equipment.armor.penalty}  ${equipment.armor.penaltyType}`}
    </Tooltip>
  );
  let accessory1Tooltip = (props) => (
    <Tooltip id="race-tooltip" {...props}>
      {equipment.accessory1.name} - {equipment.accessory1.tier.name} <br />
      {equipment.accessory1.bonus > 0 &&
        `+${equipment.accessory1.bonus}  ${equipment.accessory1.bonusType}`}{" "}
      <br />
      {equipment.accessory1.penalty > 0 &&
        `-${equipment.accessory1.penalty}  ${equipment.accessory1.penaltyType}`}
    </Tooltip>
  );
  let accessory2Tooltip = (props) => (
    <Tooltip id="race-tooltip" {...props}>
      {equipment.accessory2.name} - {equipment.accessory2.tier.name} <br />
      {equipment.accessory2.bonus > 0 &&
        `+${equipment.accessory2.bonus}  ${equipment.accessory2.bonusType}`}{" "}
      <br />
      {equipment.accessory2.penalty > 0 &&
        `-${equipment.accessory2.penalty}  ${equipment.accessory2.penaltyType}`}
    </Tooltip>
  );

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>{name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {equipment.leftHand.name ? (
            <OverlayTrigger
              placement="top"
              delay={{ show: 100, hide: 100 }}
              overlay={leftHandTooltip}
              trigger={["hover", "click"]}
            >
              <td className={equipment.leftHand.tier.name}>
                {equipment.leftHand.name}
              </td>
            </OverlayTrigger>
          ) : (
            <td>Mano Izquierda</td>
          )}
        </tr>
        <tr>
          {equipment.rightHand.name ? (
            <OverlayTrigger
              placement="top"
              delay={{ show: 100, hide: 100 }}
              overlay={rightHandTooltip}
              trigger={["hover", "click"]}
            >
              <td className={equipment.rightHand.tier.name}>
                {equipment.rightHand.name}
              </td>
            </OverlayTrigger>
          ) : (
            <td>Mano Derecha</td>
          )}
        </tr>
        <tr>
          {equipment.armor.name ? (
            <OverlayTrigger
              placement="top"
              delay={{ show: 100, hide: 100 }}
              overlay={armorTooltip}
              trigger={["hover", "click"]}
            >
              <td className={equipment.armor.tier.name}>
                {equipment.armor.name}
              </td>
            </OverlayTrigger>
          ) : (
            <td>Armadura</td>
          )}
        </tr>
        <tr>
          {equipment.accessory1.name ? (
            <OverlayTrigger
              placement="top"
              delay={{ show: 100, hide: 100 }}
              overlay={accessory1Tooltip}
              trigger={["hover", "click"]}
            >
              <td className={equipment.accessory1.tier.name}>
                {equipment.accessory1.name}
              </td>
            </OverlayTrigger>
          ) : (
            <td>Accesorio 1</td>
          )}
        </tr>
        <tr>
          {equipment.accessory2.name ? (
            <OverlayTrigger
              placement="top"
              delay={{ show: 100, hide: 100 }}
              overlay={accessory2Tooltip}
              trigger={["hover", "click"]}
            >
              <td className={equipment.accessory2.tier.name}>
                {equipment.accessory2.name}
              </td>
            </OverlayTrigger>
          ) : (
            <td>Accesorio 2</td>
          )}
        </tr>
      </tbody>
    </Table>
  );
};

export default EquipmentTable;
