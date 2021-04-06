import React from "react";
import classes from "./text.module.css";

function Text(props) {
  return (
    <div className={classes.text}>
      <div className={classes.social}>
        <h2>Social media</h2>
        <div className={classes.border}></div>
        <span>
          <a
            target="_blank"
            href="https://www.facebook.com/Salong-Beautiful-116438208439323/?fref=ts"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </span>

        <span>
          <a target="_blank" href="https://www.instagram.com/salongbeautiful/">
            <i className="fab fa-instagram"></i>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Text;
