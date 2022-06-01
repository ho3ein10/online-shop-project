import {
  GET_ONE_DATA_FAIL,
  GET_ONE_DATA_REQUEST,
  GET_ONE_DATA_SUCCESS,
} from "../constants";

export const productReducer = (
  state = { loading: false, productData: [], error: "" },
  action
) => {
  switch (action.type) {
    case GET_ONE_DATA_REQUEST:
      return { ...state, loading: true };
    case GET_ONE_DATA_SUCCESS:
      return { loading: false, productData: action.payload };
    case GET_ONE_DATA_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
