import React from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { CharacterStat } from "../../components";

const CharacterStats = ({ character }) => {
  var items = [];

  character.attributes.inventory.data.map((item) => {
    items.push(item);
  });

  character.attributes.equipment.data.map((item) => {
    items.push(item);
  });

  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <CharacterStat
          stat={character.attributes.strength}
          statAcronym="S"
          statName="Strength"
          statNameEsp="Fuerza"
          items={items}
        />
        <CharacterStat
          stat={character.attributes.perception}
          statAcronym="P"
          statName="Perception"
          statNameEsp="Percepción"
          items={items}
        />
        <CharacterStat
          stat={character.attributes.endurance}
          statAcronym="E"
          statName="Endurance"
          statNameEsp="Resistencia"
          items={items}
        />
        <CharacterStat
          stat={character.attributes.charisma}
          statAcronym="C"
          statName="Charisma"
          statNameEsp="Carisma"
          items={items}
        />
        <CharacterStat
          stat={character.attributes.intelligence}
          statAcronym="I"
          statName="Intelligence"
          statNameEsp="Inteligencia"
          items={items}
        />
        <CharacterStat
          stat={character.attributes.agility}
          statAcronym="A"
          statName="Agility"
          statNameEsp="Agilidad"
          items={items}
        />
        <CharacterStat
          stat={character.attributes.strength}
          statAcronym="L"
          statName="Luck"
          statNameEsp="Suerte"
          items={items}
        />
      </tbody>
    </Table>
  );
};

export default CharacterStats;
