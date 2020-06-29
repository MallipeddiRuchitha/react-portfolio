import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './_input';

describe("Input component",() =>{
    test("Matches the snapshot",() => {
        const input = create(<Input />);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("input element is rendered",() => {
        const { getByTestId, getByText } = render(<Input />);
        expect(getByTestId("input")).toBeInTheDocument();
        
    });
    test("inputField element is rendered",() => {
        const { getByTestId, getByText } = render(<Input />);
        expect(getByTestId("inputField")).toBeInTheDocument();
        
    });
    
   
   

});