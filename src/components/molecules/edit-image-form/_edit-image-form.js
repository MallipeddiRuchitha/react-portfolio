import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as Constants from "../../../constants";
import Input from "../../atoms/_input-field/_input-field";
import Button from "../../molecules/_button/_button";

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
}));

const EditImageForm = ({ name, handleChangeInName, handleSubmit }) => {
  const classes = useStyles();
  console.log(name);
  return (
    <form className={classes.form}>
      <Input
        value={name}
        className={classes.name}
        style={{ color: "#000" }}
        onChange={handleChangeInName}
      ></Input>
      <Button
        onClick={handleSubmit}
        value={Constants.SAVE}
        style={{ marginLeft: "-10px" }}
      ></Button>
    </form>
  );
};
export default EditImageForm;
