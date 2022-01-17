import * as actionTypes from "../constants/authConstants";

export const userLoginReducer = (state = { user: {} }, action) => {
  console.log(action.payload);
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        loading: true,
        user: {},
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GOOGLE_AUTH:
      return {
        loading: false,
        ser: action.payload,
      };

    default:
      return state;
  }
};
