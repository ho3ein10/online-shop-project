import { POST_ORDERS_CLEAR } from "../../constants";

export const postOrdersClearAction = () => (dispatch) => {
  dispatch({ type: POST_ORDERS_CLEAR });
};
