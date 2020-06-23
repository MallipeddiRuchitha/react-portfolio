import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { makeStyles } from "@material-ui/core/styles";
import { TextField ,Input} from "@material-ui/core";

const useStyles=makeStyles((theme) =>({
 
  styleInputFields :{
    
    //border: '1px solid white',
    
    //cursor: 'pointer',
    //outline: 'none',
    marginRight: '20px',
    //marginTop:'20px',
    
  },
  
}));


const InputField = () => {
  const classes=useStyles();
  //console.log(text);
return(
    <div className={classes.styleInputFields}>
        {/* <TextField  defaultValue="Hello World" style={{}}/> */}
         <Input  inputProps={{ 'aria-label': 'description' }} style={{color:"#000"}} /> 
            </div>
     
);
};

export default InputField;
