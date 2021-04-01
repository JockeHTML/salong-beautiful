import React from "react";
import classes from "./slide.module.css";

function Slide(props) {
  return (
    <div className={classes.slide}>
      <div>
        <span>
          <i className="fas fa-phone-alt"></i>
        </span>
        <a href="tel:+4660617610">
          <h3>060 - 61 76 10</h3>
        </a>
      </div>
      <div>
        <span>
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <h3>Fridhemsgatan 74 854 61 Sundsvall</h3>
      </div>
      <div>
        <span>
          <i className="fas fa-mobile-alt"></i>
        </span>
        <a href="tel:+46703118663">
          <h3>070 - 311 86 63</h3>
        </a>
      </div>
    </div>
  );
}

export default Slide;
