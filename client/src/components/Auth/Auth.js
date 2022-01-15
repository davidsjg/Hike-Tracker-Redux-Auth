import React, { useState } from "react";
import styles from "./Auth.module.css";
import { signin } from "../../utils/API";

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
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);

    signin(formData).then((data) => {
      console.log(data);
    });
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
      </form>
    </div>
  );
}

export default Auth;
