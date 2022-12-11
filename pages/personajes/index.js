import React, { useEffect, useState } from "react";
import Link from "next/link";

import { fetchAPI } from "../../lib/api";

import { Container, Row } from "react-bootstrap";
import { CharacterCard } from "../../components";

const personajes = () => {
  const [characters, setCharacters] = useState(undefined);

  useEffect(() => {
    async function fetchCharacters() {
      const charactersResponse = await fetchAPI("/characters", {
        populate: "*",
      });
      setCharacters(charactersResponse);
    }
    fetchCharacters();
  }, []);

  return (
    <Container>
      <Link href="/" className="back-button">
        <h2>← Atrás</h2>
      </Link>
      <h1>Personajes</h1>
      <Row md={{ cols: 5 }} style={{ justifyContent: "center" }}>
        {characters &&
          characters.data.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
      </Row>
    </Container>
  );
};

export default personajes;
