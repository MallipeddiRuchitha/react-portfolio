import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './_contact-main-content';

describe("EditImageForm component",() =>{
    test("Matches the snapshot",() => {
        const contact= create(<Contact/>);
        expect(contact.toJSON()).toMatchSnapshot();

    })
    test("inputField element is rendered",() => {
        const { getByTestId, getByText } = render(<Contact/>);
        expect(getByTestId("contact")).toBeInTheDocument();
        
    });

   test("name ,email,message fields are rendered", () => {
        const { getAllByTestId } = render(<Contact />);
       
        expect(getAllByTestId("content-input")).toHaveLength(3);

    });
   

});