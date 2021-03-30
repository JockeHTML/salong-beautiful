import React from "react";
import Grid from "./Grid";
import Title from "./Title";
import classes from "./portfolio.module.css";

function Portfolio(props) {
  return (
    <div id="portfolio" className={classes.portfolio}>
      <Title />
      <Grid />
    </div>
  );
}

export default Portfolio;
