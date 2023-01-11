import Link from "next/link";
import React from "react";
import { Col, Container, Image, ProgressBar, Row } from "react-bootstrap";
import {
  CharacterStats,
  EquipmentTable,
  InventoryTable,
} from "../../components";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

import styles from "../../styles/pages/personajes.module.scss";

const Personaje = ({ character }) => {
  const imageUrl = character.image.data ? getStrapiMedia(character.image) : "";

  const maxHealth = character.maxHealth ? character.maxHealth : 0;
  const health = character.maxHealth ? character.health : 0;

  const hpNow = character.maxHealth ? (health / maxHealth) * 100 : 0;
  const expNow = (character.experience / character.maxExperience) * 100;

  return (
    <div className="characterSheet">
      <Link href="/personajes" className="backButton">
        <h2>← Atrás</h2>
      </Link>
      <Row>
        <Col sm={4} className="imageStats">
          <Image src={imageUrl} alt={character.name} />
          <CharacterStats character={character} />
        </Col>
        <Col sm={4} className="infoCol">
          <div className="titles">
            <h1>{character.name}</h1>

            <h3>{character.race.name}</h3>
            <p>{character.race.skill}</p>

            <h3>{character.job.name}</h3>
            <p>{character.job.skill}</p>
          </div>

          <div className="progressBars">
            <h3>Nivel: {character.level}</h3>

            <div className="progressBar">
              <p>EXP:</p>
              <ProgressBar
                now={expNow}
                label={`${character.experience} / ${character.maxExperience}`}
              />
            </div>

            <div className="progressBar">
              <p>HP:</p>
              <ProgressBar
                variant="success"
                now={hpNow}
                label={`${health} / ${maxHealth}`}
              />
            </div>
          </div>
        </Col>

        <Col className="itemTable">
          <EquipmentTable equipment={character.equipment} name="Equipo" />

          <InventoryTable items={character.inventory} name="Inventario" />
        </Col>
      </Row>
    </div>
  );
};

export async function getStaticPaths() {
  const { characters } = await fetchAPI("/characters", { fields: ["slug"] });

  return {
    paths: characters.map((character) => ({
      params: {
        slug: character.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { characters } = await fetchAPI("/characters", {
    filters: {
      slug: params.slug,
    },
  });

  return {
    props: { character: characters[0] },
    revalidate: 1,
  };
}

export default Personaje;
