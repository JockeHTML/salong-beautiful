import React from "react";
import classes from "./picture.module.css";

function Picture(props) {
  return (
    <div className={classes.picture}>
      <img src="./images/open.jpg" alt="bild på salong Beautiful" />
    </div>
  );
}

export default Picture;
