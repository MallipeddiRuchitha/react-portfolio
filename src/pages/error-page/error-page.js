import React from 'react';
import Error from "../../components/molecules/_error/_error";
import LoginTemplate from "../../components/templates/_login-template/_login-template";
const ErrorPage=()=> {
    return(
    <LoginTemplate content={<Error/>}></LoginTemplate>
       
    );
    
}
export default ErrorPage;
 