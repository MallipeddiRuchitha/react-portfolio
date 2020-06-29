import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
import Button from "../_button/_button";

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
}));

const Login = (props) => {
  const classes = useStyles();
  return (
    <div  data-testid="login">
      <Typography variant="h2" className={classes.input}>
        {Constants.LOGIN_PAGE}
      </Typography>
      <div className={classes.forms}>
        <Button onClick={props.auth.login} value={Constants.LOGIN}></Button>
      </div>
    </div>
  );
};
export default Login;
