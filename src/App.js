import React,{useContext} from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "../src/pages/home-page/home-page";
import { myTheme } from "../src/theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/login-page/login-page";
import ErrorPage from "./pages/error-page/error-page";
import Callback from "./auth/callback"
import {store} from '../src/store';
import AuthContext from './AuthContext';
import Auth from './auth/Auth';
let component = "";


const App = () => {
 const auth=new Auth();
  switch (window.location.pathname) {
    case "/":
      component = <Login />;
      break;
    case "/callback":
      component = <Callback />;
      break;
    case "/home":
      //component = useContext(store).isAuthenticated()? <HomePage {...props}/> :<ErrorPage /> ; 
    component = auth.isAuthenticated()? <HomePage /> :<ErrorPage /> ;
      break;
    default:
      component = <ErrorPage />;
  }
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
      <AuthContext.Provider value={auth}>
        {component}
       </AuthContext.Provider>
        {/* <HomePage></HomePage> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
