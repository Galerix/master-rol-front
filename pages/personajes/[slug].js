import Link from "next/link";
import React from "react";
import {
  Button,
  Col,
  Container,
  Image,
  OverlayTrigger,
  ProgressBar,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { CharacterStats, InventoryTable } from "../../components";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

import styles from "../../styles/pages/personajes.module.scss";

const personaje = ({ character }) => {
  const imageUrl = getStrapiMedia(character.attributes.image);
  const health = (character.attributes.health / 50) * 100;

  const raceTooltip = (props) => (
    <Tooltip id="race-tooltip" {...props}>
      {character.attributes.race.data.attributes.Skill}
    </Tooltip>
  );

  const jobTooltip = (props) => (
    <Tooltip id="job-tooltip" {...props}>
      {character.attributes.job.data.attributes.Skill}
    </Tooltip>
  );

  return (
    <Container fluid className={styles.characterSheet}>
      <Link href="/personajes" className="backButton">
        <h2>← Atrás</h2>
      </Link>
      <Row className={styles.characterRow}>
        <Col md={4} className={styles.imageStats}>
          <Image src={imageUrl} />
          <CharacterStats character={character} />
        </Col>
        <Col md={4} className={styles.infoCol}>
          <div className={styles.titles}>
            <h3>Nombre: {character.attributes.name}</h3>

            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={raceTooltip}
              trigger={["hover", "click"]}
            >
              <h3>Raza: {character.attributes.race.data.attributes.Name}</h3>
            </OverlayTrigger>

            <OverlayTrigger
              placement="right"
              delay={{ show: 100, hide: 100 }}
              overlay={jobTooltip}
              trigger={["hover", "click"]}
            >
              <h3> Oficio: {character.attributes.job.data.attributes.Name}</h3>
            </OverlayTrigger>
          </div>

          <div className={styles.progressBars}>
            <h3>Nivel: {character.attributes.level}</h3>

            <div className={styles.progressBar}>
              <h3>EXP:</h3>
              <ProgressBar
                style={{ width: "100%" }}
                now={character.attributes.experience}
                label={`${character.attributes.experience} / 100`}
              />
            </div>

            <div className={styles.progressBar}>
              <h3>HP:</h3>
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

export default personaje;
