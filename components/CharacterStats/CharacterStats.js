import React from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { CharacterStat } from "../../components";

const CharacterStats = ({ character }) => {
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <CharacterStat
          stat={character.strength}
          statAcronym="S"
          statName="strength"
          statNameEsp="fuerza"
          equipment={character.equipment}
        />
        <CharacterStat
          stat={character.perception}
          statAcronym="P"
          statName="perception"
          statNameEsp="percepción"
          equipment={character.equipment}
        />
        <CharacterStat
          stat={character.endurance}
          statAcronym="E"
          statName="endurance"
          statNameEsp="resistencia"
          equipment={character.equipment}
        />
        <CharacterStat
          stat={character.charisma}
          statAcronym="C"
          statName="charisma"
          statNameEsp="carisma"
          equipment={character.equipment}
        />
        <CharacterStat
          stat={character.intelligence}
          statAcronym="I"
          statName="intelligence"
          statNameEsp="inteligencia"
          equipment={character.equipment}
        />
        <CharacterStat
          stat={character.agility}
          statAcronym="A"
          statName="agility"
          statNameEsp="agilidad"
          equipment={character.equipment}
        />
        <CharacterStat
          stat={character.luck}
          statAcronym="L"
          statName="luck"
          statNameEsp="suerte"
          equipment={character.equipment}
        />
      </tbody>
    </Table>
  );
};

export default CharacterStats;
