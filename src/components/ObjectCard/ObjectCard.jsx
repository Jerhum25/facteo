import { FaSquareArrowUpRight } from "react-icons/fa6";
import "./ObjectCard.scss";

import React from "react";
import { Link } from "react-router-dom";

function ObjectCard({ nom, adresse, numeroObjet }) {
  function onCLickCard(e) {
    localStorage.setItem("clientDetails", JSON.stringify(contactDetails))
  }
const contactDetails = {
    "name": nom,
    "address": adresse,
    "objectNumber": numeroObjet,
    "distributionReason": ""
}
  return (
    <Link
      to="/ObjectDetails"
      className="ObjectCardContainer"
      onClick={onCLickCard}
    >
      <p className="adresse">
        {adresse}
        <FaSquareArrowUpRight />
      </p>
      <div>
        <p className="nom">{nom}</p>
        <p className="numeroObjet">{numeroObjet}</p>{" "}
        <div className="rightVerticaleLine"></div>
      </div>
    </Link>
  );
}

export default ObjectCard;
