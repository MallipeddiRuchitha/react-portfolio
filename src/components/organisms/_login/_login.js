import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
import Button from "../../atoms/_button/_button";
import { myTheme } from "../../../theme";
import {store} from '../../../store';
import AuthContext from "../../../AuthContext";
const useStyles = makeStyles((theme) => ({
  forms: {
    color: "myTheme.palette.myColor.blackColor",

    paddingTop: "2%",
    paddingLeft: "48%",
    paddingRight: "50%",
  },
  input: {
    paddingTop: "10%",
  },
  styleLogin: {
    height: "92.5vh",
    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
    color: myTheme.palette.myColor.blackColor,

    paddingTop: "10%",
  },
}));

const Login = () => {
  const classes = useStyles();
  console.log(useContext(store))
  return (
    
    <div id="login" className={classes.styleLogin}>
      <Typography variant="h2" className={classes.input}>
        {Constants.LOGIN_PAGE}
      </Typography>
      <div className={classes.forms}>
        {/* <Button onClick={props.auth.login} value={Constants.LOGIN}></Button> */}
        <Button onClick={React.useContext(AuthContext).login} value={Constants.LOGIN}></Button>
      </div>
    </div>
  );
};
export default Login;
