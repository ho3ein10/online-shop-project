import React from "react";
import styles from "./Home.module.css";
import Navbar from "./Shared/Navbar";
import Header from "./Shared/Header";
import Main from "./Shared/Main";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;
