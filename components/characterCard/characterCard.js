import Link from "next/link";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { getStrapiMedia } from "../../lib/media";

const CharacterCard = ({ character }) => {
  const imageUrl = character.image.data ? getStrapiMedia(character.image) : "";

  const slug = character.slug ? character.slug : "";
  const name = character.name ? character.name : "No tiene nombre";
  const race = character.race ? character.race.name : "Raza indefinida";
  const job = character.job ? character.job.name : "No tiene oficio";

  return (
    <Col className="cardColumn">
      <Link href={`/personajes/${slug}`}>
        <Card bg="dark" text="white">
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>
              {race} - {job}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CharacterCard;
