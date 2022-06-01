import {
  POST_ORDERS_CLEAR,
  POST_ORDERS_FAIL,
  POST_ORDERS_REQUEST,
  POST_ORDERS_SUCCESS,
} from "../constants";

export const postOrdersReducer = (
  state = { loading: false, postOrders: {}, error: "" },
  action
) => {
  switch (action.type) {
    case POST_ORDERS_REQUEST:
      return { ...state, loading: true };
    case POST_ORDERS_SUCCESS:
      return { loading: false, postOrders: action.payload };
    case POST_ORDERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case POST_ORDERS_CLEAR:
      return { loading: false, postOrders: {}, error: "" };
    default:
      return state;
  }
};
