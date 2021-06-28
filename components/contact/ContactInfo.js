import React from "react";
import { contactData } from "../../data/data";
import classes from "./contactInfo.module.css";

function ContactInfo(props) {
  return (
    <div className={classes.contactInfo}>
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
