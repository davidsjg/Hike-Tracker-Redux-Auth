import * as actionTypes from "../constants/authConstants";
import axios from "axios";

export const userSignup = (userData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_LOGIN_REQUEST });

    const { data } = await axios.post("/signup", userData);

    const googleUser = userData.imageUrl ? userData : null;

    const { token, user } = data;

    const newUser = {
      ...user,
      token: token,
    };

    console.log(newUser);

    //user token/info returned success, dispatch to store
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: googleUser ? googleUser : newUser,
    });
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

export const userSignin = (userData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_SIGNIN_REQUEST });

    const { data } = await axios.post("/signin", userData);

    console.log(data);

    const { token, signedUser } = data;

    const newUser = {
      ...signedUser,
      token: token,
    };

    dispatch({
      type: actionTypes.USER_SIGNIN_SUCCESS,
      payload: newUser,
    });

    console.log(newUser);
  } catch (error) {
    dispatch({
      type: actionTypes.USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const googleLogin = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.USER_LOGIN_REQUEST });

//     const data = userData;
//   } catch (error) {}
// };
