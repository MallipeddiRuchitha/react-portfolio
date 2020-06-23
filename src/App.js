import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "../src/pages/home-page/home-page";
import { myTheme } from "../src/theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <HomePage />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
