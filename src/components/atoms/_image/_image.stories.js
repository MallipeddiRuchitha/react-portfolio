import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import Image from "./_image";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: Image,
  title: "Image",
  decorators: [withKnobs],
};

export const image = () => {
  const url = text(
    "image",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
  );
  return (
    <ThemeProvider theme={myTheme}>
      <Image image={url} />
    </ThemeProvider>
  );
};
