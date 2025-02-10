import "./Recap.scss";

import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRotateRight, FaX } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { LuClipboardCheck } from "react-icons/lu";
import { PiExclamationMarkDuotone, PiListBullets } from "react-icons/pi";
import { Link } from "react-router-dom";
import GenericButton from "../../components/GenericButton/GenericButton";
import baseObjets from "../../data/baseObjets.json";
import { IoCubeOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { TbMapPins } from "react-icons/tb";
function Recap(props) {
  return (
    <div className="recapContainer">
      <div className="recapHeader">
        <div className="left">
          <IoIosMenu />
          <p>Portail</p>
        </div>
        <div className="right">
          <PiExclamationMarkDuotone />
          <PiListBullets />
          <CiMenuKebab />
        </div>
      </div>
      <div className="recapObjects">
        <div className="top">
          <h2>
            <FaX />
            TC 9012
          </h2>
          <div className="loader">
            <FaArrowRotateRight />
          </div>
        </div>
        <Link to="/ObjectList" className="palm">
          <div className="title"><p>
            <TbMapPins />palm
          </p></div>
          <p className="number">{baseObjets.length}</p>
          <p>PRET</p>
          <div className="rightVerticaleLine"></div>
        </Link>
        <Link className="prestation">
          <div className="title"><p>
            <FiMapPin />Prestations
          </p></div>
          <p className="number">0</p>
          <p></p> <div className="rightVerticaleLine"></div>
        </Link>
        <Link className="collectes">
          <div className="title"><p>
            <FiMapPin />Collectes
          </p></div>
          <p className="number">0</p>
          <p></p> <div className="rightVerticaleLine"></div>
        </Link>
        <Link className="pickup">
          <div className="title"><p>
            <IoCubeOutline />pickup
          </p></div>
          <p className="number">0</p>
          <p></p> <div className="rightVerticaleLine"></div>
        </Link>
        <Link className="services">
          <p>
            <LuClipboardCheck />
            mes services
          </p>
          <FaChevronRight />
        </Link>
      </div>
      <div className="recapFooter">
        <GenericButton text="ajouter tournée(s)" />
        <GenericButton text="préparer tournée(s)" />
      </div>
    </div>
  );
}

export default Recap;
