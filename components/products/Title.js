import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <h1>Jag hjälper dig med</h1>
      <div className={classes.border}></div>
      <h3>Kontakta mig för andra överenskommelser</h3>
    </div>
  );
}

export default Title;
