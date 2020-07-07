import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactMainContent from './_contact-main-content';
import * as Constants from "../../../constants";
describe("ContactMainContent component",() =>{
    test("Matches the snapshot",() => {
        const contact= create(<ContactMainContent/>);
        expect(contact.toJSON()).toMatchSnapshot();

    })
    test("ContactMainContent is rendered",() => {

        const { getByTestId, getByText } = render(<ContactMainContent/>);
        expect(getByTestId("contact")).toBeInTheDocument;
        
    });

    test("initially no error messages", () => {
        const { getByRole ,getByTestId} = render(<ContactMainContent />);
       
        expect(() => screen.getByText(Constants.INVALID_NAME)).toThrow('Unable to find an element');
        expect(() => screen.getByText(Constants.INVALID_EMAIL)).toThrow('Unable to find an element');
        expect(() => screen.getByText(Constants.INVALID_MESSAGE)).toThrow('Unable to find an element');
       
      });
    
      test("error msgs for inavlid inputs", () => {
        const {getByTestId} = render(<ContactMainContent />);
        fireEvent.change(getByTestId("name"), {
            target: { value: " ram" },
          });
          expect(getByTestId("emailError")).toBeInTheDocument();
          fireEvent.change(getByTestId("email"), {
            target: { value: "ram12@" },
          });
          expect(getByTestId("nameError")).toBeInTheDocument();
          fireEvent.change(getByTestId("message"), {
            target: { value: " " },
          });
          expect(screen.getByText(Constants.INVALID_NAME)).toBeInTheDocument();
          expect(screen.getByText(Constants.INVALID_EMAIL)).toBeInTheDocument();
          //expect(screen.getByText(Constants.INVALID_MESSAGE)).toBeInTheDocument();
       
     });
    
     test("valid inputs", () => {
        const { getByTestId} = render(<ContactMainContent />);
        fireEvent.change(getByTestId("name"), {
            target: { value: "Ram" },
          });
          expect(getByTestId("emailError")).toBeInTheDocument();
          fireEvent.change(getByTestId("email"), {
            target: { value: "ram12@gmail.com" },
          });
          expect(getByTestId("nameError")).toBeInTheDocument();
          fireEvent.change(getByTestId("message"), {
            target: { value: "hii" },
          });
          expect(() => screen.getByText(Constants.INVALID_NAME)).toThrow('Unable to find an element');
          expect(() => screen.getByText(Constants.INVALID_EMAIL)).toThrow('Unable to find an element');
          expect(() => screen.getByText(Constants.INVALID_MESSAGE)).toThrow('Unable to find an element');
     });

});