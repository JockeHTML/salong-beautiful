import React from "react";
import classes from "./phone.module.css";

function Phone(props) {
  return (
    <div className={classes.phone}>
      <ul>
        <li>
          <a href="tel:+4660617610">Telefon: 060 - 61 76 10</a>
        </li>
      </ul>
    </div>
  );
}

export default Phone;
