import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as Constants from "../../../constants";
import Input from "../../atoms/_input-field/_input-field";
import Button from "../../atoms/_button/_button";
import { myTheme } from "../../../theme";
import {
  Typography,
  FormControl,
  // Button
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  form: {
    paddingTop: "10px",
    paddingBottom: "20px",

    display: "flex",
  },
  name: {
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "10px",
  },
  error: {
    color:myTheme.palette.myColor.redColor ,
    
  },
}));

const EditImageForm = ({ name, handleChangeInName, handleSubmit,nameError}) => {
  const classes = useStyles();
  console.log(name);

  return (
    <form className={classes.form} data-testid="editImageForm">
      <Input
        value={name}
        className={classes.name}
        style={{ color: myTheme.palette.secondary.main }}
        onChange={handleChangeInName}        
      ></Input>
      <Typography className={classes.error}>
            {nameError !== "" && nameError}
          </Typography>
      <Button
        onClick={handleSubmit}
        value={Constants.SAVE}
        style={{ marginLeft: "-10px" }}
        disabled={nameError.length>1 ? true : false}
      ></Button>
    </form>
  );
};
export default EditImageForm;
