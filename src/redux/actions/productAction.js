import axios from "axios";
import {
  BASE_URL,
  GET_ONE_DATA_FAIL,
  GET_ONE_DATA_REQUEST,
  GET_ONE_DATA_SUCCESS,
} from "../constants";

export const productAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ONE_DATA_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);
    dispatch({ type: GET_ONE_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ONE_DATA_FAIL, payload: error.message });
  }
};
