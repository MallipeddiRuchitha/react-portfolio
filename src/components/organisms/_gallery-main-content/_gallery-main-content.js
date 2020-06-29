import React from "react";


import { makeStyles } from "@material-ui/core/styles";

import Images from "../../../images.json";
import Image from "../../atoms/_image/_image";
const useStyles = makeStyles((theme) => ({
  styleGalleryMainContent: {
    height: "auto",
    minHeight: "92.5vh",
    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  styleGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
}));

const GalleryMainContent = () => {
  const classes = useStyles();

  console.log(Images);
  const images = Images.images.map((img, key) => (
    <Image key={img.id} image={img.url} />
  ));
  return (
    <div className={classes.styleGalleryMainContent} data-testid="galleryMain">
      <div className={classes.styleGrid}>{images}</div>
    </div>
  );
};

export default GalleryMainContent;
