import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './_about-main-content';

describe("About component",() =>{
    test("Matches the snapshot",() => {
        const about = create(<About />);
        expect(about.toJSON()).toMatchSnapshot();

    })
    test("about element is rendered",() => {
        const { getByTestId, getByText } = render(<About />);
        expect(getByTestId("aboutMainContent")).toBeInTheDocument();
        
    });
   
   

});