import { Link } from "react-router-dom";
import "./SignatureType.scss";

import React from "react";
import { FaPen } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import { RiBarcodeLine } from "react-icons/ri";
import GenericButton from "../../components/GenericButton/GenericButton";

function SignatureType(props) {
  const objectNumber = localStorage.getItem("objectNumber");
  return (
    <div className="signatureTypeContainer">
      <div className="signatureTypeHeader">
        <Link to="/ObjectList">
          <IoIosMenu />
        </Link>
        <IoCubeOutline />
        colissimo
      </div>
      <main>
        <div className="objectNumber">{objectNumber}</div>
        <h4>Veuillez choisir le mode de signature</h4><hr/>
        <div className="types">
          <div className="type">
            <Link>
                <GenericButton
                  icon={<RiBarcodeLine />}
                />
            </Link>
            <p>Recueillir une signature digitale</p>
          </div>
          <div className="type">
            <Link to="/Signature">
                <GenericButton
                  icon={<FaPen />}
                />
            </Link>
            <p>Faire signer le destinataire</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignatureType;
