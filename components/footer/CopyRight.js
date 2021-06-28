import React from "react";
import classes from "./copyright.module.css";
import { contactData } from "../../data/data";

function CopyRight(props) {
  return (
    <div className={classes.contact}>
      <ul>
        {contactData.map((data, index) => {
          const { title, href, icon } = data;
          return (
            <li key={index}>
              <p>{title}</p>
            </li>
          );
        })}
        <li>
          <p>Fridhemsgatan 74, 854 61</p>
        </li>
      </ul>
    </div>
  );
}

export default CopyRight;
