import React from 'react';
import { shallow ,mount} from 'enzyme';
import About from './_about-main-content';

describe("About component",() =>{
    test("Matches the snapshot",() => {
        const about = shallow(<About />);
        expect(about).toMatchSnapshot();

    })
    test("about element is rendered",() => {
        const about= shallow(<About />);
        expect(about.find("#aboutMainContent").exists()).toEqual(true);
        console.log(about.debug());
    });
   
   

});