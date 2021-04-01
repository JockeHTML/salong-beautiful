import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <h1>Portfolio</h1>
      <div className={classes.border}></div>
      <h3>
        Följ{" "}
        <a href="https://www.instagram.com/salongbeautiful/">
          @Salong Beautiful
        </a>{" "}
        för mer bilder!
      </h3>
    </div>
  );
}

export default Title;
