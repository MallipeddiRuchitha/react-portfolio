import React, { useState } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Input, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import * as Constants from "../../../constants";
import Button from "../../molecules/_button/_button";
import Image from "../../atoms/_image/_image";
import EditImageForm from "../../molecules/edit-image-form/_edit-image-form"
const useStyles = makeStyles((theme) => ({
  styleImageCard: {
   // marginRight: "20px",
    backgroundColor: "white",
    marginBottom: "20px",
    //width: "48.6%",
    width:"57%",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  picture: {
    // backgroundSize: "cover",
    // width: "300px",
    // height: "300px",
    marginTop:"-48px",
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
  icons:{
    display:'flex',
    //justifyContent:"center",
   // paddingRight:"20px",
   paddingLeft:"9%",
  }
}));

const ImageCard = ({ image1, handleDelete, handleEdit }) => {
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
  
    return (
      <div className={classes.styleImageCard}>
       <div className={classes.picture}><Image image={image1.url}></Image></div>
       {!edit&&(
         <Typography className={classes.name}>{image1.name}</Typography>
       )}
        
        {edit&&(<EditImageForm  name={name} handleChangeInName={handleChangeInName} handleSubmit={handleSubmit}  ></EditImageForm>)}
        <div className={classes.icons}>
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
      </div>
    );
//   } else {
//     return (
//       <div className={classes.styleImageCard}>
        
//         <Image image={image1.url}></Image>

        
// <EditImageForm  name={name} handleChangeInName={handleChangeInName} handleSubmit={handleSubmit}  ></EditImageForm>
//         <EditIcon
//           className={classes.edit}
//           style={{ cursor: "pointer" }}
//           onClick={handleClick}
//         ></EditIcon>
//         <DeleteIcon
//           style={{ cursor: "pointer" }}
//           onClick={() => {
//             handleDelete(image1.id);
//           }}
//         ></DeleteIcon>
//       </div>
//     );
//   }
};

export default ImageCard;
