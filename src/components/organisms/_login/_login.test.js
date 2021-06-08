import React from 'react';
import { shallow ,mount} from 'enzyme';
import Login from './_login';
import AuthContext from '../../../AuthContext';
const auth={
    login:jest.fn()
}
describe("Login component",() =>{
    test("Matches the snapshot",() => {
        const login = shallow( <AuthContext.Provider value={auth}>< Login /></AuthContext.Provider>);
     expect(login).toMatchSnapshot();
        

    })
    test("Login element is rendered",() => {
        const wrapper = mount(<AuthContext.Provider value={auth}>< Login /></AuthContext.Provider>);
        expect(wrapper.find('#login').exists()).toEqual(true);
        wrapper.unmount();
        
    });
   
   
   

});