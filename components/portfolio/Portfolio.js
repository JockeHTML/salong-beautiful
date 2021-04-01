import React from "react";
import Title from "./Title";
import classes from "./portfolio.module.css";
import ImageGrid from "./ImageGrid";

function Portfolio(props) {
  return (
    <div id="portfolio" className={classes.portfolio}>
      <Title />
      <ImageGrid />
    </div>
  );
}

export default Portfolio;
