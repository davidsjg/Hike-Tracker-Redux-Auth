import * as actionTypes from "../constants/authConstants";

export const userLoginReducer = (state = { user: {} }, action) => {
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
        user: action.payload,
      };
    case actionTypes.LOG_OUT:
      return {
        loading: false,
        user: {},
      };

    default:
      return state;
  }
};
