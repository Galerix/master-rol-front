import React, { useState } from "react";
import { Table } from "react-bootstrap";

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
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.attributes.Name}</td>
            </tr>
          ))}
        {items &&
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.attributes.Name}</td>
            </tr>
          ))}
        {items &&
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.attributes.Name}</td>
            </tr>
          ))}
        {items &&
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.attributes.Name}</td>
            </tr>
          ))}
        {items &&
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.attributes.Name}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default InventoryTable;
