import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import shoppingCart from "../../icons/shopping-cart-icon.svg";
import logo from "../../images/Shop-Logo.png";
import User from "./User";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const { userState, cartState } = useSelector((state) => state);
  const { token } = userState.userData;
  const { itemsCounter } = cartState;
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img
            className={styles.logo}
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
          <DarkMode />
        </div>

        <div className={styles.centerContainer}>
          <Link className={styles.productLink} to="/">
            Home
          </Link>
          <Link className={styles.productLink} to="/products">
            Products
          </Link>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.shoppingCart}>
            <Link to="/cart">
              <img src={shoppingCart} alt="logo" />
              <span>{itemsCounter}</span>
            </Link>
          </div>
          {token && window.innerWidth > 480 ? (
            <User />
          ) : (
            <Link className={styles.productLink} to="/login">
              Log in
            </Link>
          )}

          <div
            className={styles.hamburgerMenu}
            onClick={() => setShowMenu((last) => !last)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {showMenu && (
            <div className={styles.containerMenu}>
              <Link className={styles.productLinkMenu} to="/">
                Home
              </Link>
              <Link className={styles.productLinkMenu} to="/products">
                Products
              </Link>
              <div>
                {token ? (
                  <User />
                ) : (
                  <Link className={styles.productLinkMenu} to="/login">
                    Log in
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
