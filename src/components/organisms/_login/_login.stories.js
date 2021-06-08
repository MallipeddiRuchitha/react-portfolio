import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import Login from "./_login";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text, object } from "@storybook/addon-knobs/react";
import Auth from "../../../auth/Auth";

export default {
  component: Login,
  title: "Login",
  decorators: [withKnobs],
};

export const login = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Login auth={new Auth()} />
    </ThemeProvider>
  );
};
