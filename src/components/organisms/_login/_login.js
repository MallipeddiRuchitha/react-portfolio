import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import * as Constants from "../../../constants";
import Button from "../../molecules/_button/_button"
const useStyles = makeStyles((theme) => ({
  styleLogin:{
    height: "92.5vh",
    backgroundImage:
    "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",

  },
   
    forms: {
      //border: "1px solid white",
    //   height: "300PX",
    //   width: "250px",
    //   backgroundColor: "white",
   
      color: "black",
  
      //margin: "auto auto",
       paddingTop: "2%",
       paddingLeft:"48%",
       paddingRight:"50%",
      //paddingLeft: "50px",
    },
    input: {
      paddingTop:"10%",
    },
    
  }));

const  Login=(props)=> {
    const classes = useStyles();
    return(
      
      <div className={classes.styleLogin}>
        
         <Typography variant="h2" className={classes.input}>{Constants.LOGIN_PAGE}</Typography>   
         <div className={classes.forms}>
    <Button onClick={props.auth.login} value={Constants.LOGIN}></Button>
        
           
    </div>
        </div>
    )
}
export default Login;