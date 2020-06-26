import React from 'react';
import * as Constants from "../../../constants"
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
   
    styleError: {
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
      // paddingLeft:"40%",
      //paddingLeft: "50px",
    },
    inputError:{
      paddingBottom: "30px",
      color:"red",
    },
    

    link:{
      paddingLeft:"46%",
    }
    
  }));
const Error=()=> {
    const classes = useStyles();
    return(
        <div className={classes.styleError}>
            
            
           <Typography className={classes.inputError} variant="h3">{Constants.LOGIN_FIRST}</Typography>
    <a href="/" className={classes.link}> {Constants.BACK_TO_LOGIN_PAGE}</a>
        </div>
    )
}
export default Error;