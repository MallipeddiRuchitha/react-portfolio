import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './_login';
  
const auth={
    login:jest.fn()
}
describe("Login component",() =>{
    test("Matches the snapshot",() => {
        const input = create(< Login auth={auth}/>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("Login element is rendered",() => {
        const { getByTestId, getByText } = render(<Login auth={auth}/>);
        expect(getByTestId("login")).toBeInTheDocument();
        
    });
   
   
   

});