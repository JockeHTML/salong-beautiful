import React, { useEffect } from "react";
import classes from "./text.module.css";
import Title from "./Title.js";
import Aos from "aos";
import "aos/dist/aos.css";

function Text(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" className={classes.text}>
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
