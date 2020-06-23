import React from "react";

import Name from "../../atoms/_name/_name";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  styleHeaderElement: {
    height: "92.5vh",

    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  picture: {
    backgroundImage:
      "URL(https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg)",
    backgroundSize: "cover",
    width: "200px",
    height: "200px",
    marginTop: "50px",

    marginLeft: "auto",

    marginRight: "auto",
  },
}));

const HeaderMainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.styleHeaderElement}>
      <Name />
      <Typography variant="subtitle1">Full Stack Developer Intern</Typography>
      <div className={classes.picture}></div>
    </div>
  );
};

export default HeaderMainContent;
