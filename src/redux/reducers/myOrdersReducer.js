import {
  GET_MY_ORDERS_FAIL,
  GET_MY_ORDERS_REQUEST,
  GET_MY_ORDERS_SUCCESS,
  MY_ORDERS_CLEAR,
} from "../constants";

export const myOrdersReducer = (
  state = { loading: false, myOrders: [], error: "" },
  action
) => {
  switch (action.type) {
    case GET_MY_ORDERS_REQUEST:
      return { ...state, loading: true };
    case GET_MY_ORDERS_SUCCESS:
      return { loading: false, myOrders: action.payload };
    case GET_MY_ORDERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case MY_ORDERS_CLEAR:
      return { loading: false, myOrders: [], error: "" };
    default:
      return state;
  }
};
