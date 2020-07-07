import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
import { myTheme } from "../../../theme";
const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: "0px",
    height: "270px",
    width: "400px",
    border: "1px solid " + myTheme.palette.myColor.blackColor,
    margin: "70px",
    textAlign: "center",
  },

  heading: {
    backgroundColor: myTheme.palette.myColor.blackColor,
    color: myTheme.palette.secondary.main,
    marginBottom: "10px",
  },
}));

const AboutCard = ({ array, heading }) => {
  const classes = useStyles();
  array = array.map((arrayElement, key) => (
    <Typography>{arrayElement}</Typography>
  ));

  return (
    <div className={classes.list} data-testid="aboutCard">
      <Typography variant="subtitle1" className={classes.heading}>
        {heading}
      </Typography>

      {array}
    </div>
  );
};

export default AboutCard;
