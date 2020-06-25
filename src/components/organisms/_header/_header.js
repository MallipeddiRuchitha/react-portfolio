import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import HeaderElement from "../../atoms/_header-element/_header-element";
import { Button } from "@material-ui/core";
import * as Constants from "../../../constants";
import { Link } from "react-router-dom";
import { myTheme } from "../../../theme";
import Auth from "../../../auth/Auth";

const useStyles = makeStyles((theme) => ({
  styleHeader: {
    outline: "none",
    display: "flex",
    justifyContent: "center",

    height: "70px",

    //backgroundColor: "#3a456b",
    backgroundColor: myTheme.palette.primary.main,

  },
  styleLink: {
    textTransform: "none",
  },
}));

const Header = () => {
  const classes = useStyles();
  let auth=new Auth();
  return (
    <>
      <div className={classes.styleHeader}>
        <Link to="/home" className={classes.styleLink}>
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
        <Link to="/gallery-admin" className={classes.link}>
          <HeaderElement text={Constants.GALLERY_ADMIN}></HeaderElement>
        </Link>
        <Button onClick={auth.logout}>logout</Button>
      </div>
    </>
  );
};

export default Header;
