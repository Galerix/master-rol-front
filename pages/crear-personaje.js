import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { fetchAPI } from "../lib/api";
import { CharacterStats, EquipmentTable, InventoryTable } from "../components";
import { FormData } from "formdata-node";
import { calcHealth, createCharacter, createSlug } from "../lib/utils";

const CrearPersonaje = ({ jobs, races }) => {
  const [name, setName] = useState("");
  const [raceId, setRaceId] = useState(races[0].id);
  const [race, setRace] = useState(races[0]);
  const [jobId, setJobId] = useState(jobs[0].id);
  const [job, setJob] = useState(jobs[0]);
  const [health, setHealth] = useState(0);
  const [character, setCharacter] = useState();
  const [files, setFiles] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const imageInputElement = useRef();

  //Calcular la Salud cuando se actualiza la raza y el oficio
  useEffect(() => {
    const healthTemp = calcHealth(race, job);
    setHealth(healthTemp);
  }, [race, job]);

  useEffect(() => {
    const characterTemp = createCharacter(name, race, job, health);
    setCharacter(characterTemp);
  }, [race, job]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      let imageId = null;

      if (files) {
        const form = new FormData();
        form.append("files", files[0], files[0].name);

        const imageResponse = await fetch("http://localhost:1337/api/upload", {
          method: "post",
          body: form,
        });

        const imageResult = await imageResponse.json();

        imageId = imageResult[0].id;
      }

      await fetchAPI("/characters", null, {
        method: "POST",
        body: JSON.stringify({
          data: {
            name,
            race: race.id,
            job: job.id,
            level: 1,
            experience: 0,
            health,
            slug: createSlug(name),
            image: imageId,
            leftHand: job.leftHand ? job.leftHand.id : null,
            rightHand: job.rightHand ? job.rightHand.id : null,
            armor: job.armor ? job.armor.id : null,
            accessory1: job.accesory1 ? job.accesory1.id : null,
            accessory2: job.accesory2 ? job.accesory2.id : null,
          },
        }),
      });
      setSuccess("Has creado un personaje correctamente!");
    } catch (error) {
      console.log(error);
      setError("No has podido crear el personaje :(");
    }
    setLoading(false);
  }

  return (
    <Container fluid className="characterSheet">
      <Link href="/personajes" className="backButton">
        <h2>← Atrás</h2>
      </Link>

      <Row>
        <Col sm={4} className="imageStats">
          <div className="imageContainer">
            <div
              className="clickableText"
              onClick={() => {
                imageInputElement.current.click();
              }}
            >
              {!imgSrc && <h2>Subir Imagen</h2>}
            </div>
            <Image src={imgSrc} />
          </div>
          {character && <CharacterStats character={character} />}
        </Col>
        <Col sm={4} className="infoCol">
          <h1>Crear Personaje</h1>
          <Form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Raza</Form.Label>
              <Form.Select
                required
                aria-label="razas"
                value={raceId}
                onChange={(e) => {
                  setRaceId(e.target.value);
                  const tempRace = races.find(
                    (race) => race.id == e.target.value
                  );
                  setRace(tempRace);
                }}
              >
                {races &&
                  races.map((race) => {
                    return (
                      <option key={race.id} value={race.id}>
                        {race.attributes.name}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Oficio</Form.Label>
              <Form.Select
                required
                aria-label="oficios"
                value={jobId}
                onChange={(e) => {
                  setJobId(e.target.value);
                  const tempJob = jobs.find((job) => job.id == e.target.value);
                  setJob(tempJob);
                }}
              >
                {jobs &&
                  jobs.map((job) => {
                    return (
                      <option key={job.id} value={job.id}>
                        {job.name}
                      </option>
                    );
                  })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="imageInput" controlId="image">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                ref={imageInputElement}
                type="file"
                placeholder="Imagen"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => {
                  e.preventDefault();
                  setFiles(e.target.files);
                  const imgSrcTemp = URL.createObjectURL(e.target.files[0]);
                  setImgSrc(imgSrcTemp);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>HP:</Form.Label>
              <ProgressBar
                variant="success"
                now={100}
                label={`${health} / ${health}`}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              style={{
                width: "100%",
                marginTop: "15px",
                marginBottom: "30px",
              }}
              disabled={loading}
            >
              {loading ? "Cargando…" : "Crear"}
            </Button>
          </Form>
        </Col>
        <Col className="itemTable">
          {character && (
            <EquipmentTable equipment={character.equipment} name="Equipo" />
          )}
          {character && (
            <InventoryTable items={character.inventory} name="Inventario" />
          )}
          {success && <Alert variant="success">{success}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export async function getStaticProps() {
  const { jobs } = await fetchAPI("/jobs");

  const racesResponse = await fetchAPI("/races");

  return {
    props: { jobs, races: racesResponse.data },
    revalidate: 1,
  };
}

export default CrearPersonaje;
