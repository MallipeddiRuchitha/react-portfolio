import React from "react";
import Login from "../../components/organisms/_login/_login";
function LoginPage(props) {
    
    return(
        <div>
            <h2>Login Page</h2>
            {/* <hr></hr>
            HomePage< a href="/home">click here</a>
            <br></br>
        //     <button onClick={props.auth.login}>Loginn</button> */}
        <Login {...props}/> 
             
        </div>
    )
}
export default LoginPage;