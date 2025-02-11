import { FaArrowAltCircleLeft } from "react-icons/fa";
import ObjectCards from "../../components/ObjectCards/ObjectCards";
import "./ObjectsList.scss";

import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function ObjectsList(props) {
  return (
    <div className="objectsListContainer">
      {" "}
      <div className="recapHeader">
        <div className="left">
          <IoIosMenu />
          <p>Parcours</p>
        </div>
        <div className="right">
          <IoSearchSharp />
          <CiMenuKebab />
        </div>
      </div>
      <div className="sortList">
        <p>ordonné</p>
        <p>non ordonné</p>
      </div>
      <h3 className="tourNumber">TC 9012</h3>
      <ObjectCards />
      <Link to="/" className="backBtn">
        <FaArrowAltCircleLeft />
      </Link>
    </div>
  );
}

export default ObjectsList;
