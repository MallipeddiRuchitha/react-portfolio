import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  FormControl,
  // Button
} from "@material-ui/core";
//import RaisedButton from "material-ui/Button"
import Input from "../../molecules/_input/_input";
import * as Constants from "../../../constants";
import Button from "../../molecules/_button/_button";
const useStyles = makeStyles((theme) => ({
  styleContactMainContent: {
    height: "92.5vh",

    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",

    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  forms: {
    border: "1px solid white",
    height: "300PX",
    width: "250px",
    backgroundColor: "white",

    color: "black",

    margin: "auto",
    paddingTop: "30px",
    marginTop: "30px",
    paddingLeft: "50px",
  },
  input: {
    //color: "black",
    paddingBottom: "10px",
  },
  heading: {
    paddingTop: "50px",
  },
}));

const ContactMainContent = () => {
  const classes = useStyles();
  //const { RaisedButton, MuiThemeProvider } = MaterialUI;
  const handleClick = () => {};
  return (
    <div className={classes.styleContactMainContent}>
      <Typography variant="h3" className={classes.heading}>
        {Constants.CONNECT}
      </Typography>

      <div className={classes.forms}>
        <form>
          <div className={classes.input}>
            <Input label={Constants.NAME_LABEL} value=""></Input>
          </div>
          <div className={classes.input}>
            <Input label={Constants.EMAIL_LABEL} value=""></Input>
          </div>
          <div className={classes.input}>
            <Input label={Constants.MESSAGE_LABEL} value=""></Input>
          </div>

          <Button value={Constants.SUBMIT} onClick={handleClick}></Button>
        </form>
      </div>
    </div>
  );
};

export default ContactMainContent;
