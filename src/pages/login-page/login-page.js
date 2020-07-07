import React from "react";
import Login from "../../components/molecules/_login/_login";
import * as Constants from "../../constants";
import LoginTemplate from "../../components/templates/_login-template/_login-template";
function LoginPage(props) {
  return (
    <div data-testid="loginPage"> 
     
      <LoginTemplate content={ <Login {...props} />}></LoginTemplate>
    </div>
  );
}
export default LoginPage;
