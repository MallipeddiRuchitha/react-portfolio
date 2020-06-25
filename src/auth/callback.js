import React, { useEffect } from 'react';
import Auth from "./Auth";

function Callback() {
    console.log("inside callback");
    useEffect(()=>{
        console.log("inside callback");
        const auth = new Auth();
        auth.handleAuthentication();
    } )

    return(
        <div>
            <h1>Loading</h1>
        </div>
    )
}
export default Callback;