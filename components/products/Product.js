import React from "react";
import classes from "./product.module.css";
import { productsData } from "../../data/data";

function Product(props) {
  return (
    <div id="products" className={classes.product}>
      {productsData.map((product, index) => {
        const { title, url, img } = product;
        return (
          <div className={classes.productLink}>
            <a href={url} target="_blank">
              <img src={img} />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
