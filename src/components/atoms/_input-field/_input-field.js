import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleInputFields: {
    marginRight: "20px",
  },
}));

const InputField = ({onChange}) => {
  const classes = useStyles();

  return (
    <div className={classes.styleInputFields}>
      <Input 
        inputProps={{ "aria-label": "description" }}
        style={{ color: "#000" }}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
