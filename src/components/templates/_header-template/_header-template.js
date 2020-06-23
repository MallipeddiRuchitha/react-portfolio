import React from 'react';


import Header from '../../organisms/_header/_header'

import { ThemeProvider } from "@material-ui/core";
const HeaderTemplate = ({header,mainContent}) => 
{  return(
    <>
    {header}
    {mainContent}
    </>

);
}

export default HeaderTemplate;