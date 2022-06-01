import { USER_LOG_OUT } from "../../constants";

export const logoutAction = () => (dispatch) => {
  dispatch({ type: USER_LOG_OUT });
};
