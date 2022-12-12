import Link from "next/link";
import React from "react";
import {
  Col,
  Container,
  Image,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { CharacterStats, InventoryTable } from "../../components";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

import styles from "../../styles/pages/personajes.module.scss";

const Personaje = ({ character }) => {
  const imageUrl = character.attributes.image.data ? getStrapiMedia(character.attributes.image) : "";

  const health = (character.attributes.health / 50) * 100;


  return (
    <Container fluid className={styles.characterSheet}>
      <Link href="/personajes" className="backButton">
        <h2>← Atrás</h2>
      </Link>
      <Row className={styles.characterRow}>
        <Col sm={4} className={styles.imageStats}>
          <Image src={imageUrl} alt={character.attributes.name} />
          <CharacterStats character={character} />
        </Col>
        <Col sm={4} className={styles.infoCol}>
          <div className={styles.titles}>
            <h1>{character.attributes.name}</h1>

              <h3>{character.attributes.race.data.attributes.Name}</h3>
              <p>{character.attributes.race.data.attributes.Skill}</p>

              <h3>{character.attributes.job.data.attributes.Name}</h3>
              <p>{character.attributes.job.data.attributes.Skill}</p>
            
          </div>

          <div className={styles.progressBars}>
            <h3>Nivel: {character.attributes.level}</h3>

            <div className={styles.progressBar}>
              <p>EXP:</p>
              <ProgressBar
                style={{ width: "100%" }}
                now={character.attributes.experience}
                label={`${character.attributes.experience} / 100`}
              />
            </div>

            <div className={styles.progressBar}>
              <p>HP:</p>
              <ProgressBar
                style={{ width: "100%" }}
                variant="success"
                now={health}
                label={`${character.attributes.health}/50`}
              />
            </div>
          </div>
        </Col>
        <Col className={styles.itemTable}>
          <InventoryTable
            items={character.attributes.equipment.data}
            name="Equipo"
          />
        </Col>
        <Col className={styles.itemTable}>
          <InventoryTable
            items={character.attributes.inventory.data}
            name="Inventario"
          />
        </Col>
      </Row>
    </Container>
  );
};

export async function getStaticPaths() {
  const charactersRes = await fetchAPI("/characters", { fields: ["slug"] });

  return {
    paths: charactersRes.data.map((character) => ({
      params: {
        slug: character.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const charactersRes = await fetchAPI("/characters", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });

  return {
    props: { character: charactersRes.data[0] },
    revalidate: 1,
  };
}

export default Personaje;
