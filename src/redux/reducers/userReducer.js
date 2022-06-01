import {
  POST_USER_DATA_REQUEST,
  POST_USER_DATA_SUCCESS,
  POST_USER_DATA_FAIL,
  USER_LOG_OUT,
} from "../constants";

let initialState;

if (localStorage.getItem("userState") === null) {
  initialState = { loading: false, userData: {}, error: "" };
} else {
  const localStorageData = localStorage.getItem("userState");
  initialState = JSON.parse(localStorageData);
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_DATA_REQUEST:
      return { ...state, loading: true };
    case POST_USER_DATA_SUCCESS:
      localStorage.setItem(
        "userState",
        JSON.stringify({ loading: false, userData: action.payload })
      );
      return { loading: false, userData: action.payload };
    case POST_USER_DATA_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOG_OUT:
      localStorage.removeItem("userState");
      return { loading: false, userData: {}, error: "" };
    default:
      return state;
  }
};
