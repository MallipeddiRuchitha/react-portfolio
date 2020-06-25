import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { myTheme } from "../../../theme";
const useStyles=makeStyles((theme) =>({
  
}));


const Button1 = ({ value,onClick}) => {
  const classes=useStyles();
  

return(<div>
      <Button        
        onClick={onClick}         
        variant="contained"        
        color="primary"
      >
        <Typography> {value}</Typography>
      </Button>
    </div>
);
};

export default Button1;
