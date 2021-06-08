import React from 'react';



const HeaderTemplate = ({header,mainContent}) => 
{  return(
    <div id="headerTemplate">
    {header}
    {mainContent}
    </div>

);
}

export default HeaderTemplate;