import React from "react";
import classes from "./icon.module.css";

function Icon(props) {
  return (
    <div className={classes.icon}>
      <span>
        <a href="#about">Läs mer</a>
      </span>
    </div>
  );
}

export default Icon;
/*<i className="fas fa-chevron-down"></i>*/
