import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "../src/pages/home-page/home-page";
import { myTheme } from "../src/theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/login-page/login-page";
import ErrorPage from "./pages/error-page/error-page";
import Callback from "./auth/callback"


let component = "";


const App = (props) => {

  switch (window.location.pathname) {
    case "/":
      component = <Login {...props} />;
      break;
    case "/callback":
      component = <Callback />;
      break;
    case "/home":
       component = props.auth.isAuthenticated()? <HomePage {...props}/> :<ErrorPage /> ;
      break;
    default:
      component = <ErrorPage />;
  }
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        {component}
        {/* <HomePage></HomePage> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
