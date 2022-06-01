import {
  ADD_ITEM,
  CHECKOUT,
  CLEAR,
  DECREASE,
  INCREASE,
  REMOVE_ITEM,
} from "../constants";
import { sumItems } from "../../helper/founctions";

let initialState;

if (localStorage.getItem("cartState") === null) {
  initialState = {
    selectedItems: [],
    itemsCounter: 0,
    totalPrice: 0,
    checkout: false,
  };
} else {
  const localStorageData = localStorage.getItem("cartState");
  initialState = JSON.parse(localStorageData);
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (
        !state.selectedItems.find(
          (item) => item["_id"] === action.payload["_id"]
        ) &&
        action.payload.countInStock > 0
      ) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      localStorage.setItem(
        "cartState",
        JSON.stringify({
          ...state,
          selectedItems: [...state.selectedItems],
          ...sumItems(state.selectedItems),
          checkout: false,
        })
      );
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case REMOVE_ITEM:
      const newSelectedItems = state.selectedItems.filter(
        (item) => item["_id"] !== action.payload["_id"]
      );
      if (state.itemsCounter === 1) {
        localStorage.removeItem("cartState");
      } else {
        localStorage.setItem(
          "cartState",
          JSON.stringify({
            ...state,
            selectedItems: [...newSelectedItems],
            ...sumItems(newSelectedItems),
          })
        );
      }

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };
    case INCREASE:
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item["_id"] === action.payload["_id"]
      );
      if (
        action.payload.countInStock >
        state.selectedItems[increaseIndex].quantity
      ) {
        state.selectedItems[increaseIndex].quantity++;
      }
      localStorage.setItem(
        "cartState",
        JSON.stringify({
          ...state,
          ...sumItems(state.selectedItems),
        })
      );
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case DECREASE:
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item["_id"] === action.payload["_id"]
      );
      state.selectedItems[decreaseIndex].quantity--;
      localStorage.setItem(
        "cartState",
        JSON.stringify({
          ...state,
          ...sumItems(state.selectedItems),
        })
      );
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case CHECKOUT:
      localStorage.setItem(
        "cartState",
        JSON.stringify({
          selectedItems: [],
          itemsCounter: 0,
          totalPrice: 0,
          checkout: true,
        })
      );
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: true,
      };
    case CLEAR:
      localStorage.removeItem("cartState");
      return {
        selectedItems: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: false,
      };
    default:
      return state;
  }
};
