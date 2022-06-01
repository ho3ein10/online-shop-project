import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkModeAction } from "../../redux/actions/darkModeAction";
import styles from "./DarkMode.module.css";
import moon from "../../icons/moon-icon.svg";
import sun from "../../icons/sun-icon.svg";

const DarkMode = () => {
  const dispatch = useDispatch();
  const { darkModeState } = useSelector((state) => state);

  return (
    <div
      id={darkModeState ? styles.darkButtonFrame : styles.lightButtonFrame}
      onClick={() => dispatch(darkModeAction())}
    >
      <img className={styles.moonIcon} src={moon} alt="sunIcon" />
      <img className={styles.sunIcon} src={sun} alt="sunIcon" />
      <i
        className={
          darkModeState ? styles.darkButtonChanger : styles.lightButtonChanger
        }
      ></i>
    </div>
  );
};

export default DarkMode;
