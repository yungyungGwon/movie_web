import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";

import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <div className="nav_title_btn">
          <li>
            <Link to="/">Movie Web</Link>
          </li>
        </div>
        <div className="nav_btns">
          <li>
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch} color={"#fff"} size={"2x"} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} color={"#fff"} size={"2x"} />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
