import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './_input';
const mockOnChange = jest.fn();
const value="";
const label="input";
describe("Input component",() =>{
    test("Matches the snapshot",() => {
        const input = create(<Input onChange={mockOnChange} label={label} value={value}/>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("input element is rendered",() => {
        const { getByTestId, getByText } = render(<Input onChange={mockOnChange} label={label} value={value}/>);
        expect(getByTestId("input")).toBeInTheDocument();
        
    });
   
   
   

});