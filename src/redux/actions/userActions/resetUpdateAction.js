import { POST_USER_DATA_SUCCESS } from "../../constants";

export const resetUpdateAction = () => (dispatch, getState) => {
    dispatch({ type: POST_USER_DATA_SUCCESS, payload: { ...getState().userState.userData, update: false } });
  };