import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
const useStyles = makeStyles((theme) => ({
  aboutMainContent: {
    height: "1000PX",
    //marginTop:'400px',
    //backgroundImage: 'URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)',
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  about: {
    color: "black",
    //alignItems:"center",
    paddingTop: "40px",
    //display:"flex",
    paddingLeft: "250px",
    paddingRight: "250px",
    fontSize: "25px",
  },
  skills: {
    paddingTop: "0px",
    height: "270px",
    width: "400px",
    border: "1px solid black",
    margin: "70px",
    textAlign: "center",
  },
  list: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    backgroundColor: "#000",
  },
}));

const AboutMainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutMainContent}>
      <Typography variant="subtitle2" className={classes.about}>
        {Constants.ABOUT_ME}
        {/* I am Ruchitha from Keshav Memorial Institute of Technology.I'm passionate about coding and learning new technologies.In free time I like to chill at home watching movies and colouring .I love to be surrounded by positive and motivating people.  */}
      </Typography>
      <div className={classes.list}>
        <div className={classes.skills}>
          <Typography variant="subtitle1" className={classes.heading}>
            {" "}
            {Constants.TECHNICAL_SKILLS}
          </Typography>
          <Typography>{Constants.JAVA}</Typography>
          <Typography>{Constants.DBMS}</Typography>
          <Typography>{Constants.REACT}</Typography>
          <Typography>{Constants.SPRING}</Typography>
          <Typography> {Constants.SPRING_BOOT}</Typography>
          <Typography>{Constants.REST}</Typography>
          <Typography> {Constants.NETWORKING}</Typography>
          <Typography>{Constants.LINUX}</Typography>
          <Typography>{Constants.HTML_CSS}</Typography>
        </div>
        <div className={classes.skills}>
          <Typography variant="subtitle1" className={classes.heading}>
            {Constants.PROJECTS}
          </Typography>
          <Typography>{Constants.DETECTION_PREDICTION_CLOUDS}</Typography>
          <Typography>{Constants.GATE_PASS_MANAGEMENT_SYSTEM}</Typography>
          <Typography>
            {Constants.MAKING_DATA_BASED_DESCIONS_USING_GOOGLE_ANALYTICS}
          </Typography>

          <Typography>{Constants.ONLINE_DOCTOR_APPOINTMENT}</Typography>

          <Typography>{Constants.SPRING_BOOT_REST_API_MOVIES}</Typography>

          <Typography> {Constants.COURSES_PROJECT}</Typography>
        </div>
      </div>
    </div>
  );
};

export default AboutMainContent;
