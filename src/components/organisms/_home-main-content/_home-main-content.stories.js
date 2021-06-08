import React from "react";
import { ThemeProvider } from "@material-ui/core";
// import { w object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import HomeMainContent from "./_home-main-content";
import { myTheme } from "../../../theme";
import {withKnobs,boolean,text} from "@storybook/addon-knobs/react"
export default {
  component:HomeMainContent ,
  title: "HomeMainContent",
  decorators: [withKnobs],
};
export const homeMainContent = () => {
  return (
    <ThemeProvider theme={myTheme}>      
      <HomeMainContent/>
    </ThemeProvider>
  );
};