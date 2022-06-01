import {
  GET_ONE_ORDER_FAIL,
  GET_ONE_ORDER_REQUEST,
  GET_ONE_ORDER_SUCCESS,
  ONE_ORDER_CLEAR,
} from "../constants";

export const myOrderReducer = (
  state = { loading: false, myOrder: {}, error: "" },
  action
) => {
  switch (action.type) {
    case GET_ONE_ORDER_REQUEST:
      return { ...state, loading: true };
    case GET_ONE_ORDER_SUCCESS:
      return { loading: false, myOrder: action.payload };
    case GET_ONE_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ONE_ORDER_CLEAR:
      return { loading: false, myOrder: {}, error: "" };
    default:
      return state;
  }
};
