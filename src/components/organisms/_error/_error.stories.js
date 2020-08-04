import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import Error from "./_error";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: Error,
  title: "Error",
  decorators: [withKnobs],
};

export const error = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Error />
    </ThemeProvider>
  );
};
