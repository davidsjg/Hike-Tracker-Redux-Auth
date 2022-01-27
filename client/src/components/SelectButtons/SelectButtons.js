import React, { useState } from "react";
import styles from "./SelectButtons.module.css";
import MainContain from "../MainContain/MainContain";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function SelectButtons() {
  const user = useSelector((state) => state.auth.user);

  console.log(user);

  const [myHikes, setMyHikes] = useState(true);
  //if user is logged in, apply myHikes className to div
  const myHikesLoggedIn = !myHikes ? styles.myHikesOut : "";
  return (
    <>
      <MainContain cName={styles["mainContain"]}>
        <div className={styles["allButtons"]}>
          <Link to="/uploadHike">
            <div className={styles["selectButton"]}>
              <p>Upload Hike</p>
            </div>
          </Link>
          <Link to="/explore">
            <div className={styles["selectButton"]}>
              <p>Explore</p>
            </div>
          </Link>
          {myHikes ? (
            <Link to="/myHikes">
              <div className={`${styles.selectButton} `}>
                <p>My Hikes</p>
              </div>
            </Link>
          ) : (
            <div className={`${styles.selectButton} ${myHikesLoggedIn}`}>
              <p>My Hikes</p>
            </div>
          )}
        </div>
      </MainContain>
      <Outlet />
    </>
  );
}

export default SelectButtons;
