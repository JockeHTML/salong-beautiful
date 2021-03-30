import React from "react";
import { contactData } from "../../data/data";
import classes from "./contactInfo.module.css";
import Map from "./map";
import Title from "./Title";

function ContactInfo(props) {
  return (
    <div className={classes.contactInfo}>
      <div className={classes.content}>
        <Title />

        {contactData.map((data, index) => {
          return (
            <div className={classes.info}>
              <span className={classes.icon}>
                <i className={data.icon}></i>
              </span>

              <span>
                <a href={data.href}>
                  <h4>{data.title}</h4>
                </a>
              </span>
            </div>
          );
        })}
      </div>
      <Map />
    </div>
  );
}

export default ContactInfo;
