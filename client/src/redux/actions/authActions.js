import * as actionTypes from "../constants/authConstants";
import axios from "axios";

export const userLogin = (userData) => async (dispatch) => {
  try {
    // dispatch({ type: actionTypes.USER_LOGIN_REQUEST });

    const request = await axios.post("/signup", userData);

    console.log(request);
  } catch (error) {
    console.log(error);
  }
};
