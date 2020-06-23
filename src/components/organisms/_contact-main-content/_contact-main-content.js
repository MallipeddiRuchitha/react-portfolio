import React from "react";

import Name from "../../atoms/_name/_name";
import { makeStyles } from "@material-ui/core/styles";
import {
  ThemeProvider,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import Input from "../../molecules/_input/_input";
import * as Constants from "../../../constants";
const useStyles = makeStyles((theme) => ({
  styleMainContent: {
    height: "92.5vh",

    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",

    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  forms: {
    border: "1px solid white",
    height: "300PX",
    width: "250px",
    backgroundColor: "white",

    color: "black",

    margin: "auto",
    marginTop: "20px",
    paddingLeft: "50px",
  },
  input: {
    color: "black",
  },
  button: {
    paddingTop: "50px",
  },
}));

const HeaderMainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.styleMainContent}>
      <Typography variant="subtitle2" className={classes.button}>
        connect with me
      </Typography>

      <div className={classes.forms}>
        <Input label={Constants.NAME_LABEL}></Input>
        <Input label={Constants.EMAIL_LABEL}></Input>
        <Input label={Constants.MESSAGE_LABEL}></Input>

        <Button
          variant="contained"
          color="primary"
          style={{ margin: "20px", marginLeft: "50px" }}
        >
          submit
        </Button>
      </div>
    </div>
  );
};

export default HeaderMainContent;
