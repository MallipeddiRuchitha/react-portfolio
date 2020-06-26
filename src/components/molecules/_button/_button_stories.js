import React from "react";
import { ThemeProvider } from "@material-ui/core";
// import { w object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import Button from "./_button";
import { myTheme } from "../../../theme";
import {withKnobs,boolean,text} from "@storybook/addon-knobs/react"
export default {
  component: Button,
  title: "Button",
   decorators: [withKnobs],
};


export const normal = () => {
  const value = text("value", "SAVE"); 
  return (
    <ThemeProvider theme={myTheme}>      
      <Button onClick = {action()} value={value}/>
    </ThemeProvider>
  );
};