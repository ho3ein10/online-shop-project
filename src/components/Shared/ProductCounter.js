import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemAction,
  removeItemAction,
  increaseAction,
  decreaseAction,
} from "../../redux/actions/cartAction";
import { isInCart, quantityCount } from "../../helper/founctions";
import styles from "./ProductCounter.module.css";

const ProductCounter = ({ productData }) => {
  const [showMessage, setShowMessage] = useState(false);
  const { cartState, darkModeState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const increaseIndex = cartState.selectedItems.findIndex(
    (item) => item["_id"] === productData["_id"]
  );

  return (
    <div className={styles.counterContainer}>
      {quantityCount(cartState, productData["_id"]) === 1 && (
        <button
          className={
            darkModeState ? styles.darkTrashIcon : styles.lightTrashIcon
          }
          onClick={() => dispatch(removeItemAction(productData))}
        ></button>
      )}
      {quantityCount(cartState, productData["_id"]) > 1 && (
        <button
          className={
            darkModeState
              ? styles.darkCounterOperator
              : styles.lightCounterOperator
          }
          onClick={() => dispatch(decreaseAction(productData))}
        >
          -
        </button>
      )}
      {quantityCount(cartState, productData["_id"]) > 0 && (
        <span className={styles.counter}>
          {quantityCount(cartState, productData["_id"])}
        </span>
      )}
      {isInCart(cartState, productData["_id"]) ? (
        <button
          className={
            cartState.selectedItems[increaseIndex].quantity ===
            productData.countInStock
              ? darkModeState
                ? styles.darkCounterDeactive
                : styles.lightCounterDeactive
              : darkModeState
              ? styles.darkCounterOperator
              : styles.lightCounterOperator
          }
          onClick={() => dispatch(increaseAction(productData))}
        >
          +
        </button>
      ) : (
        <div>
          {productData.countInStock ? (
            <button
              className={
                darkModeState ? styles.darkAddIcon : styles.lightAddIcon
              }
              onClick={() => dispatch(addItemAction(productData))}
            >
              Add to Cart
            </button>
          ) : showMessage ? (
            <p className={styles.warningText}>
              This product is currently not available!
            </p>
          ) : (
            <button
              className={
                darkModeState ? styles.darkAddIcon : styles.lightAddIcon
              }
              onClick={() => setShowMessage((last) => !last)}
            >
              Add to Cart
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCounter;
