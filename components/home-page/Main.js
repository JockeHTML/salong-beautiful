import React from "react";
import classes from "./main.module.css";
import Icon from "./Icon";

function Main(props) {
  return (
    <div id="home" className={classes.main}>
      <div className={classes.title}>
        <h1>Salong Beautiful</h1>
      </div>
      <Icon />
    </div>
  );
}

export default Main;
