import React from "react";
import { ThemeProvider } from "@material-ui/core";
// import { w object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import ContactMainContent from "./_contact-main-content";
import { myTheme } from "../../../theme";
import {withKnobs,boolean,text} from "@storybook/addon-knobs/react"
export default {
  component: ContactMainContent,
  title: "ContactMainContent",
   decorators: [withKnobs],
};
export const normal = () => {
  return (
    <ThemeProvider theme={myTheme}>      
      <ContactMainContent/>
    </ThemeProvider>
  );
};