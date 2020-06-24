import React from "react";

import Name from "../../atoms/_name/_name";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import Images from "../../../images.json";
import Image from "../../atoms/_image/_image";
const useStyles = makeStyles((theme) => ({
  styleHeaderElement: {
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
    <Image key={img.id} image1={img} />
  ));
  return (
    <div className={classes.styleHeaderElement}>
      <div className={classes.styleGrid}>{images}</div>
    </div>
  );
};

export default GalleryMainContent;
