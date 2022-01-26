import React from "react";
import styles from "./SelectButtons.module.css";
import MainContain from "../MainContain/MainContain";

function SelectButtons() {
  return (
    <MainContain cName={styles["mainContain"]}>
      <div className={styles["allButtons"]}>
        <div className={styles["selectButton"]}>left</div>
        <div className={styles["selectButton"]}>left</div>
        <div className={styles["selectButton"]}>left</div>
      </div>
    </MainContain>
  );
}

export default SelectButtons;
