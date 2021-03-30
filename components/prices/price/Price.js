import React from "react";
import classes from "./price.module.css";

function Price(props) {
  const {
    data: {
      heading,
      title,
      price,
      text,
      price2,
      title2,
      text2,
      title3,
      price3,
      text3,
      title4,
      price4,
      text4,
      title5,
      price5,
      text5,
    },
  } = props;

  return (
    <div className={classes.price}>
      <div>
        <h2>{heading}</h2>
        <div className={classes.border}></div>
        <span>
          <h3>{`${title}..............`}</h3>
          <h3 style={{ color: "var(--yellow)" }}>{price}</h3>
        </span>

        <p>{text}</p>

        <span>
          <h3>{`${title2}..............`}</h3>
          <h3 style={{ color: "var(--yellow)" }}>{price2}</h3>
        </span>
        <p>{text2}</p>

        {!title3 ? null : (
          <div>
            <span>
              <h3>{`${title3}..............`}</h3>
              <h3 style={{ color: "var(--yellow)" }}>{price3}</h3>
            </span>
            <p>{text3}</p>{" "}
          </div>
        )}

        {!title4 || !title5 ? null : (
          <div>
            <span>
              <h3>{`${title4}..............`}</h3>
              <h3 style={{ color: "var(--yellow)" }}>{price4}</h3>
            </span>
            <p>{text4}</p>

            <span>
              <h3>{`${title5}..............`}</h3>
              <h3 style={{ color: "var(--yellow)" }}>{price5}</h3>
            </span>
            <p>{text5}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Price;
