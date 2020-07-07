import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Input, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleInputFields: {
    marginRight: "20px",
  },
}));

const InputField = ({ value, onChange,ref }) => {
  const classes = useStyles();

  return (
    <div className={classes.styleInputFields} data-testid="inputField">
      <Input data-testid="inputAtom"
        //defaultValue={value}
        inputProps={{ "aria-label": "description" }}
        style={{ color: "#000" }}
        onChange={onChange}
        required
        inputProps={{ "data-testid": value }}
        
      />
    </div>
  );
};

export default (InputField);
