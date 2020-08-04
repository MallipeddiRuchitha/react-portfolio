import React from 'react';

import * as Constants from "../../../constants";
import Error from './_error';
import { shallow ,mount} from 'enzyme';
describe("Error component",() =>{
    test("Matches the snapshot",() => {
        const error = shallow(<Error />);
        expect(error).toMatchSnapshot();

    })
    test("Error element is rendered",() => {
        const error = shallow(<Error />);
        expect(error.find("#error").exists()).toEqual(true);
        
    });
    test("is Link element present ",() => {   
        const error = shallow(<Error />);
        expect(error.find("#link").prop('href')).toBe("/");});

});