import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './_button';

describe("Button component",() =>{
    test("Matches the snapshot",() => {
        const button = create(<Button />);
        expect(button.toJSON()).toMatchSnapshot();

    })
    test("button element is rendered",() => {
        const { getByTestId, getByText } = render(<Button />);
        expect(getByTestId("button")).toBeInTheDocument();
        
    });
    test("button element is enabled",() => {
        const { getByTestId, getByText } = render(<Button value="save" disabled={false}/>);
        expect(getByTestId("button")).toBeEnabled();
        
    });
    test("button element is disabled",() => {
        const { getByTestId, getByText } = render(<Button value="save" disabled={true}/>);
        expect(getByTestId("button")).toBeDisabled();
        
    });
   
    test("on click of button",() => {
        const mockOnClick = jest.fn();
        const { getByTestId, getByText,getByRole } = render(<Button value="save" disabled={false} onClick={mockOnClick}/>);
        expect(getByTestId("button")).toBeEnabled();
        fireEvent.click(getByRole("button"));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});