import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddImageForm from './_add-image-form';
import * as Constants from "../../../constants";
//const name="image1";
const nameError="";
const urlError="";
const error=false;

describe("AddImageForm component",() =>{
    test("Matches the snapshot",() => {
        const  addImageForm= create(<AddImageForm urlError={urlError} nameError={nameError} error={error} />);
        expect(addImageForm.toJSON()).toMatchSnapshot();

    })
    test("Matches the snapshot when error is present",() => {
        const  addImageForm= create(<AddImageForm urlError="invalid url" nameError="invalid name" error="True" />);
        expect(addImageForm.toJSON()).toMatchSnapshot();

    })
    test("AddImageForm element is rendered",() => {
        const { getByTestId, getByText } = render(<AddImageForm urlError={urlError} nameError={nameError} error={error} />);
        expect(getByTestId("addImageForm")).toBeInTheDocument();
        
    });
    
  
   

});