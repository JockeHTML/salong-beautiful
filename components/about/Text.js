import React from "react";
import classes from "./text.module.css";
import Title from "./Title.js";

function Text(props) {
  return (
    <div className={classes.text}>
      <Title />
      <div className={classes.content}>
        <p>
          Hos mig på Beautiful vill jag att du som kund känner dig som hemma i
          min lugna och mysiga salong. Du som kund får 100% fokus där vi
          tillsammans kan skapar en frisyr och färg som passar just dig.
          Salongen drivs av mig Caroline Leek. Jag har gesällbrev och går
          regelbundet på kurser för att ständigt utvecklas som frisör.
        </p>
      </div>
    </div>
  );
}

export default Text;
