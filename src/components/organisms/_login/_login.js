import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button,Typography} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    styleMainContent: {
      height: "92.5vh",
  
      backgroundImage:
        "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
  
      backgroundRepeat: "noRepeat",
      backgroundSize: "cover",
    },
    login:{
        height: "92.5vh",
        backgroundImage:
        "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
    },
    forms: {
      //border: "1px solid white",
    //   height: "300PX",
    //   width: "250px",
    //   backgroundColor: "white",
    height: "92.5vh",
    backgroundImage:
    "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
      color: "black",
  
      //margin: "auto auto",
       paddingTop: "10%",
       paddingLeft:"50%",
      //paddingLeft: "50px",
    },
    input: {
      color: "black",
    },
    button: {
      paddingTop: "50px",
    },
  }));

const  Login=(props)=> {
    const classes = useStyles();
    return(
        
        <div className={classes.forms}>
            
            <Typography>Login Page</Typography>
            <Button onClick={props.auth.login} variant="contained" color="primary">Login</Button>
           
             
        
        </div>
    )
}
export default Login;