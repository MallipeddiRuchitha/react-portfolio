import React from 'react';
import { shallow ,mount} from 'enzyme';
import AddImageForm from './_add-image-form';
import * as Constants from "../../../constants";
//const name="image1";
const nameError="";
const urlError="";
const error=false;

describe("AddImageForm component",() =>{
    test("Matches the snapshot",() => {

        const  addImageForm= shallow(<AddImageForm urlError={urlError} nameError={nameError} error={error} />);
        expect(addImageForm).toMatchSnapshot();

    })
   
    test("AddImageForm element is rendered",() => {
        const addImageForm = shallow(<AddImageForm urlError={urlError} nameError={nameError} error={error} />);
        expect(addImageForm.find("#addImageForm").exists()).toEqual(true);
        
    });
    
  
   

});