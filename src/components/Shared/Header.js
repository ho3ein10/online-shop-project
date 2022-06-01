import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import darkBanner from "../../images/dark-banner.jpg";
import lightBanner from "../../images/light-banner.jpg";

const Header = () => {
  const { darkModeState } = useSelector((state) => state);
  return (
    <div className={styles.bannerContainer}>
      {darkModeState ? (
        <img src={darkBanner} alt="banner" />
      ) : (
        <img src={lightBanner} alt="banner" />
      )}
      <div className={styles.textContainer}>
        <h1>Welcome</h1>
        <p>
          to my{" "}
          <span className={darkModeState ? styles.firstText : styles.secondext}>
            online shop
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
