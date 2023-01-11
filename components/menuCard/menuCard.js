import React from "react";
import Link from "next/link";

import { Card, Col } from "react-bootstrap";

const MenuCard = ({ link, name, image }) => {
  return (
    <Col md={3} className="cardColumn">
      <Link href={link}>
        <Card bg="dark" text="white">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name} →</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default MenuCard;
