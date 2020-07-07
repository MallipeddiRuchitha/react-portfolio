import React from 'react';
import Error from "../../components/molecules/_error/_error";
import LoginTemplate from "../../components/templates/_login-template/_login-template";
const ErrorPage=()=> {
    return(
        <div data-testId="errorPage">
    <LoginTemplate content={<Error/>}></LoginTemplate>
    </div> 
    );
    
}
export default ErrorPage;
 