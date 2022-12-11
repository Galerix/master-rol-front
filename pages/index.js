import Head from "next/head";
import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import MenuCard from "../components/menuCard/menuCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container style={{ textAlign: "center", padding: "4rem 0" }}>
      <h1>Master Rol</h1>

      <Row>
        <MenuCard
          styles={styles}
          link="/personajes"
          name="Personajes"
          image="/characters.png"
        />
        <MenuCard
          styles={styles}
          link="/enemigos"
          name="Enemigos"
          image="/orc.png"
        />
        <MenuCard
          styles={styles}
          link="/baul"
          name="Cofre"
          image="/chest.png"
        />
        <MenuCard
          styles={styles}
          link="/objetos"
          name="Objetos"
          image="/weapons.png"
        />
      </Row>
    </Container>
  );
}

