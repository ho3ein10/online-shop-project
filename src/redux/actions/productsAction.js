import axios from "axios";
import {
  BASE_URL,
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "../constants";

export const productsAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_DATA_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/api/products`);
    dispatch({ type: GET_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_DATA_FAIL, payload: error.message });
  }
};
