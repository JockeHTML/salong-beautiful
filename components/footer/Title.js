import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <div className={classes.heading}>
        <h2>Salong Beautiful</h2>
        <div className={classes.border}></div>
        <p>Tveka inte att kontakta mig vid frågor eller funderingar</p>
      </div>
    </div>
  );
}

export default Title;
