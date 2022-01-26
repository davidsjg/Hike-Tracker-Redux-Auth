import React from "react";
import styles from "./Home.module.css";

import MainContain from "../MainContain/MainContain";

function Home() {
  return <MainContain cName={styles["homeContain"]}>sup yall</MainContain>;
}

export default Home;
