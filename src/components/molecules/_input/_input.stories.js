import React from "react";
import { ThemeProvider } from "@material-ui/core";
// import { w object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import Input from "./_input";
import { myTheme } from "../../../theme";
import {withKnobs,boolean,text} from "@storybook/addon-knobs/react"
import {storiesOf} from "@storybook/react";




export default {
  component: Input,
  title: "Input",
  decorators: [withKnobs]
};


export const normal = () => {
  const label = text("label", "Enter password"); 
  return (
    <ThemeProvider theme={myTheme}>      
      <Input label={label} onChange = {action()} value=""/>
    </ThemeProvider>
  );
};

// const stories=storiesOf("Storybook knobs",module);
// stories.addDecorator(withKnobs);
// stories.add("with a button",()=>{
//   <ThemeProvider theme={myTheme}>      
//   <Input label="name" onChange = {action()} value=""/>
// </ThemeProvider>
// }
// );