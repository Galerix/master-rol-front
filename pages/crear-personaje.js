import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { fetchAPI } from "../lib/api";

const CrearPersonaje = ({ jobs, races }) => {
  const [name, setName] = useState("");
  const [race, setRace] = useState(races[0]);
  const [job, setJob] = useState(jobs[0]);

  function calcHealth() {
    return (
      race.attributes.ratioHPE *
      (race.attributes.enduranceBase +
        (job.attributes.bonusType == "endurance"
          ? job.attributes.bonusStat
          : 0))
    );
  }

  function createSlug() {
    return name.toLowerCase().replace(" ", "-");
  }

  async function handleSubmit() {
    try {
      const response = await fetchAPI("/characters", null, {
        method: "POST",
        body: JSON.stringify({
          data: {
            name,
            race: race.id,
            job: job.id,
            level: 1,
            experience: 0,
            health: calcHealth(),
            slug: createSlug(),
          },
        }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1>Creador de Personajes</h1>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Raza</Form.Label>
          <Form.Select
            aria-label="razas"
            value={race}
            defaultValue={races[0]}
            onChange={(e) => {
              setRace(e.target.value);
            }}
          >
            {races &&
              races.map((race) => {
                return (
                  <option key={race.id} value={race}>
                    {race.attributes.name}
                  </option>
                );
              })}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Oficio</Form.Label>
          <Form.Select
            aria-label="oficios"
            value={job}
            defaultValue={jobs[0].id}
            onChange={(e) => {
              setJob(e.target.value);
            }}
          >
            {jobs &&
              jobs.map((job) => {
                return (
                  <option key={job.id} value={job}>
                    {job.attributes.name}
                  </option>
                );
              })}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Crear
        </Button>
      </Form>
    </Container>
  );
};

export async function getStaticProps() {
  const jobsResponse = await fetchAPI("/jobs");
  const racesResponse = await fetchAPI("/races");

  return {
    props: { jobs: jobsResponse.data, races: racesResponse.data },
    revalidate: 1,
  };
}

export default CrearPersonaje;
