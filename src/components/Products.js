import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../redux/actions/productsAction";
import Loader from "./Shared/Loader";
import ProductCard from "./Shared/ProductCard";
import styles from "./Products.module.css";
import Navbar from "./Shared/Navbar";

const Products = () => {
  const dispatch = useDispatch();
  const { productsData, loading, error } = useSelector(
    (state) => state.productsState
  );

  useEffect(() => {
    if (!!productsData.length) {
      return;
    } else {
      dispatch(productsAction());
    }
  }, [dispatch, productsData.length]);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          productsData.map((item, index) => (
            <ProductCard key={index} productData={item} />
          ))
        )}
      </div>
    </>
  );
};

export default Products;
