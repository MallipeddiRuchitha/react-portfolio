import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
import { myTheme } from "../../../theme";
import About from "../../molecules/_about-card/_about-card";
const useStyles = makeStyles((theme) => ({
  aboutMainContent: {
    height: "1000PX",
    
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  about: {
    color: myTheme.palette.myColor.blackColor,

    paddingTop: "40px",

    paddingLeft: "250px",
    paddingRight: "250px",
    fontSize: "25px",
  },
  skills: {
    paddingTop: "0px",
    height: "270px",
    width: "400px",
    border: "1px solid " + myTheme.palette.myColor.blackColor,
    margin: "70px",
    textAlign: "center",
  },
  list: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    backgroundColor: myTheme.palette.myColor.blackColor,
    color: myTheme.palette.secondary.main,
    marginBottom: "10px",
  },
}));

const AboutMainContent = () => {
  const classes = useStyles();
  const technicalSkills = [
    Constants.JAVA,
    Constants.DBMS,
    Constants.REACT,
    Constants.SPRING,
    Constants.SPRING_BOOT,
    Constants.REST,
    Constants.NETWORKING,
    Constants.LINUX,
    Constants.HTML_CSS,
  ];
  const projects = [
    Constants.DETECTION_PREDICTION_CLOUDS,
    Constants.GATE_PASS_MANAGEMENT_SYSTEM,
    Constants.MAKING_DATA_BASED_DESCIONS_USING_GOOGLE_ANALYTICS,
    Constants.ONLINE_DOCTOR_APPOINTMENT,
    Constants.SPRING_BOOT_REST_API_MOVIES,
    Constants.COURSES_PROJECT,
  ];
  return (
    <div className={classes.aboutMainContent} data-testid="aboutMainContent">
      <Typography variant="subtitle2" className={classes.about}>
        {Constants.ABOUT_ME}
      </Typography>
      <div className={classes.list}>
        <About array={technicalSkills} heading={Constants.TECHNICAL_SKILLS} />
        <About array={projects} heading={Constants.PROJECTS} />
      </div>
    </div>
  );
};

export default AboutMainContent;
