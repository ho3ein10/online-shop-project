import axios from "axios";
import {
  BASE_URL,
  GET_ONE_ORDER_FAIL,
  GET_ONE_ORDER_REQUEST,
  GET_ONE_ORDER_SUCCESS,
} from "../../constants";

export const myOrderAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ONE_ORDER_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/api/orders/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userState.userData.token}`,
      },
    });
    dispatch({ type: GET_ONE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ONE_ORDER_FAIL, payload: error.message });
  }
};
