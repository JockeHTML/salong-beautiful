import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <div className={classes.content}>
        <h2>Salong Beautiful</h2>
        <p>Kontakta gärna mig vid frågor eller funderingar</p>
      </div>
    </div>
  );
}

export default Title;
