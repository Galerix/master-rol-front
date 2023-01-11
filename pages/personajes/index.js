import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { fetchAPI } from "../../lib/api";

import { Button, Container, Row } from "react-bootstrap";
import { CharacterCard } from "../../components";

const Personajes = ({ characters }) => {
  const router = useRouter();

  return (
    <Container>
      <Link href="/" className="backButton">
        <h2>← Atrás</h2>
      </Link>
      <Button
        className="addPersonaje"
        variant="primary"
        size="lg"
        onClick={() => {
          router.push("/crear-personaje");
        }}
      >
        AÑADIR PERSONAJE
      </Button>
      <h1>Personajes</h1>
      <Row xs={{ cols: 1 }} md={{ cols: 5 }} className="characterRow">
        {characters &&
          characters.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
      </Row>
    </Container>
  );
};

export async function getStaticProps() {
  const { characters } = await fetchAPI("/characters");
  return {
    props: { characters },
    revalidate: 1,
  };
}

export default Personajes;
