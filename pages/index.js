import { Container, Row } from "react-bootstrap";
import { MenuCard } from "../components";

export default function Home() {
  return (
    <Container>
      <h1>Master Rol</h1>

      <Row>
        <MenuCard
          link="/personajes"
          name="Personajes"
          image="/characters.png"
        />
        <MenuCard link="/enemigos" name="Enemigos" image="/orc.png" />
        <MenuCard link="/cofre" name="Cofre" image="/chest.png" />
        <MenuCard link="/objetos" name="Objetos" image="/weapons.psng" />
      </Row>
    </Container>
  );
}

