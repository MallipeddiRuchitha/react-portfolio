import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GalleryMain from './_gallery-main-content';
import { makeStyles } from "@material-ui/core/styles";

describe("GalleryMain component",() =>{
    test("Matches the snapshot",() => {
        const galleryMain= create(<GalleryMain/>);
        expect(galleryMain.toJSON()).toMatchSnapshot();

    })
    // test("GalleryMain is rendered",() => {
    //     const { getByTestId, getByText } = render(<GalleryMain/>);
    //     expect(getByTestId("galleryMain")).toBeInTheDocument();
        
    // });
   
   
   

});