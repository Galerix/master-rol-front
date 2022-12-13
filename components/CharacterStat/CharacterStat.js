import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CharacterStat = ({ stat, statAcronym, statName, statNameEsp, items }) => {
  var statComplete = stat;

  var bonusItems = [];

  items.map((item) => {
    if (item.attributes.bonus && item.attributes.bonusType == statName) {
      bonusItems.push(item);
      statComplete += item.attributes.bonus;
    }
  });

  const statTooltip = (props) => (
    <Tooltip id="strength-tooltip" {...props}>
      {stat} {statName} ({statNameEsp}) <br />
      {bonusItems.map((bonusItem) => (
        <div className={bonusItem.attributes.Range}>
          +{bonusItem.attributes.bonus} ({bonusItem.attributes.Name})
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
    >
      <tr>
        <th>{statAcronym}</th>
        <th className={statComplete != stat ? "Raro" : "Normal"}>
          {statComplete}
        </th>
      </tr>
    </OverlayTrigger>
  );
};

export default CharacterStat;
