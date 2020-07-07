import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import ImageCard from "../_image-card/_image-card";
import Input from "../../molecules/_input/_input";
import * as Constants from "../../../constants";
import Button from "../../atoms/_button/_button";
import AddImageForm from "../../molecules/_add-image-form/_add-image-form";
import { myTheme } from "../../../theme";
import useGalleryAdminHook from "../../../hooks/useGalleryAdminHook";
const useStyles = makeStyles((theme) => ({
  styleGalleryAdminMainContent: {
    height: "auto",
    minHeight: "92.5vh",
    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  styleGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  forms: {
    border: "1px solid myTheme.palette.secondary.main",
    height: "300PX",
    width: "250px",
    backgroundColor: "myTheme.palette.secondary.main",

    color: "myTheme.palette.myColor.blackColor",

    margin: "auto",
    paddingTop: "20px",
    paddingLeft: "50px",
  },
  button: {
    
    paddingTop: "50px",
    paddingLeft: "30%",
    paddingBottom: "20px",
  },
  button1: {
    margin: "20px",
    marginLeft: "50px",
  },
}));

const GalleryAdminMainContent = () => {
  
  
  const classes = useStyles();
 
 const{ handleNameChange,
  handleURLChange,
  errorValues,
  handleAdd,
  handleAddClick,
  isAdd,
  handleEdit,
  handleDelete,
  images}=useGalleryAdminHook();
  const imges = images.map((img, key) => (
    <ImageCard
      key={img.id}
      image1={img}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  ));

  return (
    <div className={classes.styleGalleryAdminMainContent} data-testid="galleryAdmin">
      {!isAdd && (
        <>        
          <div className={classes.button}>
            <Button onClick={handleAdd} value={Constants.ADD}></Button>
          </div>
          <div className={classes.styleGrid}>{imges}</div>
        </>
      )}
      {isAdd && (
        <>
          <AddImageForm
            handleNameChange={handleNameChange}
            handleURLChange={handleURLChange}
            handleAddClick={handleAddClick}
           nameError={ errorValues.nameError}
  error={ errorValues.error}
  urlError={ errorValues.urlError}
          ></AddImageForm>
        </>
      )}
    </div>
  );
};

export default GalleryAdminMainContent;
