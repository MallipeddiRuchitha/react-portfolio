import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import Header from "./_header";
import { myTheme } from "../../../theme";
import { BrowserRouter } from "react-router-dom";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: Header,
  title: "Header",
  decorators: [withKnobs],
};
export const header = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        {" "}
        <Header />
      </BrowserRouter>
    </ThemeProvider>
  );
};
