import React from "react";
import classes from "./main.module.css";
import Icon from "./Icon";
import Menu from "../homePage/Menu";

function Main(props) {
  return (
    <div title="Salong Beautiful" id="home" className={classes.main}>
      <Menu />
      <div className={classes.title}>
        <h1>Salong Beautiful</h1>
      </div>
      <Icon />
    </div>
  );
}

export default Main;
