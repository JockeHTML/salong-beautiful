import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <h2>Klippning & Färgning</h2>
      <h1>Priser</h1>
      <div className={classes.border}></div>
    </div>
  );
}

export default Title;
