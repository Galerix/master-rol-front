import Link from "next/link";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { getStrapiMedia } from "../../lib/media";

import styles from "../../styles/components/card.module.scss";

const CharacterCard = ({ character }) => {
  const imageUrl = character.attributes.image.data ? getStrapiMedia(character.attributes.image) : "";

  const slug = character.attributes.slug ? character.attributes.slug : "";
  const name = character.attributes.name
    ? character.attributes.name
    : "No tiene nombre";
  const race = character.attributes.race.data
    ? character.attributes.race.data.attributes.Name
    : "Raza indefinida";
  const job = character.attributes.job.data
    ? character.attributes.job.data.attributes.Name
    : "No tiene oficio";

  return (
    <Link href={`/personajes/${slug}`}>
      <Col className={styles.cardColumn}>
        <Card bg="dark" text="white" className={styles.background}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name} →</Card.Title>
            <Card.Subtitle>
              {race} - {job}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
};

export default CharacterCard;
