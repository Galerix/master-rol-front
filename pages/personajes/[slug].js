import Link from "next/link";
import React from "react";
import {
  Col,
  Container,
  Image,
  ProgressBar,
  Row,
  Table,
} from "react-bootstrap";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

const personaje = ({ character }) => {
  const imageUrl = getStrapiMedia(character.attributes.image);
  const health = (character.attributes.health / 50) * 100;
  return (
    <Container style={{ padding: "4rem 0" }}>
      <Link
        href="/personajes"
        style={{ position: "absolute", left: "20px", top: "20px" }}
      >
        <h2>← Atrás</h2>
      </Link>
      <Row style={{ backgroundColor: "#1a1d20" }}>
        <Col md={4} style={{ padding: 0, overflow: "hidden" }}>
          <Image
            src={imageUrl}
            height="100%"
            style={{ objectFit: "cover", objectPosition: "-70px" }}
          />
        </Col>
        <Col md={8} style={{ padding: "20px" }}>
          <Row>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
              }}
            >
              <h3>{character.attributes.name}</h3>
              <h5 style={{ marginBottom: 0 }}>
                Nivel: {character.attributes.level}
              </h5>
            </Col>
            <Col>
              <p style={{ marginBottom: "5px" }}>
                HP: {character.attributes.health}/50
              </p>
              <ProgressBar
                variant="success"
                now={health}
                label={`${health}%`}
              />
              <p style={{ marginBottom: "5px" }}>
                EXP: {character.attributes.experience}/100
              </p>
              <ProgressBar
                now={character.attributes.experience}
                label={`${character.attributes.experience}%`}
              />
            </Col>
          </Row>
          <Row style={{ paddingTop: "25px" }}>
            <Col>
              <h5>{character.attributes.race.data.attributes.Name}</h5>
              <h6 style={{ marginBottom: 0 }}>
                {character.attributes.race.data.attributes.Skill}
              </h6>
            </Col>
          </Row>
          <Row style={{ paddingTop: "25px" }}>
            <Col>
              <h5>{character.attributes.job.data.attributes.Name}</h5>
              <h6 style={{ marginBottom: 0 }}>
                {character.attributes.job.data.attributes.Skill}
              </h6>
            </Col>
          </Row>
          <Row style={{ paddingTop: "25px" }}>
            <Col>
              <h5>Stats</h5>
              <Row>
                <Col>
                  <Table
                    style={{ textAlign: "center" }}
                    striped
                    bordered
                    hover
                    variant="dark"
                  >
                    <thead>
                      <tr>
                        <th>S</th>
                        <th>P</th>
                        <th>E</th>
                        <th>C</th>
                        <th>I</th>
                        <th>A</th>
                        <th>L</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{character.attributes.strength}</th>
                        <th>{character.attributes.perception}</th>
                        <th>{character.attributes.endurance}</th>
                        <th>{character.attributes.charisma}</th>
                        <th>{character.attributes.intelligence}</th>
                        <th>{character.attributes.agility}</th>
                        <th>{character.attributes.luck}</th>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ paddingTop: "25px" }}>
            <Col>
              <Table
                style={{ textAlign: "center" }}
                striped
                bordered
                hover
                variant="dark"
              >
                <tbody>
                  <tr>
                    <th>Equipo</th>
                    <th>{character.attributes.perception}</th>
                    <th>{character.attributes.endurance}</th>
                    <th>{character.attributes.charisma}</th>
                    <th>{character.attributes.intelligence}</th>
                    <th>{character.attributes.agility}</th>
                    <th>{character.attributes.luck}</th>
                  </tr>
                  <tr>
                    <th>Inventario</th>
                    <th>{character.attributes.perception}</th>
                    <th>{character.attributes.endurance}</th>
                    <th>{character.attributes.charisma}</th>
                    <th>{character.attributes.intelligence}</th>
                    <th>{character.attributes.agility}</th>
                    <th>{character.attributes.luck}</th>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
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
