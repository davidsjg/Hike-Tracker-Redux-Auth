import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Typography, Button } from "@material-ui/core";
import { LOG_OUT } from "../../redux/constants/authConstants";

import SectionHeader from "./SectionHeader";
import MainContain from "../MainContain/MainContain";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const logout = () => {
    dispatch({ type: LOG_OUT });
    navigate("/");
  };

  return (
    <MainContain cName={styles["mainContain"]}>
      <SectionHeader cName={styles["leftHeader"]}>
        <Link to="/" className={styles["leftLink"]}>
          <i className="fas fa-hiking fa-lg"></i>
        </Link>
      </SectionHeader>

      <SectionHeader cName={styles["centerHeader"]}>
        <Link to="/">
          <h1>Earth Churner</h1>
        </Link>
      </SectionHeader>
      <SectionHeader cName={styles["rightHeader"]}>
        {Object.keys(user).length !== 0 ? (
          <>
            <Avatar className={styles["userAvatar"]} alt={user.firstName}>
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </Avatar>
            <span>&nbsp;&nbsp;</span>
            <Typography>
              {user.firstName} {user.lastName}
            </Typography>
            <span>&nbsp;&nbsp;</span>
            <Button
              variant="contained"
              className={styles["logoutButton"]}
              color="primary"
              onClick={logout}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link to="/auth">
            <h4>Login/Signup</h4>
          </Link>
        )}
      </SectionHeader>
    </MainContain>
  );
}

export default Header;
