import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import AboutMainContent from "./_about-main-content";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: AboutMainContent,
  title: "AboutMainContent",
  decorators: [withKnobs],
};
export const contactMainContent = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <AboutMainContent />
    </ThemeProvider>
  );
};
