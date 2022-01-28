import * as actionTypes from "../constants/hikeConstants";

export const hikeReducer = (state = { hike: {} }, action) => {
  switch (action.type) {
    case actionTypes.SAVE_HIKE_REQUEST:
      return {
        loading: true,
        hike: {},
      };
    case actionTypes.SAVE_HIKE_SUCCESS:
      return {
        loading: false,
        hike: action.payload,
      };
    case actionTypes.SAVE_HIKE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
