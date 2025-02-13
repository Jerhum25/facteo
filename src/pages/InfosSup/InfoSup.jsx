import { Link } from "react-router-dom";
import "./InfoSup.scss";

import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import GenericButton from "../../components/GenericButton/GenericButton";

function InfoSup(props) {
  const objectNumber = localStorage.getItem("objectNumber");
  const name = localStorage.getItem("name");

  return (
    <div className="infosSupContainer">
      <div className="infosSupHeader">
        <Link to="/ObjectList">
          <IoIosMenu />
        </Link>
        <IoCubeOutline />
        colissimo
      </div>
      <main>
        <div className="objectNumber">{objectNumber}</div>

        <h4>Préciser les informations suivantes</h4>
        <hr />
        <div className="recipient">
          <h5>
            Destinataire <div className="line"></div>
          </h5>
          <p>Nom destinataire</p>
          <input type="text" placeholder={name ? name : "Nom Prénom"} />
          <input type="text" placeholder="Ville" />
          <input type="text" placeholder="Rue" />
          <input type="text" placeholder="Numéro rue" />
          <input type="text" placeholder="Lieu-dit" />
          <input type="text" placeholder="Appartement et/ou Etage" />
          <Link to="/DistributionValidation">
            <GenericButton text="Valider sans signature" />
          </Link>
          <Link to="/SignatureType">
            <GenericButton text="Demander une signature" />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default InfoSup;
