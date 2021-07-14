import React from "react";
import classes from "./title.module.css";

function Title(props) {
  return (
    <div className={classes.title}>
      <h2>Bilder</h2>
      <h1>Portfolio</h1>
      <div className={classes.border}></div>
      <h4>
        Följ{" "}
        <a target="_blank" href="https://www.instagram.com/salongbeautiful/">
          @Salong Beautiful
        </a>{" "}
        för mer bilder!
      </h4>
    </div>
  );
}

export default Title;
