import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as Constants from "../../../constants";

import Input from "../../molecules/_input/_input";
import Button from "../../atoms/_button/_button";
import { Typography } from "@material-ui/core";
import { myTheme } from "../../../theme";
const useStyles = makeStyles((theme) => ({
  form: {
    
    height: "300PX",
    width: "250px",
    backgroundColor: myTheme.palette.secondary.main,

    color: myTheme.palette.myColor.blackColor,

    margin: "auto",
    paddingTop: "30px",
    marginTop: "30px",
    paddingLeft: "50px",
  },
  input: {
      paddingBottom: "20px",
  },
  heading: {
    paddingTop: "50px",
  },
  error: {
    color:myTheme.palette.myColor.redColor ,
    
  },
}));

const AddImageForm = ({
  handleNameChange,
  handleURLChange,
  handleAddClick,
  nameError,
  error,
  urlError,
}) => {
  const classes = useStyles();
  return (
    <div data-testid="addImageForm">
      <Typography variant="h3" className={classes.heading}>
        {Constants.ADD_IMAGE}
      </Typography>
      <form className={classes.form}>
        <div className={classes.input}>
          <Input
            label={Constants.NAME_LABEL}
            onChange={handleNameChange}
            value="name"
          ></Input>
           <Typography className={classes.error} >
            {nameError !== "" && nameError}
          </Typography>
        </div>
        <div className={classes.input}>
          <Input
            label={Constants.URL_LABEL}
            onChange={handleURLChange}
            value="url"
          ></Input>
 <Typography className={classes.error}>
            {urlError !== "" && urlError}
          </Typography>
        </div>

        <Button
          onClick={handleAddClick}
          value={Constants.ADD}
          style={{ margin: "20px 50%" }
        }
        disabled={error ? true : false}
        />
      </form>
    </div>
  );
};
export default AddImageForm;
