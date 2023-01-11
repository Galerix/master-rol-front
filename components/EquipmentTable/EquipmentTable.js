import React from "react";
import { Table } from "react-bootstrap";
import ItemCell from "../ItemCell/ItemCell";

const EquipmentTable = ({ equipment, name }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th colSpan="2">{name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <ItemCell item={equipment.leftHand} name="Mano Izquierda" />
          <ItemCell item={equipment.rightHand} name="Mano Derecha" />
        </tr>
        <tr>
          <ItemCell item={equipment.armor} name="Armadura" colspan={2} />
        </tr>
        <tr>
          <ItemCell item={equipment.accessory1} name="Accesorio 1" />
          <ItemCell item={equipment.accessory2} name="Accesorio 2" />
        </tr>
      </tbody>
    </Table>
  );
};

export default EquipmentTable;
