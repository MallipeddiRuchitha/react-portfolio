import React, { useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  FormControl,
  // Button
} from "@material-ui/core";
import Input from "../../molecules/_input/_input";
import * as Constants from "../../../constants";
import Button from "../../atoms/_button/_button";
import { myTheme } from "../../../theme";
import useForm from '../../../hooks/useForm'
const useStyles = makeStyles((theme) => ({
  styleContactMainContent: {
    height: "92.5vh",

    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",

    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  forms: {
    // border: "1px solid myTheme.palette.secondary.main",
    height: "300PX",
    width: "250px",
    backgroundColor: myTheme.palette.secondary.main,

    color: "black",

    margin: "auto",
    paddingTop: "30px",
    marginTop: "30px",
    paddingLeft: "50px",
  },
  input: {
    paddingBottom: "10px",
  },
  heading: {
    paddingTop: "50px",
  },
  error: {
    color: myTheme.palette.myColor.redColor,

  },
}));

const ContactMainContent = () => {
  const classes = useStyles();
  let refName = useRef("");
  let refNameError = useRef("");
  let refEmail = useRef("");
  let refEmailError = useRef("");
  let refMessage = useRef("");
  let refMessageError = useRef("");
  let refError = useRef(false);

  const { handleNameChange,
    handleEmailChange,
    handleMessageChange,
    handleClick,
    errorValues } = useForm();
  console.log("1", errorValues);



  return (
    <div className={classes.styleContactMainContent} id="contact">
      <Typography variant="h3" className={classes.heading}>
        {Constants.CONNECT}
      </Typography>

      <div className={classes.forms}>
        <form>
          <div className={classes.input}>
            <Input label={Constants.NAME_LABEL} value="" onChange={handleNameChange}></Input>
          </div>
          <Typography className={classes.error}>
            {errorValues.nameError !== "" && errorValues.nameError}
          </Typography>
          <div className={classes.input}>
            <Input label={Constants.EMAIL_LABEL} value="" onChange={handleEmailChange}></Input>
          </div>
          <Typography className={classes.error} id="emailError">
            {errorValues.emailError !== "" && errorValues.emailError}
          </Typography>
          <div className={classes.input}>
            <Input label={Constants.MESSAGE_LABEL} value="" onChange={handleMessageChange}></Input>
          </div>
          <Typography className={classes.error}>
            {errorValues.messageError !== "" && errorValues.messageError}
          </Typography>
          <Button value={Constants.SUBMIT} onClick={handleClick} disabled={errorValues.error ? true : false}></Button>
        </form>
      </div>
    </div>
  );

};

export default ContactMainContent;
