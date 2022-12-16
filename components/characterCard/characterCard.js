import Link from "next/link";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { getStrapiMedia } from "../../lib/media";

import styles from "../../styles/components/card.module.scss";

const CharacterCard = ({ character }) => {
  const imageUrl = character.image.data ? getStrapiMedia(character.image) : "";

  const slug = character.slug ? character.slug : "";
  const name = character.name ? character.name : "No tiene nombre";
  const race = character.race ? character.race.name : "Raza indefinida";
  const job = character.job ? character.job.name : "No tiene oficio";

  return (
    <Link href={`/personajes/${slug}`}>
      <Col className={styles.cardColumn}>
        <Card bg="dark" text="white" className={styles.background}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
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
