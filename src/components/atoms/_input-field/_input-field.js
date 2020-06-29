import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Input, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleInputFields: {
    marginRight: "20px",
  },
}));

const InputField = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.styleInputFields} data-testid="inputField">
      <Input
        defaultValue={value}
        inputProps={{ "aria-label": "description" }}
        style={{ color: "#000" }}
        onChange={onChange}
        required
        inputProps={{ "data-testid": "content-input" }}
      />
    </div>
  );
};

export default InputField;
