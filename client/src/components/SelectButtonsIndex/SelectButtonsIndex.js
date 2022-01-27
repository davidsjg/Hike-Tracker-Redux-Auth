import React from "react";
import MainContain from "../MainContain/MainContain";
import styles from "./SelectButtonsIndex.module.css";

function SelectButtonsIndex() {
  return (
    <MainContain cName={styles["mainContain"]}>
      <div className={styles["indexImage"]}></div>
    </MainContain>
  );
}

export default SelectButtonsIndex;
