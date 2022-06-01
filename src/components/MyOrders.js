import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { myOrdersAction } from "../redux/actions/myOrdersActions/myOrdersAction";
import { myOrdersClearAction } from "../redux/actions/myOrdersActions/myOrdersClearAction";
import Loader from "./Shared/Loader";
import MyOrdersCard from "./Shared/MyOrdersCard";
import styles from "./MyOrders.module.css";
import Navbar from "./Shared/Navbar";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { userState, myOrdersState, sortListState, darkModeState } =
    useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!userState.userData.token) {
      dispatch(myOrdersAction());
    } else {
      dispatch(myOrdersClearAction());
    }
  }, [dispatch, userState.userData.token, myOrdersState.myOrders.length]);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {myOrdersState.loading ? (
          <Loader />
        ) : myOrdersState.error ? (
          <h1>{myOrdersState.error}</h1>
        ) : !myOrdersState.myOrders.length ? (
          <div
            className={
              darkModeState ? styles.darkEmptyListBox : styles.lightEmptyListBox
            }
          >
            <h2>Your order list is empty!</h2>
            <h4>Want to buy?</h4>
            <button
              className={darkModeState ? styles.darkButton : styles.lightButton}
              onClick={() => navigate("/products")}
            >
              Go to shop
            </button>
          </div>
        ) : sortListState ? (
          myOrdersState.myOrders
            .map((item, index) => <MyOrdersCard key={index} myOrders={item} />)
            .reverse()
        ) : (
          myOrdersState.myOrders.map((item, index) => (
            <MyOrdersCard key={index} myOrders={item} />
          ))
        )}
      </div>
    </>
  );
};

export default MyOrders;
