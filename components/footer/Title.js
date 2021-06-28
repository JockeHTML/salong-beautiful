import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <div className={classes.content}>
        <h2>Salong Beautiful</h2>
        <div className={classes.border}></div>
      </div>
    </div>
  );
}

export default Title;
