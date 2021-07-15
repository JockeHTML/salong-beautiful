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
      <table cellspacing="0" id="customers" className={classes.table}>
        <tr>
          <th>
            <h2 style={{ marginTop: "0" }}>{heading}</h2>
          </th>
          <th>
            <h2>Pris</h2>
          </th>
        </tr>

        <tr>
          <td>
            <h4>{title}</h4>
          </td>
          <td>
            <p>{price}</p>
          </td>
        </tr>
        <tr>
          <td style={{ border: "0", padding: "0 0 10px 0" }}>
            <p>{text}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>{title2}</h4>
          </td>
          <td>
            <p>{price2}</p>
          </td>
        </tr>
        <tr>
          <td style={{ border: "0", padding: "0 0 10px 0" }}>
            <p>{text2}</p>
          </td>
        </tr>
      </table>
      {!title3 ? null : (
        <table cellspacing="0" id="customers" className={classes.table}>
          <tr>
            <td>
              <h4>{title3}</h4>
            </td>
            <td>
              <p>{price3}</p>
            </td>
          </tr>
          <tr>
            <td style={{ border: "0", padding: "0 0 10px 0" }}>
              <p>{text3}</p>
            </td>
          </tr>
        </table>
      )}

      {!title4 || !title5 ? null : (
        <table cellspacing="0" id="customers" className={classes.table}>
          <tr>
            <td>
              <h4>{title4}</h4>
            </td>
            <td>
              <p>{price4}</p>
            </td>
          </tr>
          <tr>
            <td style={{ border: "0", padding: "0 0 10px 0" }}>
              <p>{text4}</p>
            </td>
          </tr>

          <tr>
            <td>
              <h4>{title5}</h4>
            </td>
            <td>
              <p>{price5}</p>
            </td>
          </tr>
          <tr>
            <td style={{ border: "0", padding: "0 0 10px 0" }}>
              <p>{text5}</p>
            </td>
          </tr>
        </table>
      )}
    </div>
  );
}

export default Price;
