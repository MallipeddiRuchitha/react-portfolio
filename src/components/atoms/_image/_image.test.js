import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from './_image';
import { shallow ,mount} from 'enzyme';

describe("Image component",() =>{
    test("Matches the snapshot",() => {
        const image = shallow(<Image />);
        expect(image).toMatchSnapshot();

        

    })
    test("check whether Image  element is rendered",() => {
        const image = shallow(<Image />);
       
        expect(image.find('#image').exists()).toEqual(true);
        
    });
   

});