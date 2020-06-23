import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import HeaderElement from "../../atoms/_header-element/_header-element";
import * as Constants from "../../../constants";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  styleHeader: {
    outline: "none",
    display: "flex",
    justifyContent: "center",

    height: "70px",

    backgroundColor: "#3a456b",
  },
  styleLink: {
    textTransform: "none",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.styleHeader}>
        <Link to="/" className={classes.styleLink}>
          <HeaderElement text={Constants.HOME}></HeaderElement>
        </Link>

        <Link to="/gallery" className={classes.link}>
          <HeaderElement text={Constants.GALLERY}></HeaderElement>
        </Link>
        <Link to="/contact" className={classes.link}>
          <HeaderElement text={Constants.CONTACT}></HeaderElement>
        </Link>
        <Link to="/about" className={classes.link}>
          <HeaderElement text={Constants.ABOUT}></HeaderElement>
        </Link>
      </div>
    </>
  );
};

export default Header;
