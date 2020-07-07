import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GalleryAdmin from './_gallery-admin-main-content';

describe("GalleryAdmin component",() =>{
    test("Matches the snapshot",() => {
        const galleryAdmin= create(<GalleryAdmin/>);
        expect(galleryAdmin.toJSON()).toMatchSnapshot();

    })
    test("GalleryAdmmin is rendered",() => {
        const { getByTestId, getByText } = render(<GalleryAdmin/>);
        expect(getByTestId("galleryAdmin")).toBeInTheDocument();
        
    });
   
   
   

});