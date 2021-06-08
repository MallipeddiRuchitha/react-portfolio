import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import AddImageForm from "./_add-image-form";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: AddImageForm,
  title: "AddImageForm",
  decorators: [withKnobs],
};

export const addImageForm = () => {
  const name = text("name", "image1");
  const nameError=text("nameError","");
  const urlError=text("urlError","");
  return (
    <ThemeProvider theme={myTheme}>
      <AddImageForm
        handleNameChange={action()}
        handleURLChange={action()}
        handleAddClick={action()}
        name={name}
        nameError={nameError}
        urlError={urlError}
      />
    </ThemeProvider>
  );
};
