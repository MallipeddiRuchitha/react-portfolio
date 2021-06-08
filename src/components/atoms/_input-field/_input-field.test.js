import React from 'react';

import InputField from './_input-field';
import { shallow ,mount} from 'enzyme';
describe("InputField component",() =>{
    test("Matches the snapshot",() => {
        const inputField = shallow(<InputField />);
        expect(inputField).toMatchSnapshot();

    })
    test("inputField element is rendered",() => {
        const inputField = shallow(<InputField />);
        expect(inputField.find('#inputField').exists()).toEqual(true);
        
        
    });
    test("on change of input",() => {
        const mockOnChange = jest.fn();
        const inputField = shallow(<InputField value="name"  onChange={mockOnChange} test="Name"/>);        
       
        inputField.find('#Name').simulate('change',{ target: { value: 'ram' }});
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
   

});