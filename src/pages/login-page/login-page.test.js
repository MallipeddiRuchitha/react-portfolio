import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './login-page';
  
const auth={
    login:jest.fn()
}
describe("LoginPage component",() =>{
    test("Matches the snapshot",() => {
        const input = create(< LoginPage auth={auth}/>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("LoginPage element is rendered",() => {
        const { getByTestId, getByText } = render(<LoginPage auth={auth}/>);
        expect(getByTestId("loginPage")).toBeInTheDocument();
        
    });
   
   
   

});