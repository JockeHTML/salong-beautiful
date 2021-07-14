import React from "react";
import classes from "./main.module.css";
import Icon from "./Icon";
import Menu from "../homePage/Menu";

function Main(props) {
  return (
    <div title="Salong Beautiful" id="home" className={classes.main}>
      <Menu />
      <div className={classes.title}>
        <h2>Din frisörsalong i Sundsvall</h2>
        <span>
          <h1>Salong Beautiful</h1>
        </span>
        <Icon />
      </div>
    </div>
  );
}

export default Main;
