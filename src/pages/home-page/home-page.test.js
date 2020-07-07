import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './home-page';
import { BrowserRouter } from 'react-router-dom';

describe("HomePage component",() =>{
    test("Matches the snapshot",() => {
        const input = create(<BrowserRouter>< HomePage/></BrowserRouter>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("HomePage element is rendered",() => {
        const { getByTestId, getByText } = render(<BrowserRouter>< HomePage/></BrowserRouter>);
        expect(getByTestId("homePage")).toBeInTheDocument();
        
    });
   
   
   

});