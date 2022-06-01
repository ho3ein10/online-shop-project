import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myOrderAction } from "../redux/actions/myOrderActions/myOrderAction";
import { myOrderClearAction } from "../redux/actions/myOrderActions/myOrderClearAction";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Shared/Loader";
import styles from "./MyOrderDetails.module.css";
import Navbar from "./Shared/Navbar";
import MyOrderDetailsCard from "./Shared/MyOrderDetailsCard";

const MyOrderDetails = () => {
  const dispatch = useDispatch();
  const { myOrderState, userState } = useSelector((state) => state);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (!!userState.userData.token) {
      if (myOrderState.myOrder["_id"] === id) {
        return;
      } else {
        dispatch(myOrderAction(id));
      }
    } else {
      dispatch(myOrderClearAction());
      navigate("*");
    }
  }, [dispatch, navigate, userState.userData.token, myOrderState.myOrder, id]);

  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        {myOrderState.loading ? (
          <Loader />
        ) : myOrderState.error ? (
          <h1>{myOrderState.error}</h1>
        ) : (
          !!Object.keys(myOrderState.myOrder).length && (
            <MyOrderDetailsCard myOrder={myOrderState.myOrder} />
          )
        )}
      </div>
    </>
  );
};

export default MyOrderDetails;
