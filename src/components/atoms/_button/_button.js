import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "25%",
  },
}));

const CustomButton = ({ value, onClick ,disabled}) => {
  const classes = useStyles();

  return (
    <div className={classes.button} >
      <Button onClick={onClick} variant="contained" color="primary" disabled={disabled} data-testid="button">
        <Typography variant="button"> {value}</Typography>
      </Button>
    </div>
  );
};

export default CustomButton;
