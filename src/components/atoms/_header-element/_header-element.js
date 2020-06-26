import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleHeaderElement: {
    height: "20px",
    width: "70px",
    marginRight: "30px",
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
    <Typography variant="h4" className={classes.styleHeaderElement}>
      {text}
    </Typography>
  );
};

export default HeaderElement;
