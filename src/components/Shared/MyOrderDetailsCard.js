import React from "react";
import { useSelector } from "react-redux";
import { dateShortener } from "../../helper/founctions";
import styles from "./MyOrderDetailsCard.module.css";

import testImage from "../../images/Product-details.jpg";

const MyOrderDetailsCard = ({ myOrder }) => {
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
        <div className={styles.customerInfo}>
          <h3>Customer information</h3>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Name:</span>
            <p>{myOrder.user.name}</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Email:</span>
            <p>{myOrder.user.email}</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Mobile phone:</span>
            <p>{myOrder.shippingAddress.phone}</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Postal code:</span>
            <p>{myOrder.shippingAddress.postalCode}</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>City name:</span>
            <p>{myOrder.shippingAddress.city}</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Full address:</span>
            <p>{myOrder.shippingAddress.address}</p>
          </div>
        </div>

        <div className={styles.OrderInfo}>
          <h3>Order information</h3>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Date:</span>
            <p>{dateShortener(myOrder.createdAt)}</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>ID:</span>
            <p>{myOrder["_id"]}</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Payment method:</span>
            <p>{myOrder.paymentMethod}</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Payment status:</span>
            {myOrder.isPaid ? <p>Paid</p> : <p>Unpaid</p>}
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Delivery status:</span>
            {myOrder.isDelivered ? <p>Delivered</p> : <p>Not delivered</p>}
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Order items:</span>
            <p>{myOrder.orderItems.length}</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Total orders:</span>
            <p>
              {myOrder.orderItems.reduce((total, item) => total + item.qty, 0)}
            </p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Items price:</span>
            <p>{myOrder.itemsPrice} $</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Shipping price:</span>
            <p>{myOrder.shippingPrice} $</p>
          </div>
          <div
            className={darkModeState ? styles.darkInfoBox : styles.lightInfoBox}
          >
            <span>Total payments:</span>
            <p>{myOrder.totalPrice} $</p>
          </div>
        </div>
      </div>

      {myOrder.orderItems.map((item, index) => (
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
            <h3 className={styles.orderName}>{item.name}</h3>
            <p className={styles.price}>{item.price} $</p>
            <div className={styles.quantityBox}>
              <span>Quantity:</span>
              <p>{item.qty}</p>
            </div>
            <div className={styles.quantityBox}>
              <span>Item:</span>
              <p>
              {index + 1} of {myOrder.orderItems.length}
            </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrderDetailsCard;
