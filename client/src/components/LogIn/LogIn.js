import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";
import { GoogleLogin } from "react-google-login";
import Icon from "./icon";
import { Button } from "@material-ui/core";
import { GOOGLE_AUTH } from "../../redux/constants/authConstants";

//Actions
import { userSignin } from "../../redux/actions/authActions";

const initialState = {
  email: "",
  password: "",
};

function LogIn() {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
    dispatch(userSignin(formData));
    navigate("/");
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className={styles["mainContain"]}>
      <form className={styles["authForm"]}>
        <h3>Enter Username and Password</h3>

        <div className={styles["userName"]}>
          <p>
            Email:
            <input type="text" name="email" onChange={handleChange} />
          </p>
        </div>
        <div className={styles["userPassword"]}>
          <p>
            Password:
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
            />
            <i
              className="fas fa-eye"
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </p>
        </div>

        <div className={styles["submitButtonDiv"]}>
          <div className={styles["submitButton"]}>
            <p type="submit" onClick={handleSubmit}>
              Log In
            </p>
          </div>
        </div>
        {/* <button onClick={handleClick}>click me</button> */}
      </form>
    </div>
  );
}

export default LogIn;
