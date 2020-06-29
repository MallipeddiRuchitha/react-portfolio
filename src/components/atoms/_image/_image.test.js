import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from './_image';

describe("Image component",() =>{
    test("Matches the snapshot",() => {
        const image = create(<Image />);
        expect(image.toJSON()).toMatchSnapshot();

    })
    test("check whether Image  element is rendered",() => {
        const { getByTestId, getByText } = render(<Image/>);
        expect(getByTestId("image")).toBeInTheDocument();
        
    });
   

});