import React, { useEffect, useState } from "react";
import styles from "./UploadHike.module.css";
import API from "../../utils/API";
import MainContain from "../MainContain/MainContain";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";

import { saveHike } from "../../redux/actions/hikeActions";

function UploadHike() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    trail: "",
    distance: 0,
    time: 0,
  });

  useEffect(() => {
    setFormData({
      trail: "",
      distance: "",
      time: "",
    });
  }, []);

  const handleClick = () => {
    console.log(formData);
    // API.hikePost(formData);
    dispatch(saveHike(formData));
  };

  const propSetFormData = (data) => {
    setFormData(data);
  };

  return (
    <MainContain cName={styles["mainContain"]}>
      <div className={styles["formHolder"]}>
        <form className={styles["inputForm"]}>
          <div className={styles["inputParams"]}>
            <p>Trail:</p>
            <p>Distance:</p>
            <p>Time:</p>
          </div>

          <div className={styles["inputData"]}>
            <input
              value={formData.trail}
              onChange={(e) =>
                setFormData({ ...formData, trail: e.target.value })
              }
            />
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
          </div>
        </form>
        <button onClick={handleClick}>Submit</button>
      </div>
    </MainContain>
  );
}

export default UploadHike;
