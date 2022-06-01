import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../helper/founctions";
import { postOrdersAction } from "../redux/actions/postOrdersActions/postOrdersAction";
import { checkoutAction } from "../redux/actions/cartAction";
import styles from "./Shipping.module.css";
import Navbar from "./Shared/Navbar";

const Shipping = () => {
  const dispatch = useDispatch();
  const { cartState, postOrdersState, userState, darkModeState } = useSelector(
    (state) => state
  );
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    phone: "",
    postalCode: "",
    city: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  useEffect(() => {
    setErrors(validate(shippingInfo, "shipping"));
  }, [shippingInfo, focused]);

  const changeHandler = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setFocused({ ...focused, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length && !!cartState.selectedItems.length) {
      dispatch(postOrdersAction(cartState, shippingInfo));
    } else {
      setFocused({
        phone: true,
        postalCode: true,
        city: true,
        address: true,
      });
    }
    if (!Object.keys(errors).length && !cartState.selectedItems.length) {
      navigate("/products");
    }
  };

  useEffect(() => {
    if (!!Object.keys(postOrdersState.postOrders).length) {
      dispatch(checkoutAction());
    }
  }, [dispatch, postOrdersState.postOrders]);

  useEffect(() => {
    if (!userState.userData.token) {
      navigate("/login");
    }
  }, [navigate, userState.userData.token]);

  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        {!cartState.checkout && (
          <form
            className={
              darkModeState
                ? styles.darkFormContainer
                : styles.lightFormContainer
            }
            onSubmit={submitHandler}
          >
            <h2 className={styles.header}>Shipping</h2>
            <div className={styles.formField}>
              <label>Mobile phone</label>
              <input
                className={
                  errors.phone && focused.phone
                    ? styles.uncompleted
                    : styles.formInput
                }
                placeholder="+98"
                type="number"
                name="phone"
                value={shippingInfo.phone}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {errors.phone && focused.phone && <span>{errors.phone}</span>}
            </div>
            <div className={styles.formField}>
              <label>Postal code</label>
              <input
                className={
                  errors.postalCode && focused.postalCode
                    ? styles.uncompleted
                    : styles.formInput
                }
                type="text"
                name="postalCode"
                value={shippingInfo.postalCode}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {errors.postalCode && focused.postalCode && (
                <span>{errors.postalCode}</span>
              )}
            </div>
            <div className={styles.formField}>
              <label>City name</label>
              <input
                className={
                  errors.city && focused.city
                    ? styles.uncompleted
                    : styles.formInput
                }
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {errors.city && focused.city && <span>{errors.city}</span>}
            </div>
            <div className={styles.formField}>
              <label>Full address</label>
              <textarea
                className={
                  errors.address && focused.address
                    ? styles.uncompletedAddress
                    : styles.formInputAddress
                }
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {errors.address && focused.address && (
                <span>{errors.address}</span>
              )}
            </div>
            <div className={styles.formButtons}>
              <button
                className={
                  darkModeState ? styles.darkButton : styles.lightButton
                }
                type="submit"
              >
                Checkout
              </button>
            </div>
          </form>
        )}

        {cartState.checkout && (
          <div
            className={
              darkModeState ? styles.darkPaymentsBox : styles.lightPaymentsBox
            }
          >
            <h3>Checked out successfully</h3>
            <button
              className={darkModeState ? styles.darkButton : styles.lightButton}
              onClick={() => navigate("/products")}
            >
              Buy More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Shipping;
