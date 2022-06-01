import { ONE_ORDER_CLEAR } from "../../constants";

export const myOrderClearAction = () => (dispatch) => {
  dispatch({ type: ONE_ORDER_CLEAR });
};