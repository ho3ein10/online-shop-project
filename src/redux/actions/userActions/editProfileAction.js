import axios from "axios";
import {
  BASE_URL,
  POST_USER_DATA_REQUEST,
  POST_USER_DATA_SUCCESS,
  POST_USER_DATA_FAIL,
} from "../../constants";

export const editProfileAction =
  (name, email, password) => async (dispatch, getState) => {
    const userData = {
      name: `${name}`,
      email: `${email}`,
      password: `${password}`,
    };

    try {
      dispatch({ type: POST_USER_DATA_REQUEST });
      const { data } = await axios.put(
        `${BASE_URL}/api/users/profile`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().userState.userData.token}`,
          },
        }
      );
      dispatch({
        type: POST_USER_DATA_SUCCESS,
        payload: { ...data, update: true },
      });
    } catch (error) {
      dispatch({ type: POST_USER_DATA_FAIL, payload: error.message });
    }
  };
