import React, { useState } from "react";
import classes from "./commentSlide.module.css";
import { commentSlideData } from "../../data/data";

export const CommentSlide = () => {
  const [current, setCurrent] = useState(0);
  const length = commentSlideData.length;

  if (commentSlideData.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (length <= 0) {
    return null;
  }

  return (
    <div className={classes.commentSlide}>
      <span className={classes.left}>
        <i onClick={prevSlide} className="fas fa-chevron-circle-left"></i>
      </span>
      {commentSlideData.map((slide, index) => {
        return (
          <div
            className={index === current ? classes.slideActive : classes.slide}
            key={index}
          >
            {index === current && (
              <span>
                <h2>❞{slide.text}❞</h2>
              </span>
            )}
          </div>
        );
      })}
      <span className={classes.right}>
        <i onClick={nextSlide} className="fas fa-chevron-circle-right"></i>
      </span>
    </div>
  );
};
