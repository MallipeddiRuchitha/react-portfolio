import React from "react";
import Login from "../../components/organisms/_login/_login";
import * as Constants from "../../constants";
import LoginTemplate from "../../components/templates/_login-template/_login-template";
function LoginPage() {
  return (
    <div id="loginPage"> 
     
      <LoginTemplate content={ <Login />}></LoginTemplate>
    </div>
  );
}
export default LoginPage;
