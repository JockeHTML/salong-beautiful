import React from "react";
import classes from "./contact.module.css";
import ContactInfo from "./contactInfo";

function Contact(props) {
  return (
    <div id="contact" className={classes.contact}>
      <div className={classes.content}>
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;
