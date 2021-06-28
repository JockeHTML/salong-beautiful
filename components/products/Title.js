import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <h1>Varumärken jag jobbar med</h1>
      <div className={classes.border}></div>
    </div>
  );
}

export default Title;
