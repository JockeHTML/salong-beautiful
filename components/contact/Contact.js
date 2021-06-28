import React from "react";
import classes from "./contact.module.css";
import ContactInfo from "./ContactInfo";
import Title from "./Title";
import Map from "./Map";

function Contact(props) {
  return (
    <div id="contact" className={classes.contact}>
      <Title />
      <div className={classes.content}>
        <ContactInfo />
        <Map />
      </div>
    </div>
  );
}

export default Contact;
