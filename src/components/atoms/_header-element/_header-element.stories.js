import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import HeaderElement from "./_header-element";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: HeaderElement,
  title: "HeaderElement",
  decorators: [withKnobs],
};

export const headerElement = () => {
  const text1 = text("text", "home");
  return (
    <ThemeProvider theme={myTheme}>
      <HeaderElement text={text1} />
    </ThemeProvider>
  );
};

