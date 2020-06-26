import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";


export const myTheme = createMuiTheme({
  
    palette: {
    primary: {
      //   main: purple[500],   Colors need to be imported
      main: "#3a456b", // We can directly give colors in # without importing.
    },
    secondary: {
      main: "#ffa500",
    },
    myColor: {
        redColor: '#f10e41',
        blackColor:"#000",
        greenColor:"#3bb7ab",

    },

    status : {
        danger: purple[500],
    },
     error: {
        main: '#000',
        light: '#000',
        dark: '#000',
        contrastText: '#000',
      },
      divider: '#000',
      action: {
        active: '#000',
        hover: '#000',
        selected: '#000',
        disabled: '#000',
        disabledBackground: '#000',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ff9800',
        disabled: '#000',
        hint: '#000',
        icon: '#000',
      },
      common: {
        black: '#000000',
        white: '#ffffff',
      },
      background: {
        default: '#cde2cd',
        paper: '#000',
      },
   
  },
  typography: {
     
    
    
    h2: {
        fontSize: "40px",
        textAlign: "center",
        color: "#FFF",
        fontStyle: "bold",
        fontFamily: "poppins",
        //fontWeight:"70px",
        //fontWeight:"800px",
      },
      h3: {
        fontSize: "30px",
        textAlign: "center",
        color: "#fff",
        fontStyle: "bold",
        fontFamily: "poppins",
        fontWeight:"10px",
      },
   h4:{
    fontSize: "25px",
    textAlign: "center",
    color: "#fff",
    fontStyle: "bold",
    fontFamily: "poppins",
    fontWeight:"10px",
   },
      h5: {
        fontSize: "19px",
        textAlign: "left",
        color: "#000",
        fontStyle: "bold",
        fontFamily: "poppins",
        //fontWeight:"10px",
      },
  //  subtitle1:{
  //   fontSize: "30px",
  //   textAlign: "center",
  //   color: "#fff",
  //   fontStyle: "bold",
  //   fontFamily: "poppins",
  //  },
  //  subtitle2:{
  //   fontSize: "30px",
  //   textAlign: "center",
  //   color: "#000",
  //   fontStyle: "bold",
  //   fontFamily: "poppins",
  //  }
  button:{
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    fontStyle: "bold",
    fontFamily: "poppins",
    fontWeight:"10px",
   },
  },
});


  