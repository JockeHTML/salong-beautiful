import React from "react";
import Title from "./Title";
import Price from "./price/Price";
import { priceData } from "../../data/data";
import classes from "./prices.module.css";

function Prices(props) {
  return (
    <div id="prices" className={classes.prices}>
      <Title />
      <div className={classes.content}>
        {priceData.map((data) => {
          return <Price data={data} />;
        })}
      </div>
    </div>
  );
}

export default Prices;
