import React from "react";
import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import darkHand from "../../icons/dark-hand-icon.svg";
import lightHand from "../../icons/light-hand-icon.svg";
import shopStore from "../../images/Shop-Store-Icon.png";

const Main = () => {
  const { darkModeState } = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img
        className={styles.shopStore}
        src={shopStore}
        alt="shop_store"
        onClick={() => navigate("/products")}
      />
      <div className={styles.rightContainer}>
        {darkModeState ? (
          <img className={styles.handIcon} src={darkHand} alt="hand" />
        ) : (
          <img className={styles.handIcon} src={lightHand} alt="hand" />
        )}
        <h1>Click on the shop icon to buy</h1>
      </div>
    </div>
  );
};

export default Main;
