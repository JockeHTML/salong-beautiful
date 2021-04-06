import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <h1>Varumärken jag jobbar med</h1>
      <div className={classes.border}></div>
      <h3>Finns även tillgängligt för köp på salongen</h3>
    </div>
  );
}

export default Title;
