import React from "react";
import classes from "./logo.module.css";

function Logo(props) {
  return (
    <div className={classes.logo}>
      <img
        width="50px"
        height="50px"
        src="http://salongbeautiful.se/img/jk.png"
        alt="Salsong Beatiful"
      />
    </div>
  );
}

export default Logo;
