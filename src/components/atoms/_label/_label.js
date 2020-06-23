import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleLabel: {
    marginTop: "20px",
  },
}));

const Label = ({ label }) => {
  const classes = useStyles();

  return (
    <div className={classes.styleLabel}>
      <Typography variant="h4">{label}</Typography>
    </div>
  );
};

export default Label;
