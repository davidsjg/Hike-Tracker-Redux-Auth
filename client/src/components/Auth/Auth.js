import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import { signin } from "../../utils/API";
import { GoogleLogin } from "react-google-login";
import Icon from "./icon";
import { Button } from "@material-ui/core";
import { GOOGLE_AUTH } from "../../redux/constants/authConstants";

//Actions
import { userLogin } from "../../redux/actions/authActions";

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
    dispatch(userLogin(formData));
    navigate("/");
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    console.log(result);
    console.log(token);

    const newUser = {
      data: {
        user: result,
        token: token,
      },
    };

    try {
      dispatch(userLogin(newUser));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google sign in was unsuccessful.");
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
              Submit
            </p>
          </div>
        </div>
        {/* <button onClick={handleClick}>click me</button> */}
        {/* <GoogleLogin
          clientId="228274647442-0pcttjg921qm52skvrf9fhr62l6rc8es.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className={styles["googlebutton"]}
              color="primary"
              // fullWidth
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              // startIcon={<Icon />}
              variant="contained"
            >
              Google Sign In
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        /> */}
      </form>
    </div>
  );
}

export default Auth;
