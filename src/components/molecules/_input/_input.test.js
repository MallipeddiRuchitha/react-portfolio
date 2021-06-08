import React from 'react';
import { shallow ,mount} from 'enzyme';
import Input from './_input';
const mockOnChange = jest.fn();
const value="";
const label="name";
describe("Input component",() =>{
    test("Matches the snapshot",() => {
        const input = shallow(<Input onChange={mockOnChange} label={label} value={value}/>);
        expect(input).toMatchSnapshot();

    })
    test("input element is rendered",() => {
        const input = shallow(<Input onChange={mockOnChange} label={label} value={value}/>);
        expect(input.find("#input").exists()).toEqual(true);
        
    });
   
   
   

});