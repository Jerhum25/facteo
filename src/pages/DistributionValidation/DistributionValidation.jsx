import { Link } from "react-router-dom";
import "./DistributionValidation.scss";

import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import GenericButton from "../../components/GenericButton/GenericButton";

function DistributionValidation(props) {
  const clientDetails = JSON.parse(localStorage.getItem("clientDetails"));
  const distributionReason = localStorage.getItem("distributionReason");
  return (
    <div className="distributionValidationContainer">
      <div className="validationHeader">
        <Link to="/ObjectList">
          <IoIosMenu />
        </Link>
        <IoCubeOutline />
        colissimo
      </div>
      <main>
        <div className="objectNumber">{clientDetails.objectNumber}</div>
        <div className="recipient">
          <h4>destinataire</h4>
          <p>{clientDetails.name}</p>
        </div>
        <div className="address">
          <h4>adresse</h4>
          <p>{clientDetails.address}</p>
        </div>
        <div className="confirmation">
          <p>{distributionReason}</p>
        </div>
      </main>

      <div className="validationFooter">
        <Link to="/ObjectList">
          <GenericButton text="valider" />
        </Link>
      </div>
    </div>
  );
}

export default DistributionValidation;
