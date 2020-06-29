import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddImageForm from './_add-image-form';
//const name="image1";
const nameError="";
const urlError="";
const error=false;
describe("EditImageForm component",() =>{
    test("Matches the snapshot",() => {
        const  addImageForm= create(<AddImageForm urlError={urlError} nameError={nameError} error={error} />);
        expect(addImageForm.toJSON()).toMatchSnapshot();

    })
    test("inputField element is rendered",() => {
        const { getByTestId, getByText } = render(<AddImageForm urlError={urlError} nameError={nameError} error={error} />);
        expect(getByTestId("addImageForm")).toBeInTheDocument();
        
    });

   test("name ,url fields are rendered", () => {
        const { getAllByTestId } = render(<AddImageForm urlError={urlError} nameError={nameError} error={error} />);
       
        expect(getAllByTestId("content-input")).toHaveLength(2);

    });
   

});