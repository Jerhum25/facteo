import { IoIosInformationCircleOutline, IoIosMenu } from "react-icons/io";
import "./ObjectDetails.scss";

import React from "react";
import { BsXCircle } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoCubeOutline } from "react-icons/io5";
import { PiMailboxLight, PiUsersThreeLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import GenericButton from "../../components/GenericButton/GenericButton";

function ObjectDetails() {
  let clientDetails = JSON.parse(localStorage.getItem("clientDetails"));

  function recupDistri(e) {
    localStorage.setItem("distributionReason", "Objet remis en BAL");
  }

  return (
    <div className="objectDetailsContainer">
      <div className="detailsHeader">
        <Link to="/ObjectList">
          <IoIosMenu />
        </Link>
        <IoCubeOutline />
        colissimo
      </div>
      <main>
        <div className="objectNumber">{clientDetails.objectNumber}</div>
        <div className="contactIcons">
          <GenericButton icon={<FiPhone />} />
          <GenericButton icon={<HiOutlineChatBubbleBottomCenterText />} />
          <GenericButton icon={<IoIosInformationCircleOutline />} />
        </div>
        <div className="recipient">
          <h4>destinataire</h4>
          <p>{clientDetails.name}</p>
        </div>
        <div className="address">
          <h4>adresse</h4>
          <p>{clientDetails.address}</p>
          <GenericButton icon={<FaPen />} />
        </div>
      </main>

      <div className="detailsFooter">
        <Link to="/DistributionValidation" onClick={recupDistri}>
          <GenericButton text="Boîte aux lettres" icon={<PiMailboxLight />} />
        </Link>
        <Link>
          <GenericButton text="Destinataire" icon={<GrUserManager />} />
        </Link>
        <Link>
          <GenericButton text="Tiers" icon={<PiUsersThreeLight />} />
        </Link>
        <Link>
          <GenericButton text="Non remis" icon={<BsXCircle />} />
        </Link>
      </div>
    </div>
  );
}

export default ObjectDetails;
