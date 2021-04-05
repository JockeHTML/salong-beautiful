import React from "react";
import classes from "./product.module.css";
import { Grid } from "@material-ui/core";
import { productsData } from "../../data/data";

function Product(props) {
  return (
    <Grid id="products" container className={classes.gridContainer}>
      <div className={classes.content}>
        {productsData.map((product, index) => {
          const { title, url, text } = product;
          return (
            <Grid
              key={index}
              lg={2}
              xs={10}
              md={3}
              className={classes.gridItem}
              item
            >
              <img src={url} alt="Frisör" />
              <span>
                <h2>{title}</h2>
                <p>{text}</p>
              </span>
            </Grid>
          );
        })}
      </div>
    </Grid>
  );
}

export default Product;
