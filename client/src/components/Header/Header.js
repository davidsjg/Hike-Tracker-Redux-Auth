import React from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={["mainContain"]}>
      <div className="leftHeader">
        <Link to="/" className={["leftLink"]}>
          <i class="fas fa-hiking fa-lg"></i>
        </Link>
      </div>
      <div className="centerHeader">
        <Link to="/">
          <h1>Hike Tracker 5000</h1>
        </Link>
      </div>
      <div className="rightHeader">
        <Link to="/auth">
          <h4>Login/Signup</h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;
