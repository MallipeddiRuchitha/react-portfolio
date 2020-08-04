import React from 'react';
import { shallow ,mount} from 'enzyme';
import HeaderTemplate from "./_header-template"
const mockOnChange = jest.fn();
describe("HeaderTemplate component",() =>{
    test("Matches the snapshot",() => {
        const headerTemplate =shallow(< HeaderTemplate/>);
        expect(headerTemplate).toMatchSnapshot();

    })
    test("HeaderTemplate element is rendered",() => {
        const headerTemplate = shallow(< HeaderTemplate/>);
        expect(headerTemplate.find('#headerTemplate').exists()).toEqual(true);
        
        
    });
   
   
   

});