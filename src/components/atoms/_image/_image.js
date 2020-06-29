import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  styleImage: {
    // marginRight: "20px",
  },
  picture: {
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
    marginTop: "50px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Image = ({ image }) => { 
  const classes = useStyles();

  return (
    <div className={classes.styleImage} data-testid="image">
      <div
        className={classes.picture}
        style={{ backgroundImage: "URL(" + image + ")" }}
      ></div>
    </div>
  );
};

export default Image;
