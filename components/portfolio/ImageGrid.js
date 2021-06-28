import React, { useState, useEffect } from "react";
import classes from "./imageGrid.module.css";
import { tileData } from "../../data/data";
import Aos from "aos";
import "aos/dist/aos.css";

const ImageGrid = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  /* open clicked image */
  const [imageSrc, setImageSrc] = useState();
  const [openImage, setOpenImage] = useState(false);
  const open = (e) => {
    setOpenImage(true);
    setImageSrc(e.target.src);
  };

  return (
    <div data-aos="fade-up" className={classes.imageGrid}>
      {tileData.map((tile, index) => (
        <img
          key={index}
          onClick={open}
          className={classes.img}
          src={tile.img}
          alt={tile.title}
        />
      ))}

      <div
        onClick={() => setOpenImage(false)}
        className={openImage ? classes.modalOpen : classes.modal}
      >
        <img src={imageSrc} alt="klippt och färgat hår" />
      </div>
    </div>
  );
};

export default ImageGrid;
