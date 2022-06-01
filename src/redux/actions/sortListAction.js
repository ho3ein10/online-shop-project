import { SORT_LIST_SWITCH } from "../constants";

export const sortListAction = () => (dispatch, getState) => {
  const { sortListState } = getState();

  dispatch({ type: SORT_LIST_SWITCH, payload: !sortListState });
};
