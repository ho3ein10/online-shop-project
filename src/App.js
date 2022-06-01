import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Shipping from "./components/Shipping";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import EditProfile from "./components/EditProfile";
import MyOrders from "./components/MyOrders";
import MyOrderDetails from "./components/MyOrderDetails";
import Error from "./components/Error";
import Footer from "./components/Shared/Footer";

const App = () => {
  const { darkModeState } = useSelector((state) => state);

  return (
    <div className={darkModeState ? styles.darkMode : styles.lightMode}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/edit-profile/:id" element={<EditProfile />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/my-orders/:id" element={<MyOrderDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
