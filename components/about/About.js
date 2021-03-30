import React from "react";
import classes from "./about.module.css";
import Text from "./Text";
import Picture from "./Picture";

function About(props) {
  return (
    <div id="about" className={classes.about}>
      <Picture />
      <Text />
    </div>
  );
}

export default About;
