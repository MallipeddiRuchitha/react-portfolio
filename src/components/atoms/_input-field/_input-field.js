import React from "react";
//import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import {  Input,TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleInputFields: {
    marginRight: "20px",
  },
}));

const InputField = ({value,onChange}) => {
  const classes = useStyles();

  return (
    <div className={classes.styleInputFields}>
      <Input
      defaultValue={value}
        inputProps={{ "aria-label": "description" }}
        style={{ color: "#000" }}
        onChange={onChange}
        required
       
      />
    </div>
  );
};

export default InputField;
