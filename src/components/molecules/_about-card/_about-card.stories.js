import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import AboutCard from "./_about-card";
import { myTheme } from "../../../theme";
import { withKnobs, boolean,array ,text} from "@storybook/addon-knobs/react";
export default {
  component: AboutCard,
  title: "AboutCard",
  decorators: [withKnobs],
};

export const aboutCard = () => {
  const arr = array("array", ['JAVA','REACT','SPRING']);
  const heading=text("heading","Technical skills")
  return (
    <ThemeProvider theme={myTheme}>
      <AboutCard array={arr} heading={heading} />
    </ThemeProvider>
  );
};

