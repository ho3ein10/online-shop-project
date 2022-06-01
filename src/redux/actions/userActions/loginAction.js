import axios from "axios";
import {
  BASE_URL,
  POST_USER_DATA_REQUEST,
  POST_USER_DATA_SUCCESS,
  POST_USER_DATA_FAIL,
} from "../../constants"

export const loginAction = (email, password) => async (dispatch, getState) => {
  const userData = {
    email: `${email}`,
    password: `${password}`,
  };

  try {
    dispatch({ type: POST_USER_DATA_REQUEST });
    const { data } = await axios.post(`${BASE_URL}/api/users/login`, userData);
    dispatch({ type: POST_USER_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_USER_DATA_FAIL, payload: error.message });
  }
};


