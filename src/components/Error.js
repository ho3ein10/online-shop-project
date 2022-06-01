import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  const { darkModeState } = useSelector((state) => state);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Page Not Found!</p>
      <button
        className={
          darkModeState ? styles.darkHomeButton : styles.lightHomeButton
        }
        onClick={() => navigate("/")}
      >
        Home Page
      </button>
    </div>
  );
};

export default Error;
