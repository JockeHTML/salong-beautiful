import React from "react";
import classes from "./slide.module.css";
import { slideData } from "../../data/data";

function Slide(props) {
  return (
    <div className={classes.slide}>
      {slideData.map((slide, index) => {
        return (
          <div key={index} className={classes.content}>
            <span>
              <i className={slide.icon}></i>
            </span>
            <a href={slide.href}>
              <h3>{slide.text}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Slide;
