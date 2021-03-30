import React, { useState, useEffect } from "react";
import SocialMedia from "./SocialMedia";
import Phone from "./Phone";
import classes from "./mainNavigation.module.css";
import { navLinks } from "../../data/data";

function MainNavigation(props) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={scroll ? classes.headerActive : classes.header}>
      <Phone />
      <nav className={classes.nav}>
        <ul>
          {navLinks.map((link, index) => {
            const { url, title } = link;
            return (
              <a key={index} href={url}>
                {title}
              </a>
            );
          })}
        </ul>
      </nav>{" "}
      <SocialMedia />
    </header>
  );
}

export default MainNavigation;
