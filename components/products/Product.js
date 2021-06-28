import React, { useEffect } from "react";
import classes from "./product.module.css";
import { productsData } from "../../data/data";
import Aos from "aos";
import "aos/dist/aos.css";

function Product(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" id="products" className={classes.product}>
      {productsData.map((product, index) => {
        const { title, url, img } = product;
        return (
          <div key={index} className={classes.productLink}>
            <a href={url} target="_blank">
              <img alt="frisyr kvinna" src={img} />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
