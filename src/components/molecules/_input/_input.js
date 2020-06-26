import React from "react";
import {Typography }from  "@material-ui/core";

import InputField from "../../atoms/_input-field/_input-field";



const Input = ({ label ,onChange,value}) => {
  return (
    <div>
      {/* <Label label={label}></Label> */}
  <Typography variant="h5">{label}</Typography>
      <InputField value={value} onChange={onChange}  ></InputField>
    </div>
  );
};

export default Input;
