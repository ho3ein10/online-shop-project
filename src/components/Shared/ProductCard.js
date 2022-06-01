import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { textShortener } from "../../helper/founctions";
import styles from "./ProductCard.module.css";
import ProductRating from "./ProductRating";
import ProductCounter from "./ProductCounter";

import Airpods from "../../images/orderImages/Airpods-Wireless-Bluetooth.jpg";
import iPhone from "../../images/orderImages/iPhone-11-Pro.jpg";
import Cannon from "../../images/orderImages/Cannon-EOS-80D.jpg";
import Sony from "../../images/orderImages/Sony-Playstation-4.jpg";
import Logitech from "../../images/orderImages/Logitech-G-Series-Gaming.jpg";
import Amazon from "../../images/orderImages/Amazon-Echo-Dot.jpg";
// import testImage from "../../images/Product-details.jpg";

const ProductCard = ({ productData }) => {
  const { darkModeState } = useSelector((state) => state);
  const navigate = useNavigate();

  let orderImage;

  switch (productData["_id"]) {
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
      className={darkModeState ? styles.darkContainer : styles.lightContainer}
    >
      <div className={styles.imageContainer}>
        {/* <img
          className={styles.cardImage}
          src={productData.image}
          alt="product_image"
          onClick={() => navigate(`${productData["_id"]}`)}
        /> */}
        <img
          className={styles.cardImage}
          src={orderImage}
          alt="product_image"
          onClick={() => navigate(`${productData["_id"]}`)}
        />
        {/* <img
          className={styles.cardImage}
          src={testImage}
          alt="product_image"
          onClick={() => navigate(`${productData["_id"]}`)}
        /> */}
      </div>
      <h3>{textShortener(productData.name)}</h3>
      <div className={styles.middleContainer}>
        <p>{`${productData.price} $`}</p>
        <ProductRating
          rating={productData.rating}
          numReviews={productData.numReviews}
        />
      </div>
      <div className={styles.counterContainer}>
        <ProductCounter productData={productData} />
      </div>
    </div>
  );
};

export default ProductCard;
