import React from "react";
import { ThemeProvider } from "@material-ui/core";
// import { w object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import Header from "./_header";
import { myTheme } from "../../../theme";
import { BrowserRouter } from "react-router-dom";
import {withKnobs,boolean,text} from "@storybook/addon-knobs/react"
export default {
  component:Header ,
  title: "Header",
   decorators: [withKnobs],
};
export const normal = () => {
  return (
    <ThemeProvider theme={myTheme}> 
    <BrowserRouter> <Header/></BrowserRouter>     
     
    </ThemeProvider>
  );
};