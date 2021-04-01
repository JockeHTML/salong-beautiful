import React from "react";
import classes from "./product.module.css";
import { Grid } from "@material-ui/core";
import { productsData } from "../../data/data";

function Product(props) {
  return (
    <Grid id="products" container className={classes.gridContainer}>
      {productsData.map((product, index) => {
        const { title, url, text } = product;
        return (
          <Grid
            key={index}
            lg={3}
            xs={11}
            md={4}
            className={classes.gridItem}
            item
          >
            <h2>{title}</h2>
            <img src={url} alt="Frisör" />
            <p>{text}</p>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Product;
