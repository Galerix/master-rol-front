import Link from "next/link";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { getStrapiMedia } from "../../lib/media";

import styles from "../../styles/components/card.module.scss";

const CharacterCard = ({ character }) => {
  const imageUrl = getStrapiMedia(character.attributes.image);

  return (
    <Link
      href={`/personajes/${character.attributes.slug}`}
      style={{ padding: "0" }}
    >
      <Col style={{ padding: "5px" }}>
        <Card bg="dark" text="white" className={styles.background}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{character.attributes.name} →</Card.Title>
            <Card.Subtitle>
              {character.attributes.race.data.attributes.Name} -{" "}
              {character.attributes.job.data.attributes.Name}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
};

export default CharacterCard;
