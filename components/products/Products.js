import React from "react";
import Product from "./Product";
import Title from "./Title";
import classes from "./products.module.css";

function Products(props) {
  return (
    <div className={classes.products}>
      <Title />
      <Product />
    </div>
  );
}

export default Products;
