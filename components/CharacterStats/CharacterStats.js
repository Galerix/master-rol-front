import React from "react";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";

const CharacterStats = ({ character }) => {
  const strengthTooltip = (props) => (
    <Tooltip id="strength-tooltip" {...props}>
      Strength (Fuerza)
    </Tooltip>
  );
  const perceptionTooltip = (props) => (
    <Tooltip id="strength-tooltip" {...props}>
      Perception (Percepción)
    </Tooltip>
  );
  const enduranceTooltip = (props) => (
    <Tooltip id="strength-tooltip" {...props}>
      Endurance (Resistencia)
    </Tooltip>
  );
  const charismaTooltip = (props) => (
    <Tooltip id="strength-tooltip" {...props}>
      Charisma (Carisma)
    </Tooltip>
  );
  const intelligenceTooltip = (props) => (
    <Tooltip id="strength-tooltip" {...props}>
      Intelligence (Inteligencia)
    </Tooltip>
  );
  const agilityTooltip = (props) => (
    <Tooltip id="strength-tooltip" {...props}>
      Agility (Agilidad)
    </Tooltip>
  );
  const luckTooltip = (props) => (
    <Tooltip id="strength-tooltip" {...props}>
      Luck (Suerte)
    </Tooltip>
  );

  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={strengthTooltip}
          trigger={["hover", "click"]}
        >
          <tr>
            <th>S</th>
            <th>{character.attributes.strength}</th>
          </tr>
        </OverlayTrigger>

        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={perceptionTooltip}
          trigger={["hover", "click"]}
        >
          <tr>
            <th>P</th>
            <th>{character.attributes.perception}</th>
          </tr>
        </OverlayTrigger>
        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={enduranceTooltip}
          trigger={["hover", "click"]}
        >
          <tr>
            <th>E</th>
            <th>{character.attributes.endurance}</th>
          </tr>
        </OverlayTrigger>
        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={charismaTooltip}
          trigger={["hover", "click"]}
        >
          <tr>
            <th>C</th>
            <th>{character.attributes.charisma}</th>
          </tr>
        </OverlayTrigger>
        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={intelligenceTooltip}
          trigger={["hover", "click"]}
        >
          <tr>
            <th>I</th>
            <th>{character.attributes.intelligence}</th>
          </tr>
        </OverlayTrigger>
        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={agilityTooltip}
          trigger={["hover", "click"]}
        >
          <tr>
            <th>A</th>
            <th>{character.attributes.agility}</th>
          </tr>
        </OverlayTrigger>
        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={luckTooltip}
          trigger={["hover", "click"]}
        >
          <tr>
            <th>L</th>
            <th>{character.attributes.luck}</th>
          </tr>
        </OverlayTrigger>
      </tbody>
    </Table>
  );
};

export default CharacterStats;
