import React from 'react';
import { shallow ,mount} from 'enzyme';
import HeaderElement from './_header-element';

describe("HeaderElement component",() =>{
    test("Matches the snapshot",() => {
        
        const headerElement = shallow(<HeaderElement />);
        expect(headerElement).toMatchSnapshot();

    })
    test("header element is rendered",() => {
        const wrapper = shallow(<HeaderElement />);
        expect(wrapper.find('#headerElement').exists()).toEqual(true);
        
    });
    

});