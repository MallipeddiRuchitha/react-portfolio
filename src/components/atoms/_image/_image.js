import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleInputFields: {
    marginRight: "20px",
  },
  picture: {
    //backgroundImage:
      //"URL(https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg)",
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
    marginTop: "50px",

    marginLeft: "auto",

    marginRight: "auto",
   // borderRadius:"50%",
  },
}));

const Image = ({image1}) => {
  const classes = useStyles();
     
  return (
    <div className={classes.styleInputFields}>
      {/* <Input
        inputProps={{ "aria-label": "description" }}
        style={{ color: "#000" }}
      /> */}
      <div className={classes.picture} style={{backgroundImage:"URL("+image1.url+")"}}></div>
    </div>

  );
};

export default Image;
