import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import * as Constants from "../../../constants";

const useStyles = makeStyles((theme) => ({
  styleHeaderElement: {
    marginRight: "20px",

    paddingTop: "200px",
  },
}));

const HeaderElement = () => {
  const classes = useStyles();

  return (
    <div className={classes.styleHeaderElement}>
      <Typography variant="h2">{Constants.NAME}</Typography>
    </div>
  );
};

export default HeaderElement;
