import React from "react";
import { ThemeProvider } from "@material-ui/core";
// import { w object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import EditImageForm from "./_edit-image-form";
import { myTheme } from "../../../theme";
import {withKnobs,boolean,text} from "@storybook/addon-knobs/react"
export default {
  component: EditImageForm,
  title: "EditImageForm",
   decorators: [withKnobs],
};
export const normal = () => {
  const name = text("name", "image1");
  return (
     
    <ThemeProvider theme={myTheme}>      
      <EditImageForm  name ={name} handleChangeInName={action()} handleSubmit ={action()}/>
    </ThemeProvider>
  );
};