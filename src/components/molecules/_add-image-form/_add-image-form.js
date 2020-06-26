import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as Constants from "../../../constants";

import Input from "../../molecules/_input/_input";
import Button from "../../molecules/_button/_button";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  form: {
    // border: "1px solid white",
    // height: "300PX",
    // width: "250px",
    // backgroundColor: "white",

    // color: "black",

    // margin: "auto",
    // paddingTop: "20px",
    // paddingLeft: "50px",
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
    paddingBottom: "20px",
  },
  heading: {
    paddingTop: "50px",
  },
}));

const AddImageForm = ({
  handleNameChange,
  handleURLChange,
  handleAddClick,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.heading}>
        {Constants.ADD_IMAGE}
      </Typography>
      <form className={classes.form}>
        <div className={classes.input}>
          <Input
            label={Constants.NAME_LABEL}
            onChange={handleNameChange}
            value=""
          ></Input>
        </div>
        <div className={classes.input}>
          <Input
            label={Constants.URL_LABEL}
            onChange={handleURLChange}
            value=""
          ></Input>
        </div>

        <Button
          onClick={handleAddClick}
          value={Constants.ADD}
          style={{ margin: "20px 50%" }}
        />
      </form>
    </div>
  );
};
export default AddImageForm;
