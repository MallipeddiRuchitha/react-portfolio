import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleHeaderElement: {
    height: "20px",
    width: "70px",
    marginRight: "20px",
    marginTop: "20px",
    "&:hover": {
      color: "black",
    },
  },
}));

const HeaderElement = ({ text }) => {
  const classes = useStyles();
  console.log(text);
  return (
    <Typography variant="h3" className={classes.styleHeaderElement}>
      {text}
    </Typography>
  );
};

export default HeaderElement;
