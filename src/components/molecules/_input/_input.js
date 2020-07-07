import React from "react";
import { Typography } from "@material-ui/core";

import InputField from "../../atoms/_input-field/_input-field";

const Input = ({ label, onChange, value ,ref}) => {
  return (
    <div data-testid="input">
      <Typography variant="h5">{label}</Typography>
      <InputField value={value} onChange={onChange} ></InputField>
    </div>
  );
};

export default Input;
