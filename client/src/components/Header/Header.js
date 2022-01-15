import React from "react";
import styles from "./Header.css";

function Header() {
  return (
    <div className={["mainContain"]}>
      <div className="leftHeader">Return Home</div>
      <div className="centerHeader">Hike Tracker 5000</div>
      <div className="rightHeader">Login/Signup</div>
    </div>
  );
}

export default Header;
