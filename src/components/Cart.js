import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAction } from "../redux/actions/cartAction";
import { postOrdersClearAction } from "../redux/actions/postOrdersActions/postOrdersClearAction";
import styles from "./Cart.module.css";
import Navbar from "./Shared/Navbar";
import CartCard from "./Shared/CartCard";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartState, userState, darkModeState } = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.cartContainer}>
            {cartState.selectedItems.map((item, index) => (
              <CartCard key={index} selectedItem={item} />
            ))}
          </div>

          {cartState.itemsCounter > 0 && (
            <div
              className={
                darkModeState ? styles.darkPaymentsBox : styles.lightPaymentsBox
              }
            >
              <div className={styles.totalContainer}>
                <p>
                  <span>Total items:</span> {cartState.itemsCounter}
                </p>
                <p>
                  <span>Total payments:</span> {cartState.totalPrice} $
                </p>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  className={
                    darkModeState
                      ? styles.darkClearButton
                      : styles.lightClearButton
                  }
                  onClick={() => dispatch(clearAction())}
                >
                  Clear
                </button>
                <button
                  className={
                    darkModeState ? styles.darkButton : styles.lightButton
                  }
                  onClick={() =>
                    !!userState.userData.token
                      ? (navigate("/shipping"),
                        dispatch(postOrdersClearAction()))
                      : navigate("/login")
                  }
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {cartState.itemsCounter === 0 && (
            <div
              className={
                darkModeState ? styles.darkPaymentsBox : styles.lightPaymentsBox
              }
            >
              <h2>Your cart is empty!</h2>
              <h4>Want to buy?</h4>
              <button
                className={
                  darkModeState ? styles.darkButton : styles.lightButton
                }
                onClick={() => navigate("/products")}
              >
                Go to shop
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
