import React from 'react';
import { shallow ,mount} from 'enzyme';
import Header from './_header';
import {withRouter,BrowserRouter as Router} from 'react-router-dom';
import HeaderElement from "../../atoms/_header-element/_header-element";
describe("Header component",() =>{
    test("Matches the snapshot",() => {
        const header = shallow(<Router><Header /></Router>);
        expect(header).toMatchSnapshot();

    })
    test("header element is rendered",() => {
        const header = mount(<Router><Header /></Router>);
        expect(header.find("#header").exists()).toEqual(true);
        
    });
    test(" 5 header elements  should be there", () => {
        const header = mount(<Router><Header /></Router>);
        expect(header.find(HeaderElement).length).toEqual(5);

      });
   

});