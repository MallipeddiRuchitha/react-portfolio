import React from 'react';
import { shallow ,mount} from 'enzyme';
import HomePage from './home-page';
import { BrowserRouter } from 'react-router-dom';

describe("HomePage component",() =>{
    test("Matches the snapshot",() => {
        const homePage = shallow(< HomePage/>);
        expect(homePage).toMatchSnapshot();
    })
    test("HomePage element is rendered",() => {
        const homePage = shallow(< HomePage/>);
        expect(homePage.find('#homePage').exists()).toEqual(true);
    });
   
   
   

});