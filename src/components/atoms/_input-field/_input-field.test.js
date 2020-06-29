import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputField from './_input-field';

describe("InputField component",() =>{
    test("Matches the snapshot",() => {
        const inputField = create(<InputField />);
        expect(inputField.toJSON()).toMatchSnapshot();

    })
    test("inputField element is rendered",() => {
        const { getByTestId, getByText } = render(<InputField />);
        expect(getByTestId("inputField")).toBeInTheDocument();
        
    });
   
   

});