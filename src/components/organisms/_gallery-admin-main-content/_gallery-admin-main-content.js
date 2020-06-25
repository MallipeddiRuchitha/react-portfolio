import React, { useState } from "react";

import Name from "../../atoms/_name/_name";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Button,Typography } from "@material-ui/core";
import Images from "../../../images.json";
import ImageCard from "../_image-card/_image-card";
import Input from "../../molecules/_input/_input";
import * as Constants from "../../../constants";
import Button1 from "../../atoms/_button/_button"
const useStyles = makeStyles((theme) => ({
  styleHeaderElement: {
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
    border: "1px solid white",
    height: "300PX",
    width: "250px",
    backgroundColor: "white",

    color: "black",

    margin: "auto",
    paddingTop: "20px",
    paddingLeft: "50px",
  },
  button:{
    //  marginTop:'5px',
    //   alignItems:'center',
    paddingTop: "50px",
  },
  button1:{
    margin: "20px", marginLeft: "50px"
  }
}));
const handleCheckboxCheck = () => {
  console.log("2");
  fetch("../../../images.json")
    .then((response) => {
      console.log("1", response.data.images);
    })
    .catch((err) => {
      console.log(err);
    });
};
const HeaderMainContent = () => {
  const [images, setImages] = useState([...Images.images]);
  const [isAdd, setIsAdd] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const classes = useStyles();

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
    setImageName(event.target.value);
  };
  const handleURLChange = (event) => {
    event.preventDefault();
    setImageURL(event.target.value);
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

  if (!isAdd) {
    return (
      <div className={classes.styleHeaderElement}>
        <Button onClick={handleAdd} variant="contained" color="primary" style={{ margin: "20px 50%" }}>
          Add
        </Button>
        <div className={classes.styleGrid}>{imges}</div>
      </div>
    );
  } else {
    return (
      <div className={classes.styleHeaderElement}>
           <Typography variant="subtitle2" className={classes.button}>
        Add Image
      </Typography>

        <form className={classes.forms}>
          <Input
            label={Constants.NAME_LABEL}
            onChange={handleNameChange}
          ></Input>
          <Input label={Constants.URL_LABEL} onChange={handleURLChange}></Input>
         
          {/* <Button onClick={handleAddClick} variant="contained" color="primary"  style={{ margin: "20px 30%"}}>
            Add
          </Button> */}
          <Button1 onClick={handleAddClick} value="Add" style={{ margin: "20px 50%" }} /> 
            
          
         
        </form>
      </div>
    );
  }
  
};

export default HeaderMainContent;
