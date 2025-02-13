import { Link } from "react-router-dom";
import "./DistributionValidation.scss";

import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import GenericButton from "../../components/GenericButton/GenericButton";

function DistributionValidation(props) {
  // const clientDetails = JSON.parse(localStorage.getItem("clientDetails"));
  const objectNumber = localStorage.getItem("objectNumber");
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
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
        <div className="objectNumber">{objectNumber}</div>
        <div className="recipient">
          <h4>destinataire</h4>
          <p>{name}</p>
        </div>
        <div className="address">
          <h4>adresse</h4>
          <p>{address}</p>
        </div>
        <div className="confirmation">
          <h4>geste de disrtibution</h4>
          <p>{distributionReason}</p>
        </div>
      </main>

      <div className="validationFooter">
        <Link to="/ObjectList" onClick={() => localStorage.clear()}>
          <GenericButton text="valider" />
        </Link>
      </div>
    </div>
  );
}

export default DistributionValidation;
