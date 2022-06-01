import axios from "axios";
import { orderItemsFn } from "../../../helper/founctions";
import {
  BASE_URL,
  POST_ORDERS_FAIL,
  POST_ORDERS_REQUEST,
  POST_ORDERS_SUCCESS,
} from "../../constants";

export const postOrdersAction =
  (cartState, shippingInfo) => async (dispatch, getState) => {
    const ordersData = {
      orderItems: orderItemsFn(cartState.selectedItems),
      shippingAddress: shippingInfo,
      paymentMethod: "online",
      itemsPrice: cartState.totalPrice,
      shippingPrice: "0.00",
      totalPrice: cartState.totalPrice,
    };

    try {
      dispatch({ type: POST_ORDERS_REQUEST });
      const { data } = await axios.post(`${BASE_URL}/api/orders`, ordersData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().userState.userData.token}`,
        },
      });
      dispatch({ type: POST_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: POST_ORDERS_FAIL, payload: error.message });
    }
  };
