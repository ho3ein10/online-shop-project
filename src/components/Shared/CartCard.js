import React from "react";
import { useSelector } from "react-redux";
import { textShortener } from "../../helper/founctions";
import styles from "./CartCard.module.css";
import ProductCounter from "./ProductCounter";

import Airpods from "../../images/orderImages/Airpods-Wireless-Bluetooth.jpg";
import iPhone from "../../images/orderImages/iPhone-11-Pro.jpg";
import Cannon from "../../images/orderImages/Cannon-EOS-80D.jpg";
import Sony from "../../images/orderImages/Sony-Playstation-4.jpg";
import Logitech from "../../images/orderImages/Logitech-G-Series-Gaming.jpg";
import Amazon from "../../images/orderImages/Amazon-Echo-Dot.jpg";
// import testImage from "../../images/Product-details.jpg";

const CartCard = ({ selectedItem }) => {
  const { darkModeState } = useSelector((state) => state);

  let orderImage;

  switch (selectedItem["_id"]) {
    case "624dec569897f61e046b0586":
      orderImage = Airpods;
      break;
    case "624dec569897f61e046b0587":
      orderImage = iPhone;
      break;
    case "624dec569897f61e046b0588":
      orderImage = Cannon;
      break;
    case "624dec569897f61e046b0589":
      orderImage = Sony;
      break;
    case "624dec569897f61e046b058a":
      orderImage = Logitech;
      break;
    case "624dec569897f61e046b058b":
      orderImage = Amazon;
      break;
    default:
      break;
  }

  return (
    <div
      className={darkModeState ? styles.darkcontainer : styles.lightcontainer}
    >
      {/* <div className={darkModeState ? styles.darkImageBox : styles.lightImageBox}>
        <img
          className={styles.productImage}
          src={selectedItem.image}
          alt="product_image"
        />
      </div> */}
      <div
        className={darkModeState ? styles.darkImageBox : styles.lightImageBox}
      >
        <img
          className={styles.productImage}
          src={orderImage}
          alt="product_image"
        />
      </div>
      {/* <div className={darkModeState ? styles.darkImageBox : styles.lightImageBox}>
        <img className={styles.productImage} src={testImage} alt="product_image" />
      </div> */}
      <div className={darkModeState ? styles.darkTextBox : styles.lightTextBox}>
        <h3 className={styles.productName}>
          {textShortener(selectedItem.name)}
        </h3>
        <p className={styles.price}>{selectedItem.price} $</p>
        <ProductCounter productData={selectedItem} />
      </div>
    </div>
  );
};

export default CartCard;
