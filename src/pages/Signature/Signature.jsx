import { Link } from "react-router-dom";
import GenericButton from "../../components/GenericButton/GenericButton";
import "./Signature.scss";

import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import ReactSignatureCanvas from "react-signature-canvas";

function Signature(props) {
  const signatureCanvas = useRef(null);
  const name = localStorage.getItem("name");
  const sigCanvas = useRef(null);
  //   function clear() {
  //     // const signatureCanvas = document.querySelector(".signatureCanvas")
  //     signatureCanvas.current.clear();
  //   }
  function clear() {
    sigCanvas.current.clear();
  }
  return (
    <div className="signatureContainer">
      <div className="signatureHeader">
        <p>
          Le livreur ne peut assister à l'ouverture du colis mais vous
          pouvezexprimer des réserves sur son état ou le refuser
        </p>
      </div>
      <main>
        <div className="reserves">
          <GenericButton text="Emettre des réserves" />
        </div>
        <div className="signatureBoard">
          <ReactSignatureCanvas
            penColor="black"
            canvasProps={{
              /* minWidth: "min-content", height: "max-content", */ className:
                "signatureCanvas",
              position: "relative",
            }}
            ref={sigCanvas}
          />
          <div className="placeholderCanvas">
            <p>
              Je soussigné, Monsieur, Madame {name} réceptionne le colis en
              l'état.
            </p>
          </div>
        </div>
        <Link className="legalNotices">Mentionslégales</Link>
      </main>
      <div className="signatureFooter">
        <Link to="/DistributionValidation">
          <GenericButton icon={<FaCheck />} />
        </Link>
        <Link>
          <GenericButton icon={<FaRegTrashCan />} onClick={clear} />
        </Link>
      </div>
    </div>
  );
}

export default Signature;
