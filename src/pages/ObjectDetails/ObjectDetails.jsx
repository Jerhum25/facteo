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
import GenericButton from "../../components/GenericButton/GenericButton";
import { Link } from "react-router-dom";

function ObjectDetails({nom, adresse, numeroObjet}) {

const client = JSON.parse(localStorage.getItem("clientList"))


  return (
    <div className="objectDetailsContainer">
      <div className="detailsHeader">
        <Link to="/">
            <IoIosMenu />
        </Link>
        <IoCubeOutline />
        colissimo
      </div>
      <main>
        <div className="objectNumber">{client.objectNumber}</div>
        <div className="contactIcons">
          <GenericButton icon={<FiPhone />} />
          <GenericButton icon={<HiOutlineChatBubbleBottomCenterText />} />
          <GenericButton icon={<IoIosInformationCircleOutline />} />
        </div>
        <div className="recipient">
          <h4>destinataire</h4>
          <p>{client.name}</p>
        </div>
        <div className="address">
          <h4>adresse</h4>
          <p>{client.address}</p>
          <GenericButton icon={<FaPen />} />
        </div>
      </main>

      <div className="detailsFooter">
        <GenericButton text="Boîte aux lettres" icon={<PiMailboxLight />} />
        <GenericButton text="Destinataire" icon={<GrUserManager />} />
        <GenericButton text="Tiers" icon={<PiUsersThreeLight />} />
        <GenericButton text="Non remis" icon={<BsXCircle />} />
      </div>
    </div>
  );
}

export default ObjectDetails;
