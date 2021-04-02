import React from "react";
import classes from "./button.module.css";

function Button(props) {
  return (
    <div className={classes.icon}>
      <span>
        <a href="#prices">Priser</a>
      </span>
    </div>
  );
}

export default Button;
