import React from "react";
import classes from "./socialMedia.module.css";

function SocialMedia(props) {
  return (
    <div className={classes.socialMedia}>
      <ul>
        <li>
          <a
            aria-label="Facebook"
            target="_blank"
            href="https://www.facebook.com/Salong-Beautiful-116438208439323/?fref=ts"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Instagram"
            target="_blank"
            href="https://www.instagram.com/salongbeautiful/"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
