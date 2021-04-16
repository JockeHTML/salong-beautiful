import React from "react";
import classes from "./copyright.module.css";
import { contactData } from "../../data/data";

function CopyRight(props) {
  return (
    <div className={classes.contact}>
      <div>
        <h2>Kontakt</h2>
        <ul>
          {contactData.map((data, index) => {
            const { title, href, icon } = data;
            return (
              <li key={index}>
                <a href={href}>
                  <i className={icon}></i>
                </a>
                <p>{title}</p>
              </li>
            );
          })}
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <p>Fridhemsgatan 74, 854 61</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CopyRight;
