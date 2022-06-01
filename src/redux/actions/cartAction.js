import {
  ADD_ITEM,
  CHECKOUT,
  CLEAR,
  DECREASE,
  INCREASE,
  REMOVE_ITEM,
} from "../constants";

export const addItemAction = (productData) => (dispatch) => {
  dispatch({ type: ADD_ITEM, payload: productData });
};

export const removeItemAction = (productData) => (dispatch) => {
  dispatch({ type: REMOVE_ITEM, payload: productData });
};

export const increaseAction = (productData) => (dispatch) => {
  dispatch({ type: INCREASE, payload: productData });
};

export const decreaseAction = (productData) => (dispatch) => {
  dispatch({ type: DECREASE, payload: productData });
};

export const checkoutAction = () => (dispatch) => {
  dispatch({ type: CHECKOUT });
};

export const clearAction = () => (dispatch) => {
  dispatch({ type: CLEAR });
};
