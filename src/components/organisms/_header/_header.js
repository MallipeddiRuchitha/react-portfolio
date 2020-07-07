import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HeaderElement from "../../atoms/_header-element/_header-element";
import * as Constants from "../../../constants";
import { Link } from "react-router-dom";
import { myTheme } from "../../../theme";
import Auth from "../../../auth/Auth";
import Button from "../../atoms/_button/_button"

const useStyles = makeStyles((theme) => ({
  styleHeader: {
    outline: "none",
    display: "flex",
    justifyContent: "center",

    height: "70px",

    //backgroundColor: "#3a456b",
    backgroundColor: myTheme.palette.primary.main,

  },
  link: {
    textDecoration: "none",
  },
  button:{
    paddingLeft:"100px",
    paddingTop:"20px",
  }
}));

const Header = () => {
  const classes = useStyles();
  let auth=new Auth();
  return (
    <>
      <div className={classes.styleHeader} data-testid="header">
        <Link to="/home" className={classes.link}>
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
        <div className={classes.button}>
        <Button onClick={auth.logout} value={Constants.LOGOUT} ></Button>
        </div>
      </div>
    </>
  );
};

export default Header;
