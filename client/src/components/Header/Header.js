import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles["mainContain"]}>
      <div className={styles["leftHeader"]}>
        <Link to="/" className={styles["leftLink"]}>
          <i className="fas fa-hiking fa-lg"></i>
        </Link>
      </div>
      <div className={styles["centerHeader"]}>
        <Link to="/">
          <h1>Earth Churner</h1>
        </Link>
      </div>
      <div className={styles["rightHeader"]}>
        <Link to="/auth">
          <h4>Login/Signup</h4>
        </Link>
      </div>
    </div>
  );
}

export default Header;
