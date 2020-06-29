import React from "react";
import * as Constants from "../../../constants";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
 
  inputError: {
    paddingBottom: "30px",
    color: "red",
  },

  link: {
    paddingLeft: "46%",
  },
}));
const Error = () => {
  const classes = useStyles();
  return (
    <div  data-testid="error">
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
