import * as actionTypes from "../constants/hikeConstants";
import axios from "axios";

export const saveHike = (userHike) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SAVE_HIKE_REQUEST });

    const { data } = await axios.post("/hikePost", userHike);

    const { trail, distance, time } = data;

    const newTrail = {
      trail,
      distance,
      time,
    };

    dispatch({
      type: actionTypes.SAVE_HIKE_SUCCESS,
      payload: newTrail,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SAVE_HIKE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
