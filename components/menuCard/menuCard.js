import React from "react";
import Link from "next/link";

import { Card, Col } from "react-bootstrap";

import styles from "../../styles/components/card.module.scss";

const MenuCard = ({ link, name, image }) => {
  return (
    <Col md={3} className={styles.cardColumn}>
      <Link href={link}>
        <Card bg="dark" text="white" className={styles.background}>
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
