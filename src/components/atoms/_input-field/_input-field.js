import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Input, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleInputFields: {
    marginRight: "20px",
  },
}));

const InputField = ({ value, onChange,ref ,test}) => {
  const classes = useStyles();

  return (
    <div className={classes.styleInputFields} id="inputField">
      <Input //data-testid={value}
        defaultValue={value}
        inputProps={{ "aria-label": "description" }}
        style={{ color: "#000" }}
        onChange={onChange}
        required
        inputProps={{"data-testid": test }}
        id={test}
      />
    </div>
  );
};

export default (InputField);
