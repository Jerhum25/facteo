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
  const objectNumber = localStorage.getItem("objectNumber");
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");


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
        <div className="objectNumber">{objectNumber}</div>
        <div className="contactIcons">
          <GenericButton icon={<FiPhone />} />
          <GenericButton icon={<HiOutlineChatBubbleBottomCenterText />} />
          <GenericButton icon={<IoIosInformationCircleOutline />} />
        </div>
        <div className="recipient">
          <h4>destinataire</h4>
          <p>{name}</p>
        </div>
        <div className="address">
          <h4>adresse</h4>
          <p>{address}</p>
          <GenericButton icon={<FaPen />} />
        </div>
      </main>

      <div className="detailsFooter">
        <Link
          to="/DistributionValidation"
          onClick={() =>
            localStorage.setItem("distributionReason", "Boîte à lettres")
          }
        >
          <GenericButton text="Boîte aux lettres" icon={<PiMailboxLight />} />
        </Link>
        <Link
          to="/InfosSup"
          onClick={() =>
            localStorage.setItem("distributionReason", "Destinataire")
          }
        >
          <GenericButton text="Destinataire" icon={<GrUserManager />} />
        </Link>
        <Link
          to="/DistributionValidation"
          onClick={() =>
            localStorage.setItem("distributionReason", "Tiers")
          }
        >
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
