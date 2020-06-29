import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import GalleryMainContent from "./_gallery-main-content";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: GalleryMainContent,
  title: "GalleryMainContent",
  decorators: [withKnobs],
};
export const galleryMainContent = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GalleryMainContent />
    </ThemeProvider>
  );
};
