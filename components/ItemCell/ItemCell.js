import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  GiAbstract047,
  GiBroadsword,
  GiCapeArmor,
  GiChestArmor,
  GiCrossbow,
  GiDoorRingHandle,
  GiEdgedShield,
  GiGemPendant,
  GiLeatherArmor,
  GiPiercingSword,
  GiPlainDagger,
  GiPocketBow,
  GiSharpAxe,
  GiTravelDress,
} from "react-icons/gi";
import { IoHandLeftOutline, IoHandRightOutline } from "react-icons/io5";

const ItemCell = ({ item, name = "", colspan = 1 }) => {
  const itemTooltip = (props) => (
    <Tooltip {...props}>
      <div>{item.name}</div>
      <div className={item.tier.name}>{item.tier.name}</div>
      {item.bonus > 0 && (
        <div className="Alto">
          +{item.bonus} {item.bonusType}
        </div>
      )}
      {item.penalty > 0 && (
        <div className="Bajo">
          -{item.penalty} {item.penaltyType}
        </div>
      )}
    </Tooltip>
  );

  const emptyTooltip = (props) => <Tooltip {...props}>Nada Equipado</Tooltip>;

  function getIcon(name) {
    switch (name) {
      case "Espada":
        return <GiBroadsword />;
      case "Escudo":
        return <GiEdgedShield />;
      case "Armadura Ligera":
        return <GiLeatherArmor />;
      case "Armadura Pesada":
        return <GiCapeArmor />;
      case "Mandoble":
        return <GiPiercingSword />;
      case "Hacha":
        return <GiSharpAxe />;
      case "Daga":
        return <GiPlainDagger />;
      case "Túnica":
        return <GiTravelDress />;
      case "Bastón":
        return <GiWizardStaff />;
      case "Arco":
        return <GiPocketBow />;
      case "Ballesta":
        return <GiCrossbow />;
      case "Colgante":
        return <GiGemPendant />;
      case "Anillo":
        return <GiDoorRingHandle />;
      case "Mano Izquierda":
        return <IoHandLeftOutline />;
      case "Mano Derecha":
        return <IoHandRightOutline />;
      case "Armadura":
        return <GiChestArmor />;
      case "Accesorio 1":
        return <GiAbstract047 />;
      case "Accesorio 2":
        return <GiAbstract047 />;
    }
  }

  if (item && item.name) {
    return (
      <OverlayTrigger
        placement="top"
        delay={{ show: 100, hide: 100 }}
        overlay={itemTooltip}
        trigger={["hover", "click"]}
      >
        <td colSpan={colspan} className={item.tier.name}>
          {getIcon(item.type.name)} {item.name}
        </td>
      </OverlayTrigger>
    );
  }

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 100, hide: 100 }}
      overlay={emptyTooltip}
      trigger={["hover", "click"]}
    >
      <td colSpan={colspan}>
        {getIcon(name)} {name}
      </td>
    </OverlayTrigger>
  );
};

export default ItemCell;
