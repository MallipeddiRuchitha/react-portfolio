import React from 'react';



const HeaderTemplate = ({header,mainContent}) => 
{  return(
    <div data-testid="headerTemplate">
    {header}
    {mainContent}
    </div>

);
}

export default HeaderTemplate;