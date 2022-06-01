import { SORT_LIST_SWITCH } from "../constants";

export const sortListReducer = (state = true, action) => {
  switch (action.type) {
    case SORT_LIST_SWITCH:
      return action.payload;
    default:
      return state;
  }
};
