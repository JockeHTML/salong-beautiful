import React, { useEffect } from "react";
import classes from "./price.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Price(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
    <div data-aos="fade-up" className={classes.price}>
      <h2>{heading}</h2>
      <div className={classes.border}></div>
      <div className={classes.priceContent}>
        <span>
          <h4>{`${title}.....`}</h4>
          <h4>{price}</h4>
        </span>

        <p>{text}</p>
      </div>

      <div className={classes.priceContent}>
        <span>
          <h4>{`${title2}.....`}</h4>
          <h4>{price2}</h4>
        </span>

        <p>{text2}</p>
      </div>

      {!title3 ? null : (
        <div className={classes.priceContent}>
          <span>
            {" "}
            <h4>{`${title3}.....`}</h4>
            <h4>{price3}</h4>
          </span>
          <p>{text3}</p>{" "}
        </div>
      )}

      {!title4 || !title5 ? null : (
        <div>
          <div className={classes.priceContent}>
            <span>
              <h4>{`${title4}.....`}</h4>
              <h4>{price4}</h4>
            </span>

            <p>{text4}</p>
          </div>
          <div className={classes.priceContent}>
            <span>
              <h4>{`${title5}.....`}</h4>
              <h4>{price5}</h4>
            </span>

            <p>{text5}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Price;
