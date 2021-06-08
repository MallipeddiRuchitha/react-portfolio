import React from 'react';
import { shallow ,mount} from 'enzyme';
import LoginPage from './login-page';
  
const auth={
    login:jest.fn()
}
describe("LoginPage component",() =>{
    test("Matches the snapshot",() => {
        const loginPage = shallow(< LoginPage/>);
        expect(loginPage).toMatchSnapshot();


    })
    test("LoginPage element is rendered",() => {
        const loginPage = shallow(< LoginPage/>);
        expect(loginPage.find('#loginPage').exists()).toEqual(true);
        
    });
   
   
   

});