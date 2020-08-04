import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
import Image from "../../atoms/_image/_image";
const useStyles = makeStyles((theme) => ({
  styleHeaderElement: {
    minHeight: "92.5vh",
    height: "auto",
    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
  picture: {
    borderRadius: "50%",
  },
  name: {
    paddingTop: "200px",
    paddingBottom: "10px",
  },
}));

const HomeMainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.styleHeaderElement} id="home">
      <Typography variant="h2" className={classes.name}>
        {Constants.NAME}
      </Typography>

      <Typography variant="h4">{Constants.DESIGNATION}</Typography>

      <div className={classes.picture}>
        <Image
          image="https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg"
          className={classes.picture}
        ></Image>
      </div>
    </div>
  );
};

export default HomeMainContent;
