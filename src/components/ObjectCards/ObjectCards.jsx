import "./ObjectCards.scss";

import React from "react";
import baseObjets from "../../data/baseObjets.json";
import ObjectCard from "../ObjectCard/ObjectCard";
console.log(baseObjets);

function ObjectCards(props) {
  return (
    <div className="ObjectCardsContainer">
      {baseObjets.map((item, index) => (
        <ObjectCard
          key={index}
          nom={item.nom}
          adresse={item.adresse}
          numeroObjet={item.numeroObjet}
        />
      ))}
    </div>
  );
}

export default ObjectCards;
