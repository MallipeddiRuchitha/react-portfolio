import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const LoginTemplate = ({ content }) => {
  const classes = useStyles();
  return <div className={classes.styleLogin} data-testid="loginTemplate"> {content}</div>;
};

export default LoginTemplate;
