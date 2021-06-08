import React from 'react';
import { shallow ,mount} from 'enzyme';
import LoginTemplate from './_login-template';
const mockOnChange = jest.fn();
describe("LoginTemplate component",() =>{
    test("Matches the snapshot",() => {
        const loginTemplate = shallow(< LoginTemplate/>);
        expect(loginTemplate).toMatchSnapshot();


    })
    test("LoginTemplate element is rendered",() => {
        const loginTemplate = shallow(< LoginTemplate/>);
        expect(loginTemplate.find('#loginTemplate').exists()).toEqual(true);
        
    });
   
   
   

});