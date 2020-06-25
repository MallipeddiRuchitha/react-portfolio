import React, { useState } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Input, Typography, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles((theme) => ({
  styleInputFields: {
    marginRight: "20px",
    backgroundColor: "white",
    marginBottom: "20px",
    width: "48.5%",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  picture: {
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
  },
  name: {
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "10px",
  },
  edit: {
    marginRight: "5%",
    marginLeft: "40%",
  },
}));

const Image = ({ image1, handleDelete, handleEdit }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(image1.name);
  const handleClick = () => {
    setEdit(true);
  };
  const handleChangeInName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEdit(false);
    return handleEdit(image1.id, name);
  };
  if (!edit) {
    return (
      <div className={classes.styleInputFields}>
        <div
          className={classes.picture}
          style={{ backgroundImage: "URL(" + image1.url + ")" }}
        ></div>
        <Typography className={classes.name}>{image1.name}</Typography>
        <EditIcon
          className={classes.edit}
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        ></EditIcon>
        <DeleteIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(image1.id);
          }}
        ></DeleteIcon>
      </div>
    );
  } else {
    return (
      <div className={classes.styleInputFields}>
        <div
          className={classes.picture}
          style={{ backgroundImage: "URL(" + image1.url + ")" }}
        ></div>

        <form>
          <Input
            defaultValue={name}
            className={classes.name}
            style={{ color: "#000" }}
            onChange={handleChangeInName}
          ></Input>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            save
          </Button>
        </form>
        <EditIcon
          className={classes.edit}
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        ></EditIcon>
        <DeleteIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(image1.id);
          }}
        ></DeleteIcon>
      </div>
    );
  }
};

export default Image;
