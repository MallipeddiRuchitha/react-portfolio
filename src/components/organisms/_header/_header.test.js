import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './_header';
import {withRouter,BrowserRouter as Router} from 'react-router-dom';
describe("Header component",() =>{
    test("Matches the snapshot",() => {
        const header = create(<Router><Header /></Router>);
        expect(header.toJSON()).toMatchSnapshot();

    })
    test("header element is rendered",() => {
        const { getByTestId, getByText } = render(<Router><Header /></Router>);
        expect(getByTestId("header")).toBeInTheDocument();
        
    });
    test(" 5 header elements  should be there", () => {
        const { getAllByTestId } = render(<Router><Header /></Router>);
        // expect(getByTestId(1)).toBeInTheDocument();
        expect(getAllByTestId("headerElement")).toHaveLength(5);
      });
   

});