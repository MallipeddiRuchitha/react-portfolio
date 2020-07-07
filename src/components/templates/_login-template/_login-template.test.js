import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginTemplate from './_login-template';
const mockOnChange = jest.fn();
describe("LoginTemplate component",() =>{
    test("Matches the snapshot",() => {
        const input = create(< LoginTemplate/>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("LoginTemplate element is rendered",() => {
        const { getByTestId, getByText } = render(<LoginTemplate/>);
        expect(getByTestId("loginTemplate")).toBeInTheDocument();
        
    });
   
   
   

});