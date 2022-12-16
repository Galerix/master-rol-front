import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { fetchAPI } from "../../lib/api";

import { Button, Container, Row } from "react-bootstrap";
import { CharacterCard } from "../../components";

import styles from "../../styles/pages/personajes.module.scss";

const Personajes = ({ characters }) => {
  const router = useRouter();

  return (
    <Container>
      <Link href="/" className="backButton">
        <h2>← Atrás</h2>
      </Link>
      <h1>Personajes</h1>
      <Row md={{ cols: 5 }} className={styles.characterRow}>
        {characters &&
          characters.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
      </Row>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          router.push("/crear-personaje");
        }}
      >
        AÑADIR PERSONAJE
      </Button>
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
