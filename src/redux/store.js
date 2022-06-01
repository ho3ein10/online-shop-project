import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userReducer } from "./reducers/userReducer";
import { postOrdersReducer } from "./reducers/postOrdersReducer";
import { myOrdersReducer } from "./reducers/myOrdersReducer";
import { myOrderReducer } from "./reducers/myOrderReducer";
import { sortListReducer } from "./reducers/sortListReducer";
import { darkModeReducer } from "./reducers/darkModeReducer";

const reducers = combineReducers({
  productsState: productsReducer,
  productState: productReducer,
  cartState: cartReducer,
  userState: userReducer,
  postOrdersState: postOrdersReducer,
  myOrdersState: myOrdersReducer,
  myOrderState: myOrderReducer,
  sortListState: sortListReducer,
  darkModeState: darkModeReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
