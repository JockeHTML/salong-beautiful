import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { tileData } from "../../data/data";
import styles from "./grid.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 900,
    height: 610,
  },
}));

function Grid() {
  const whatImage = useRef();
  const classes = useStyles();
  const [imageSrc, setImageSrc] = useState();
  const [openImage, setOpenImage] = useState(false);
  /*const [width, setWidth] = useState(window.innerWidth);*/

  const open = (e) => {
    setOpenImage(true);
    setImageSrc(e.target.alt);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={2}>
        {tileData.map((tile, index) => (
          <GridListTile
            className={styles.gridItem}
            key={index}
            cols={tile.cols || 1}
          >
            <img
              ref={whatImage}
              onClick={open}
              className={styles.img}
              src={tile.img}
              alt={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
      <div
        onClick={() => setOpenImage(false)}
        className={openImage ? styles.modalOpen : styles.modal}
      >
        <img src={imageSrc} alt={imageSrc} />
      </div>
    </div>
  );
}

export default Grid;
