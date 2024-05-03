import React, { createContext, useContext, useState } from "react";
import "./Css/Header.css";
import { Link } from "react-router-dom";
import { countContext } from "../App";

export const Header = () => {
  const [noOfItem, setNoOfItem] = useContext(countContext);
  return (
    <div className="Header">
      <div className="logo">
        {/* <img src="" alt="" /> */}
        <h4>
          <i class="bi bi-bag-dash-fill"></i> Food Restarent
        </h4>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/food"}> Receipies</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/addCard"}>
            <div className="addcard">
              <h5>
                <i class="bi bi-cart"></i>
              </h5>
              <p> {noOfItem} </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
