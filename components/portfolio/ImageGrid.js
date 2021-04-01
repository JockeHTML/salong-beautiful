import React, { useState } from "react";
import classes from "./imageGrid.module.css";
import { tileData } from "../../data/data";

const ImageGrid = () => {
  /* open clicked image */
  const [imageSrc, setImageSrc] = useState();
  const [openImage, setOpenImage] = useState(false);
  const open = (e) => {
    setOpenImage(true);
    setImageSrc(e.target.alt);
  };

  return (
    <div class={classes.imageGrid}>
      {tileData.map((tile, index) => (
        <img
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
        <img src={imageSrc} alt={imageSrc} />
      </div>
    </div>
  );
};

export default ImageGrid;
