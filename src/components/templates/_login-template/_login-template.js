import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { myTheme } from "../../../theme";
const useStyles = makeStyles((theme) => ({
styleLogin: {
    height: "92.5vh",
    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
    color: myTheme.palette.myColor.blackColor,

    paddingTop: "10%",
  },
}));

const LoginTemplate = ({content}) => 
{  const classes = useStyles();
    return(   
    <div className={classes.styleLogin}> {content}</div>
   
   

);
}

export default LoginTemplate;