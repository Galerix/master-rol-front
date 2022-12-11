import React from "react";
import Link from "next/link";
import { Card, Col } from "react-bootstrap";
import styles from "../../styles/card.module.css";

const MenuCard = ({ link, name, image }) => {
  return (
    <Col md={3}>
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
