import React, { useState } from "react";
import styles from "./SelectButtons.module.css";
import MainContain from "../MainContain/MainContain";
import { Link, Outlet } from "react-router-dom";

function SelectButtons() {
  const [myHikes, setMyHikes] = useState(true);
  const myHikesLoggedIn = myHikes ? styles.myHikes : "";
  return (
    <>
      <MainContain cName={styles["mainContain"]}>
        <div className={styles["allButtons"]}>
          <Link to="/uploadHike">
            <div className={styles["selectButton"]}>
              <p>Upload</p>
              <p>Hike</p>
            </div>
          </Link>
          <Link to="/explore">
            <div className={styles["selectButton"]}>
              <p>Explore</p>
            </div>
          </Link>
          <Link to="/myHikes">
            <div className={`${styles.selectButton} ${myHikesLoggedIn}`}>
              <p>My</p>
              <p>Hikes</p>
            </div>
          </Link>
        </div>
      </MainContain>
      <Outlet />
    </>
  );
}

export default SelectButtons;
