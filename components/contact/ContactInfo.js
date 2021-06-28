import React, { useEffect } from "react";
import { contactData } from "../../data/data";
import classes from "./contactInfo.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactInfo(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up" className={classes.contactInfo}>
      {contactData.map((data, index) => {
        return (
          <div key={index} className={classes.info}>
            <span className={classes.icon}>
              <img src={data.icon} alt={data.title} />
            </span>
            <span>
              <p>{data.title}</p>
            </span>
          </div>
        );
      })}
      <div className={classes.info}>
        <span className={classes.icon}>
          <img src="./images/placeholder.png" alt="plats ikon" />
        </span>
        <span>
          <p>Fridhemsgatan 74, 854 61</p>
        </span>
      </div>
    </div>
  );
}

export default ContactInfo;
