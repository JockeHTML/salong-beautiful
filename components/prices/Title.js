import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <h1>Priser</h1>
      <div className={classes.border}></div>
      <h3>Klippning & Färgning</h3>
    </div>
  );
}

export default Title;
