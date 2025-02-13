import { FaSquareArrowUpRight } from "react-icons/fa6";
import "./ObjectCard.scss";

import React from "react";
import { Link } from "react-router-dom";

function ObjectCard({ nom, adresse, numeroObjet }) {
  function onCLickCard(e) {
  //   const contactDetails = {
  //   "name": nom,
  //   "address": adresse,
  //   "distributionReason": ""
  // }
  // const infosClient = []
  // console.log(infosClient);
  // infosClient.push(contactDetails)
  // console.log(infosClient);
  // localStorage.setItem("clientDetails", JSON.stringify(...infosClient))


  localStorage.setItem("name", nom)
  localStorage.setItem("address", adresse)
  localStorage.setItem("objectNumber", numeroObjet)
    
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
