import * as actionTypes from "../constants/authConstants";
import axios from "axios";

export const userLogin = (userData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_LOGIN_REQUEST });

    const { data } = await axios.post("/signup", userData);

    const { token, user } = data;

    //user token/info returned success, dispatch to store
    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: token, user });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
