import {
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "../constants";

export const productsReducer = (
  state = { loading: false, productsData: [], error: "" },
  action
) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, loading: true };
    case GET_DATA_SUCCESS:
      return { loading: false, productsData: action.payload };
    case GET_DATA_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
