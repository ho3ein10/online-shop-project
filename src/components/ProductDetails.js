import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Shared/Loader";
import styles from "./ProductDetails.module.css";
import Navbar from "./Shared/Navbar";
import ProductRating from "./Shared/ProductRating";

import Airpods from "../images/orderImages/Airpods-Wireless-Bluetooth.jpg";
import iPhone from "../images/orderImages/iPhone-11-Pro.jpg";
import Cannon from "../images/orderImages/Cannon-EOS-80D.jpg";
import Sony from "../images/orderImages/Sony-Playstation-4.jpg";
import Logitech from "../images/orderImages/Logitech-G-Series-Gaming.jpg";
import Amazon from "../images/orderImages/Amazon-Echo-Dot.jpg";
// import testImage from "../images/Product-details.jpg";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productState, darkModeState } = useSelector((state) => state);
  const { productData, loading, error } = productState;
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (productData["_id"] === id) {
      return;
    } else {
      dispatch(productAction(id));
    }
  }, [dispatch, productData, id]);

  let orderImage;

  switch (id) {
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
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        {loading ? (
          <div
            className={
              darkModeState
                ? styles.darkAlternativeBox
                : styles.lightAlternativeBox
            }
          >
            <Loader />
          </div>
        ) : error ? (
          <div
            className={
              darkModeState
                ? styles.darkAlternativeBox
                : styles.lightAlternativeBox
            }
          >
            <h1>{error}</h1>
          </div>
        ) : (
          <div
            className={
              darkModeState ? styles.darkContainer : styles.lightContainer
            }
          >
            <div
              className={
                darkModeState ? styles.darkImageBox : styles.lightImageBox
              }
            >
              {/* <img className={styles.productImage} src={productData.image} alt="product_image" /> */}
              <img className={styles.productImage} src={orderImage} alt="product_image" />
              {/* <img
                className={styles.productImage}
                src={testImage}
                alt="product_image"
              /> */}
            </div>

            <div
              className={
                darkModeState ? styles.darkTextBox : styles.lightTextBox
              }
            >
              <ProductRating
                rating={productData.rating}
                numReviews={productData.numReviews}
              />
              <h3>{productData.name}</h3>
              <p className={styles.description}>{productData.description}</p>
              <div className={styles.informations}>
                <span>Brand:</span>
                <p>{productData.brand}</p>
                <span>Category:</span>
                <p>{productData.category}</p>
                <span>Count In Stock:</span>
                <p>{productData.countInStock}</p>
              </div>
              <div className={styles.bottomBox}>
                <span className={styles.price}>{productData.price} $</span>
                <button
                  className={
                    darkModeState
                      ? styles.darkHomeButton
                      : styles.lightHomeButton
                  }
                  onClick={() => navigate("/products")}
                >
                  Back to Shop
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
