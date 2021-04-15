import React from "react";
import { contactData } from "../../data/data";
import classes from "./contactInfo.module.css";
import Map from "./Map";
import Title from "./Title";

function ContactInfo(props) {
  return (
    <div className={classes.contactInfo}>
      <div className={classes.content}>
        <Title />

        {contactData.map((data, index) => {
          return (
            <div key={index} className={classes.info}>
              <span className={classes.icon}>
                <a aria-label={data.alt} href={data.href}>
                  <i className={data.icon}></i>
                </a>
              </span>
              <span>
                <h4>{data.title}</h4>
              </span>
            </div>
          );
        })}
        <div className={classes.info}>
          <span className={classes.icon}>
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <span>
            <h4>Fridhemsgatan 74, 854 61</h4>
          </span>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default ContactInfo;
