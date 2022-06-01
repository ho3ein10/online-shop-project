import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dateShortener, textShortener } from "../../helper/founctions";
import styles from "./MyOrdersCard.module.css";

import testImage from "../../images/Product-details.jpg";

const MyOrdersCard = ({ myOrders }) => {
  const { darkModeState } = useSelector((state) => state);

  return (
    <div
      className={darkModeState ? styles.darkContainer : styles.lightContainer}
    >
      <div
        className={
          darkModeState
            ? styles.darkMyOrdersContainer
            : styles.lightMyOrdersContainer
        }
      >
        <div
          className={
            darkModeState ? styles.darkOrdersInfoBox : styles.lightOrdersInfoBox
          }
        >
          <div className={styles.infoBox}>
            <span>Order date:</span>
            <p>{dateShortener(myOrders.createdAt)}</p>
          </div>
          <div className={styles.infoBox}>
            <span>Order ID:</span>
            <p>{myOrders["_id"]}</p>
          </div>
          <div className={styles.infoBox}>
            <span>Delivery status:</span>
            {myOrders.isDelivered ? <p>Delivered</p> : <p>Not delivered</p>}
          </div>
          <div className={styles.infoBox}>
            <span>Order items:</span>
            <p>{myOrders.orderItems.length}</p>
          </div>
          <div className={styles.infoBox}>
            <span>Total orders:</span>
            <p>
              {myOrders.orderItems.reduce((total, item) => total + item.qty, 0)}
            </p>
          </div>
          <div className={styles.infoBox}>
            <span>Total payments:</span>
            <p>{myOrders.totalPrice} $</p>
          </div>
        </div>
        <Link
          className={
            darkModeState ? styles.darkDetailsLink : styles.lightDetailsLink
          }
          to={`${myOrders["_id"]}`}
        >
          Details
        </Link>
      </div>
      {myOrders.orderItems.map((item, index) => (
        <div
          className={
            darkModeState ? styles.darkMyOrderBox : styles.lightMyOrderBox
          }
          key={index}
        >
          {/* <div
            className={
              darkModeState ? styles.darkImageBox : styles.lightImageBox
            }
          >
            <img
              className={styles.orderImage}
              src={item.image}
              alt="order_image"
            />
          </div> */}
          <div
            className={
              darkModeState ? styles.darkImageBox : styles.lightImageBox
            }
          >
            <img
              className={styles.orderImage}
              src={testImage}
              alt="order_image"
            />
          </div>
          <div
            className={darkModeState ? styles.darkTextBox : styles.lightTextBox}
          >
            <h3 className={styles.orderName}>{textShortener(item.name)}</h3>
            <p className={styles.price}>{item.price} $</p>
            <div className={styles.quantityBox}>
              <span>Quantity:</span>
              <p>{item.qty}</p>
            </div>
            <div className={styles.quantityBox}>
              <span>Item:</span>
              <p>
                {index + 1} of {myOrders.orderItems.length}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrdersCard;
