import React, { useState } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Input, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import * as Constants from "../../../constants";
import Button from "../../atoms/_button/_button";
import Image from "../../atoms/_image/_image";
import EditImageForm from "../../molecules/edit-image-form/_edit-image-form";
import { myTheme } from "../../../theme";
import useImageCardHook from "../../../hooks/useImageCardHook";
const useStyles = makeStyles((theme) => ({
  styleImageCard: {
    backgroundColor: myTheme.palette.secondary.main,
    marginBottom: "20px",
    width: "fitContent",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  picture: {
    marginTop: "-48px",
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
  icons: {
    display: "flex",
    //paddingLeft: "9%",
  },
}));

const ImageCard = ({ image1, handleDelete, handleEdit }) => {
  const classes = useStyles();
 const  {
  handleClick,
  handleSubmit,
  handleChangeInName,
  nameError,
  name,
  edit,
}=useImageCardHook({image1, handleDelete, handleEdit});
  return (
    <div className={classes.styleImageCard} data-testid="imageCard">
      <div className={classes.picture}>
        <Image image={image1.url}></Image>
      </div>
      {!edit && <Typography className={classes.name}>{image1.name}</Typography>}

      {edit && (
        <EditImageForm
          name={name}
          handleChangeInName={handleChangeInName}
          handleSubmit={handleSubmit}
          nameError={nameError}
        ></EditImageForm>
      )}
      <div className={classes.icons}>
        <EditIcon data-testid="editIcon"
          className={classes.edit}
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        ></EditIcon>
        <DeleteIcon
        data-testid="deleteIcon"
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(image1.id);
          }}
        ></DeleteIcon>
      </div>
    </div>
  );
};

export default ImageCard;
