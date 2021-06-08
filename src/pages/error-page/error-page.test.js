import React from 'react';
import { shallow ,mount} from 'enzyme';
import ErrorPage from './error-page';

describe("ErrorPage component",() =>{
    test("Matches the snapshot",() => {
        const errorPage = shallow(< ErrorPage/>);
        expect(errorPage).toMatchSnapshot();

    })
    test("ErrorPage element is rendered",() => {
        const errorPage = shallow(< ErrorPage/>);
        expect(errorPage.find('#errorPage').exists()).toEqual(true);
        
    });
   
   
   

});