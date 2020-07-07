import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderTemplate from './_header-template';
const mockOnChange = jest.fn();
describe("HeaderTemplate component",() =>{
    test("Matches the snapshot",() => {
        const input = create(< HeaderTemplate/>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("HeaderTemplate element is rendered",() => {
        const { getByTestId, getByText } = render(<HeaderTemplate/>);
        expect(getByTestId("headerTemplate")).toBeInTheDocument();
        
    });
   
   
   

});