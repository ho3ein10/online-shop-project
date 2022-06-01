import { DARK_MODE_SWITCH } from "../constants";

let initialState;

if (localStorage.getItem("darkModeState") === null) {
  initialState = true;
} else {
  const localStorageData = localStorage.getItem("darkModeState");
  initialState = JSON.parse(localStorageData);
}

export const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_SWITCH:
      localStorage.setItem("darkModeState", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};
