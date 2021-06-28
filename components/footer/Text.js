import React from "react";
import classes from "./text.module.css";

function Text(props) {
  return (
    <div className={classes.text}>
      <div className={classes.social}>
        <span>
          <a
            target="_blank"
            href="https://www.facebook.com/Salong-Beautiful-116438208439323/?fref=ts"
          >
            <img src="./images/facebook.png" alt="facebook image" />
          </a>
        </span>

        <span>
          <a target="_blank" href="https://www.instagram.com/salongbeautiful/">
            <img src="./images/instagram.png" alt="instagram image" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Text;
