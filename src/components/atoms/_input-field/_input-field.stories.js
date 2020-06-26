import React from "react";
import { ThemeProvider } from "@material-ui/core";
// import { w object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import InputField from "./_input-field";
import { myTheme } from "../../../theme";
import {withKnobs,boolean,text} from "@storybook/addon-knobs/react"
export default {
  component: InputField,
  title: "InputField",
   decorators: [withKnobs],
};


export const normal = () => {
  const value = text("value", "input");
  return (
    <ThemeProvider theme={myTheme}>
      <InputField  value={value} 
      onChange={action()}/>
    </ThemeProvider>
  );
};