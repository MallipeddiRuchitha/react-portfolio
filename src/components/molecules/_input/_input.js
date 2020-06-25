import React from "react";

import Name from "../../atoms/_name/_name";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import InputField from "../../atoms/_input-field/_input-field";
import Label from "../../atoms/_label/_label";
import Constants from "../../../constants";

const HeaderMainContent = ({ label ,onChange}) => {
  return (
    <div>
      <Label label={label}></Label>
      <InputField onChange={onChange}></InputField>
    </div>
  );
};

export default HeaderMainContent;
