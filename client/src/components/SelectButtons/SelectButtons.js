import React, { useEffect, useState } from "react";
import styles from "./SelectButtons.module.css";
import MainContain from "../MainContain/MainContain";
import { Link, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SelectButtons() {
  const user = useSelector((state) => state.auth.user);
  const currParam = useParams();
  const currUrl = window.location.pathname;

  const [uploadHike, setUploadHike] = useState(false);
  const [explore, setExplore] = useState(false);
  const [myHikes, setMyHikes] = useState(false);

  const uploadHikeSelected = "";
  const exploreSelected = "";
  const myHikesSelected = !myHikes ? styles.myHikesOut : "";

  useEffect(() => {
    if (currUrl === "/uploadHike") {
      setUploadHike(true);
      setExplore(false);
      setMyHikes(false);
    } else if (currUrl === "/explore") {
      setUploadHike(false);
      setExplore(true);
      setMyHikes(false);
    } else if (currUrl === "/myHikes") {
      setUploadHike(false);
      setExplore(false);
      setMyHikes(true);
    } else {
      setUploadHike(false);
      setExplore(false);
      setMyHikes(false);
    }
  }, [currUrl]);

  return (
    <>
      <MainContain cName={styles["mainContain"]}>
        <div className={styles["allButtons"]}>
          {uploadHike ? (
            <div className={`${styles.selectButton2} `}>
              <p>Upload Hike</p>
            </div>
          ) : (
            <Link to="/uploadHike">
              <div className={`${styles.selectButton}`}>
                <p>Upload Hike</p>
              </div>
            </Link>
          )}
          {explore ? (
            <div className={`${styles.selectButton2} `}>
              <p>Explore</p>
            </div>
          ) : (
            <Link to="/explore">
              <div className={`${styles.selectButton}`}>
                <p>Explore</p>
              </div>
            </Link>
          )}
          {myHikes ? (
            <div className={`${styles.selectButton2} `}>
              <p>My Hikes</p>
            </div>
          ) : (
            <Link to="/myHikes">
              <div className={`${styles.selectButton}`}>
                <p>My Hikes</p>
              </div>
            </Link>
          )}
        </div>
      </MainContain>
      <Outlet />
    </>
  );
}

export default SelectButtons;
