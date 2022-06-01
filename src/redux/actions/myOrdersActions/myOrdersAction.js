import axios from "axios";
import {
  BASE_URL,
  GET_MY_ORDERS_FAIL,
  GET_MY_ORDERS_REQUEST,
  GET_MY_ORDERS_SUCCESS,
} from "../../constants";

export const myOrdersAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MY_ORDERS_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/api/orders/myorders`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userState.userData.token}`,
      },
    });
    dispatch({ type: GET_MY_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_MY_ORDERS_FAIL, payload: error.message });
  }
};
