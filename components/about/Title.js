import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <h2>Välkommen Till Mig</h2>
      <h1>Salong Beautiful</h1>
      <div className={classes.border}></div>
    </div>
  );
}

export default Title;
