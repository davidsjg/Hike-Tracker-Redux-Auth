import React, { useState } from "react";
import styles from "./Auth.module.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const [formData, setFormData] = useState(initialState);
  const handleChange = () => {};

  return (
    <div className={styles["mainContain"]}>
      <form className={styles["authForm"]}>
        <h3>Enter Username and Password</h3>
        <div className={styles["firstName"]}>
          <p>
            First Name:
            <input type="text" name="firstName" handlechange={handleChange} />
          </p>
        </div>
        <div className={styles["lastName"]}>
          <p>
            Last Name:
            <input type="text" name="lastName" handleChange={handleChange} />
          </p>
        </div>
        <div className={styles["userName"]}>
          <p>
            Email:
            <input type="text" name="email" handleChange={handleChange} />
          </p>
        </div>
        <div className={styles["userPassword"]}>
          <p>
            Password:
            <input type="text" name="password" handleChange={handleChange} />
          </p>
        </div>
      </form>
    </div>
  );
}

export default Auth;
