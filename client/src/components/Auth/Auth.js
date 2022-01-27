import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import { signin } from "../../utils/API";
import { GoogleLogin } from "react-google-login";
import Icon from "./icon";
import { Button } from "@material-ui/core";
import { GOOGLE_AUTH } from "../../redux/constants/authConstants";

//Actions
import { userSignup } from "../../redux/actions/authActions";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(userSignup(formData));
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
        <div className={styles["firstName"]}>
          <p>
            First Name:
            <input type="text" name="firstName" onChange={handleChange} />
          </p>
        </div>
        <div className={styles["lastName"]}>
          <p>
            Last Name:
            <input type="text" name="lastName" onChange={handleChange} />
          </p>
        </div>
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
        <div className={styles["userConfPassword"]}>
          <p>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
            />
            <i className="fas fa-eye"></i>
          </p>
        </div>
        <div className={styles["submitButtonDiv"]}>
          <div className={styles["submitButton"]}>
            <p type="submit" onClick={handleSubmit}>
              Sign Up
            </p>
          </div>
        </div>
        <Link to="/logIn" className={styles["logInLink"]}>
          <div className={styles["logInDiv"]}>
            <div className={styles["logInButton"]}>
              <p>Have an Account? Log in</p>
            </div>
          </div>
        </Link>
        {/* <button onClick={handleClick}>click me</button> */}
      </form>
    </div>
  );
}

export default Auth;
