import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CharacterStat = ({
  stat,
  statAcronym,
  statName,
  statNameEsp,
  equipment,
}) => {
  var bonusItems = [];
  var penaltyItems = [];

  function addVariations(item) {
    if (item.bonus && item.bonusType == statName) {
      bonusItems.push(item);
    }
    if (item.penalty && item.penaltyType == statName) {
      penaltyItems.push(item);
    }
  }

  addVariations(equipment.leftHand);
  addVariations(equipment.rightHand);
  addVariations(equipment.armor);
  addVariations(equipment.accessory1);
  addVariations(equipment.accessory2);

  var statStyle =
    stat.final > stat.initial
      ? "Raro"
      : stat.final < stat.initial
      ? "Bajo"
      : "Normal";

  const statTooltip = (props) => (
    <Tooltip id="strength-tooltip" {...props}>
      {stat.initial} {statName} ({statNameEsp}) <br />
      {bonusItems.map((bonusItem) => (
        <div className="Raro">
          +{bonusItem.bonus} ({bonusItem.name})
        </div>
      ))}
      {penaltyItems.map((penaltyItem) => (
        <div className={"Bajo"}>
          -{penaltyItem.penalty} ({penaltyItem.name})
        </div>
      ))}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="left"
      delay={{ show: 100, hide: 100 }}
      overlay={statTooltip}
      trigger={["hover", "click"]}
      key={statAcronym}
    >
      <tr>
        <th>{statAcronym}</th>
        <th className={statStyle}>{stat.final}</th>
      </tr>
    </OverlayTrigger>
  );
};

export default CharacterStat;
