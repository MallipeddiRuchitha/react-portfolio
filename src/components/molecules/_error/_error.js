import React from "react";
import * as Constants from "../../../constants";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { myTheme } from "../../../theme";
const useStyles = makeStyles((theme) => ({
  inputError: {
    paddingBottom: "30px",
    color: "red",
  },

  link: {
    paddingLeft: "46%",
  },
  styleError: {
    height: "92.5vh",
    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
    color: myTheme.palette.myColor.blackColor,

    paddingTop: "10%",
  },
}));
const Error = () => {
  const classes = useStyles();
  return (
    <div data-testid="error" className={classes.styleError}>
      <Typography className={classes.inputError} variant="h3">
        {Constants.LOGIN_FIRST}
      </Typography>
      <a href="/" className={classes.link}>
        {" "}
        {Constants.BACK_TO_LOGIN_PAGE}
      </a>
    </div>
  );
};
export default Error;
