import React from "react";
import classes from "./footer.module.css";
import Title from "./Title";
import Text from "./Text";
import CopyRight from "./CopyRight";

function Footer(props) {
  return (
    <div id="footer" className={classes.footer}>
      <div className={classes.content}>
        <Title />
        <Text />
      </div>
    </div>
  );
}

export default Footer;
