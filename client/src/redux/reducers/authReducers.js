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

    default:
      return state;
  }
};
