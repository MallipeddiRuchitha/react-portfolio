import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import Button from "./_button";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component:Button,
  title: "CustomButton",
  decorators: [withKnobs],
};

export const customButton = () => {
  const value = text("value", "SAVE");
  return (
    <ThemeProvider theme={myTheme}>
      <Button onClick={action()} value={value} />
    </ThemeProvider>
  );
};
export const disabledCustomButton = () => {
  const value = text("value", "SAVE");
  return (
    <ThemeProvider theme={myTheme}>
      <Button onClick={action()} value={value} disabled={true} />
    </ThemeProvider>
  );
};
