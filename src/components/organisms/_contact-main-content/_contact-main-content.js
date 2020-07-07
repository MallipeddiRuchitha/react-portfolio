import React ,{useState,useRef}from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  FormControl,
  // Button
} from "@material-ui/core";
import Input from "../../molecules/_input/_input";
import * as Constants from "../../../constants";
import Button from "../../atoms/_button/_button";
import { myTheme } from "../../../theme";
import useForm from '../../../hooks/useForm'
const useStyles = makeStyles((theme) => ({
  styleContactMainContent: {
    height: "92.5vh",

    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",

    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  forms: {
    // border: "1px solid myTheme.palette.secondary.main",
    height: "300PX",
    width: "250px",
    backgroundColor: myTheme.palette.secondary.main,

    color: "black",

    margin: "auto",
    paddingTop: "30px",
    marginTop: "30px",
    paddingLeft: "50px",
  },
  input: {
      paddingBottom: "10px",
  },
  heading: {
    paddingTop: "50px",
  },
  error: {
    color:myTheme.palette.myColor.redColor ,
    
  },
}));

const ContactMainContent = () => {
   const classes = useStyles();
  // const [name, setName] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [message, setMessage] = useState("");
  // const [messageError, setMessageError] = useState("");
  // const [error, setError] = useState(true);





  let refName = useRef("");
  let refNameError=useRef("");
  let refEmail=useRef("");
  let refEmailError=useRef("");
  let refMessage=useRef("");
  let refMessageError=useRef("");
  let refError=useRef(false);
  
    const {  handleNameChange,
      handleEmailChange,
      handleMessageChange,
      handleClick,
      errorValues } = useForm();
  console.log("1",errorValues);
    
//   const handleNameChange=(event)=>{
//     console.log("*************",refNameError.current )
//     event.preventDefault();
//     const userName=event.target.value;
//     //setName(userName);
//     var namePattern = /^[a-zA-Z]+/;
//     if (userName === "" || userName === null){
//       // setNameError(Constants.INVALID_NAME);
//       // setError(true);
//       refNameError.current=Constants.INVALID_NAME;
//       refError.current=true;
      
//     } 
//      else if (!namePattern.test(userName)){
//       // setNameError(Constants.INVALID_NAME);
//       // setError(true);
//       refNameError.current=Constants.INVALID_NAME;
//       refError.current=true;

//     }
//     else 
//     {
//       // setNameError("");
//       refNameError.current="";
//       //if(nameError===""&&emailError===""&&messageError===""&&email.length>0&&message.length>0)
//       // setError(false);
//       if(refNameError.current===""&&refEmailError.current===""&&refMessageError.current===""&&refEmail.current.length>0&&refMessage.current.length>0)
//       refError.current=false;


//   }
//   }
//   const handleEmailChange=(event)=>{
//     event.preventDefault();
//     const userEmail=event.target.value;
//     //setEmail(userEmail);

//     var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (userEmail === "" || userEmail === null){
//       //setEmailError(Constants.INVALID_EMAIL);
//       //setError(true);
// refEmailError.current=Constants.INVALID_EMAIL;
//  refError.current=true;
//     }
//     else if (!emailPattern.test(userEmail)){
//       // setEmailError(Constants.INVALID_EMAIL);
//       // setError(true);
//       refEmailError.current=Constants.INVALID_EMAIL;
//  refError.current=true;
//     }
//     else {
//       //setEmailError("");
//       refEmailError.current="";
//       if(refNameError.current===""&&refEmailError.current===""&&refMessageError.current===""&&refName.current.length>0&&refMessage.current.length>0)
//       //setError(false);
//       refError.current=false;
//     }

//   }
//   const handleMessageChange=(event)=>{
//     event.preventDefault();
//     const userMessage=(event.target.value);
//     //setMessage(userMessage);
//     if (userMessage === "" || userMessage === null){
    
//     // setMessageError(Constants.INVALID_MESSAGE);
//     // setError(true);
//     refMessageError.current=Constants.INVALID_MESSAGE;
//     refError.current=true;
//   }
//   else {
//     //setMessageError("");
//     refMessageError.current="";
//   if(refNameError.current===""&&refEmailError.current===""&&refMessageError.current===""&&refEmail.current.length>0&&refName.current.length>0)
//   //setError(false);
//   refError.current=false;
//     }
//   }
  
//   const handleClick = (event) => {
//         event.preventDefault();

  

   
//   }
//   return (
    
//     <div className={classes.styleContactMainContent} data-testid="contact">
     
//       <Typography variant="h3" className={classes.heading}>
//         {Constants.CONNECT}
//       </Typography>

//       <div className={classes.forms}>
//         <form>
//           <div className={classes.input}>
//             <Input label={Constants.NAME_LABEL} value="name" onChange={handleNameChange} ></Input>
//           </div>
//           <Typography className={classes.error} data-testid="nameError">
//             {refNameError.current !== "" && refNameError.current}
//           </Typography>
//           <div className={classes.input}>
//             <Input label={Constants.EMAIL_LABEL} value="email" onChange={handleEmailChange}></Input>
//           </div>
//           <Typography className={classes.error} data-testid="emailError">
//             {refEmailError.current !== "" && refEmailError.current}
//           </Typography>
//           <div className={classes.input}>
//             <Input label={Constants.MESSAGE_LABEL} value="message" onChange={handleMessageChange}></Input>
//           </div>
//           <Typography className={classes.error} data-testid="messageError">
//             {refMessageError.current !== "" && refMessageError.current}
//           </Typography>
//           <Button value={Constants.SUBMIT} onClick={handleClick} disabled={error ? true : false}></Button>
//         </form>
//       </div>
//     </div>
//   );

return (
  <div className={classes.styleContactMainContent} data-testid="contact">
    <Typography variant="h3" className={classes.heading}>
      {Constants.CONNECT}
    </Typography>

    <div className={classes.forms}>
      <form>
        <div className={classes.input}>
          <Input label={Constants.NAME_LABEL} value="" onChange={handleNameChange}></Input>
        </div>
        <Typography className={classes.error}>
          {errorValues.nameError !== "" && errorValues.nameError}
        </Typography>
        <div className={classes.input}>
          <Input label={Constants.EMAIL_LABEL} value="" onChange={handleEmailChange}></Input>
        </div>
        <Typography className={classes.error}>
          {errorValues.emailError !== "" && errorValues.emailError}
        </Typography>
        <div className={classes.input}>
          <Input label={Constants.MESSAGE_LABEL} value="" onChange={handleMessageChange}></Input>
        </div>
        <Typography className={classes.error}>
          {errorValues.messageError !== "" && errorValues.messageError}
        </Typography>
        <Button value={Constants.SUBMIT} onClick={handleClick} disabled={errorValues.error ? true : false}></Button>
      </form>
    </div>
  </div>
);

};

export default ContactMainContent;
