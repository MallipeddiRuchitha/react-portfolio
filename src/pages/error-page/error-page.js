import React from 'react';
import Error from "../../components/organisms/_error/_error";
import LoginTemplate from "../../components/templates/_login-template/_login-template";
const ErrorPage=()=> {
    return(
        <div id="errorPage">
    <LoginTemplate content={<Error/>}></LoginTemplate>
    </div> 
    );
    
}
export default ErrorPage;
 