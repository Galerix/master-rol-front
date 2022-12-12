import React, { useEffect, useState } from "react";
import Link from "next/link";

import { fetchAPI } from "../../lib/api";

import { Container, Row } from "react-bootstrap";
import { CharacterCard } from "../../components";

import styles from "../../styles/pages/personajes.module.scss";

const Personajes = ({characters}) => {

  return (
    <Container>
      <Link href="/" className="backButton">
        <h2>← Atrás</h2>
      </Link>
      <h1>Personajes</h1>
      <Row md={{ cols: 5 }} className={styles.characterRow}>
        {characters &&
          characters.data.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
      </Row>
    </Container>
  );
};

export async function getStaticProps() {
  const charactersRes = await fetchAPI("/characters", {
    populate: "*",
  });


  return {
    props: { characters: charactersRes },
    revalidate: 1,
  };
}

export default Personajes;
