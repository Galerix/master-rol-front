import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CharacterCard from "../../components/characterCard/characterCard";
import { fetchAPI } from "../../lib/api";

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
    <Container style={{ textAlign: "center", padding: "4rem 0" }}>
      <Link
        href="/"
        style={{ position: "absolute", left: "20px", top: "20px" }}
      >
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
