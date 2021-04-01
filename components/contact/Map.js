import React from "react";
import classes from "./map.module.css";

function Map(props) {
  return (
    <div className={classes.map}>
      <iframe
        className={classes.iframe}
        title="Salong Beautiful"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1849.7124869925904!2d17.33247291625083!3d62.37981576981763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46646714f8a29e95%3A0x1f20124a3464a1e9!2sSalong%20Beautiful!5e0!3m2!1ssv!2sse!4v1617093856804!5m2!1ssv!2sse"
        width="350"
        height="260"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}

export default Map;
