import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import ImageCard from "./_image-card";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text, object } from "@storybook/addon-knobs/react";
export default {
  component: ImageCard,
  title: "ImageCard",
  decorators: [withKnobs],
};
const imageObject = {
  id: 1,
  name: "image1",
  url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
};
export const image = () => {
  const image1 = Object("image1", imageObject);
  return (
    <ThemeProvider theme={myTheme}>
      <ImageCard
        image1={imageObject}
        handleDelete={action()}
        handleEdit={action()}
      />
    </ThemeProvider>
  );
};
