import { DARK_MODE_SWITCH } from "../constants";

export const darkModeAction = () => (dispatch, getState) => {
  const { darkModeState } = getState();

  dispatch({ type: DARK_MODE_SWITCH, payload: !darkModeState });
};
