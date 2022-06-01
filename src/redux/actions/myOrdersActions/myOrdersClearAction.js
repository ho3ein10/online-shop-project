import { MY_ORDERS_CLEAR } from "../../constants";

export const myOrdersClearAction = () => (dispatch) => {
  dispatch({ type: MY_ORDERS_CLEAR });
};
