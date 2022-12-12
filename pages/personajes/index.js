import React, { useEffect, useState } from "react";
import Link from "next/link";

import { fetchAPI } from "../../lib/api";

import { Container, Row } from "react-bootstrap";
import { CharacterCard } from "../../components";

import styles from "../../styles/pages/personajes.module.scss";

const personajes = () => {
  //useState hook para guardar la información de los personajes
  const [characters, setCharacters] = useState(undefined);

  //hook que sirve para ejecutar código cuando se renderiza el dom
  //si se meten variables dentro del array del segundo parametro, se ejecutará el código cada vez que se actualizen las variables dentro del array
  useEffect(() => {
    /*Función asincrona para recibir los personajes del api*/
    //el parametro populate sirve para obtener también la información sobre las entidades relacionadas con el personaje
    //es decir se obtienen los datos de su raza, oficio, inventario y equipo
    async function fetchCharacters() {
      const charactersResponse = await fetchAPI("/characters", {
        populate: "*",
      });
      //se guarda la respuesta de la petición en la variable characters
      setCharacters(charactersResponse);
    }
    fetchCharacters();
  }, []);

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

export default personajes;
