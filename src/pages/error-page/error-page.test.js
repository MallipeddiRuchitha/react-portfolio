import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorPage from './error-page';

describe("ErrorPage component",() =>{
    test("Matches the snapshot",() => {
        const input = create(< ErrorPage/>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("ErrorPage element is rendered",() => {
        const { getByTestId, getByText } = render(<ErrorPage/>);
        expect(getByTestId("errorPage")).toBeInTheDocument();
        
    });
   
   
   

});