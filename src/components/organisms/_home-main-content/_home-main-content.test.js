import React from 'react';
import { shallow ,mount} from 'enzyme';
import HomeMainContent from './_home-main-content';

describe(" HomeMainContent component",() =>{
    test("Matches the snapshot",() => {
        const home= shallow(< HomeMainContent/>);
        expect(HTMLOListElement).toMatchSnapshot();

    })
    test("GalleryAdmmin is rendered",() => {
        const home= shallow(< HomeMainContent/>);
        
        expect(home.find('#home').exists()).toEqual(true);
    });
   
   
   

});