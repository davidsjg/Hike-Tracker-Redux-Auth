import React, { useState } from "react";
import MainContain from "../MainContain/MainContain";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
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
              <p>Upload</p>
              <p>Hike</p>
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
                <p>My</p>
                <p>Hikes</p>
              </div>
            </Link>
          ) : (
            <div className={`${styles.selectButton} ${myHikesLoggedIn}`}>
              <p>My</p>
              <p>Hikes</p>
            </div>
          )}
        </div>
      </MainContain>
      <Outlet />
    </>
  );
}

export default Home;
