import React from "react";
import { ThemeProvider } from "@material-ui/core";
// import { w object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import GalleryAdmin from "./_gallery-admin-main-content";
import { myTheme } from "../../../theme";
import {withKnobs,boolean,text} from "@storybook/addon-knobs/react"
export default {
  component: GalleryAdmin,
  title: "GalleryAdmin",
   decorators: [withKnobs],
};
export const galleryAdmin = () => {
  return (
    <ThemeProvider theme={myTheme}>      
      <GalleryAdmin  />
    </ThemeProvider>
  );
};