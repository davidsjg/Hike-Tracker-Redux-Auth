import React, { useEffect, useState } from "react";
import styles from "./UploadHike.module.css";
import API from "../../utils/API";
import MainContain from "../MainContain/MainContain";
import Input from "../Input/Input";

function UploadHike() {
  const [formData, setFormData] = useState({
    distance: 0,
    time: 0,
    rating: 0,
  });

  useEffect(() => {
    setFormData({
      distance: "",
      time: "",
      rating: "",
    });
  }, []);

  const handleClick = () => {
    console.log(formData);
    API.hikePost(formData);
  };

  const propSetFormData = (data) => {
    setFormData(data);
  };

  return (
    <MainContain cName={styles["mainContain"]}>
      <div className={styles["formHolder"]}>
        <form className={styles["inputForm"]}>
          <div className={styles["inputParams"]}>
            <p>Distance:</p>
            <p>Time:</p>
            <p>Rating:</p>
          </div>
          <div className={styles["inputData"]}>
            <input
              value={formData.distance}
              onChange={(e) =>
                setFormData({ ...formData, distance: e.target.value })
              }
            />
            <input
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            />
            <input
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: e.target.value })
              }
            />
          </div>
        </form>
        <button onClick={handleClick}>Submit</button>
      </div>
    </MainContain>
  );
}

export default UploadHike;
