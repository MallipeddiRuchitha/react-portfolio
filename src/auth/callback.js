import React, { useEffect } from "react";
import Auth from "./Auth";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Constants from "../constants"
const useStyles = makeStyles((theme) => ({
  styleMainContent: {
    height: "92.5vh",

    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",

    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
}));

const Callback = () => {
  console.log("inside callback");
  useEffect(() => {
    console.log("inside callback");
    const auth = new Auth();
    auth.handleAuthentication();
  });
  const classes = useStyles();
  return (
    <div className={classes.styleMainContent}>
      <Typography>{Constants.LOADING}</Typography>
    </div>
  );
};
export default Callback;
