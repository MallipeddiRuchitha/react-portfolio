import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderElement from './_header-element';

describe("HeaderElement component",() =>{
    test("Matches the snapshot",() => {
        const headerElement = create(<HeaderElement />);
        expect(headerElement.toJSON()).toMatchSnapshot();

    })
    test("header element is rendered",() => {
        const { getByTestId, getByText } = render(<HeaderElement />);
        expect(getByTestId("headerElement")).toBeInTheDocument();
        
    });
   

});