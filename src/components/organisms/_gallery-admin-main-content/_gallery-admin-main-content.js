import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Images from "../../../images.json";
import ImageCard from "../_image-card/_image-card";
import Input from "../../molecules/_input/_input";
import * as Constants from "../../../constants";
import Button from "../../molecules/_button/_button";
import AddImageForm from "../../molecules/_add-image-form/_add-image-form";
import { myTheme } from "../../../theme";
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
  const [images, setImages] = useState([...Images.images]);
  const [isAdd, setIsAdd] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const classes = useStyles();
  const [nameError, setNameError] = useState("");
 
  const [urlError, setUrlError] = useState("");
  const [error, setError] = useState(true);
  const handleEdit = (index, name) => {
    console.log("edit", name);
    let tempImgArr = [...images];
    let position = tempImgArr.indexOf(Images.images[index - 1]);
    tempImgArr[position].name = name;
    setImages(tempImgArr);
  };
  const handleDelete = (index) => {
    console.log("del", index);
    let tempImgArr = [...images];
    let position = tempImgArr.indexOf(Images.images[index - 1]);
    tempImgArr.splice(position, 1);
    console.log(images);
    setImages(tempImgArr);
  };
  const handleNameChange = (event) => {
    event.preventDefault();
   
    const name=event.target.value;
    setImageName(name);
    var namePattern = /^[a-zA-Z]+/;
    if (name === "" || name === null){
      setNameError(Constants.INVALID_NAME);
      setError(true);
      
    } 
     else if (!namePattern.test(name)){
      setNameError(Constants.INVALID_NAME);
      setError(true);

    }
    else 
    {
      setNameError("");
      if(nameError===""&&urlError===""&&imageURL.length>0)
      setError(false);

  }
  };
  const handleURLChange = (event) => {
    event.preventDefault();
   
    const url=event.target.value;
    setImageURL(url);
    var urlPattern = /^[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?$/;
    if (url === "" || url === null){
      setUrlError(Constants.INVALID_URL);
      setError(true);
      
    } 
     else if (!urlPattern.test(url)){
      setUrlError(Constants.INVALID_URL);
      setError(true);

    }
    else 
    {
      setUrlError("");
      if(nameError===""&&urlError===""&&imageName.length>0)
      setError(false);

  }
  };
  const handleAdd = (url, name) => {
    setIsAdd(!isAdd);
  };
  const handleAddClick = () => {
    let tempImgArr = [...images];
    let size = tempImgArr.length;
    size = size + 1;
    console.log("size", size);
    let imageObject = {
      id: size,
      name: imageName,
      url: imageURL,
    };
    console.log(imageObject);
    tempImgArr = [...images, imageObject];

    setImages(tempImgArr);
    setIsAdd(!isAdd);
  };
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
            nameError={nameError}
  error={error}
  urlError={urlError}
          ></AddImageForm>
        </>
      )}
    </div>
  );
};

export default GalleryAdminMainContent;
