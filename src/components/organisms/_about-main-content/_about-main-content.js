import React from 'react';

import Name from '../../atoms/_name/_name'
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider,Typography } from "@material-ui/core";
const useStyles=makeStyles((theme) =>({
 
    styleHeaderElement :{     
      
      height:'1000PX',
      //marginTop:'400px',
      //backgroundImage: 'URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)',
      backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    },
    about:{
      color:"black",
      //alignItems:"center",
      paddingTop:"40px",
      //display:"flex",
      paddingLeft:"250px",
      paddingRight:"250px",
       fontSize:"25px",
    },
    skills:{
      paddingTop:"0px",
      height:"250px",
      width:"400px",
      border: '1px solid black',
    margin:"70px",
    textAlign:"center",

    },
    list:{
      display:"flex",
justifyContent:"center",
    },
    heading:{

backgroundColor:"#000",
    }
    
  }));
  
const HeaderMainContent = () => 
{  const classes=useStyles();
    return(
    <div className={classes.styleHeaderElement}>
      <Typography variant="subtitle2"className={classes.about} >
      I am Ruchitha from Keshav Memorial Institute of Technology.I'm passionate about coding and learning new technologies.In free time I like to chill at home watching movies and colouring .I love to be surrounded by positive and motivating people. 
      </Typography>
      <div className={classes.list}>
        <div className={classes.skills}>
          <Typography variant="subtitle1" className={classes.heading}> Technical Skills</Typography>
        <Typography >
       Java
    </Typography>
    <Typography>
    DBMS</Typography>
    <Typography>Spring</Typography>
    <Typography> Spring boot</Typography>
    <Typography>REST</Typography>
    <Typography> Networking</Typography>
    <Typography>Linux</Typography>
    <Typography>HTML,CSS</Typography>
    
   

</div>
<div className={classes.skills}>
<Typography variant="subtitle1" className={classes.heading}>Projects</Typography>
        <Typography  >

    Gate Pass Management System </Typography>
    <Typography>Making Data Based Decisions Using Google Analytics</Typography>
    
    <Typography> Online Doctor Appointment</Typography>
   
    <Typography> Spring boot REST API which gives information about movies and associated actors</Typography>
   
    <Typography> Spring boot application which gives information about courses and related topics</Typography>
   

       
        </div>
        </div>
<Name />
</div>
);
}

export default HeaderMainContent;