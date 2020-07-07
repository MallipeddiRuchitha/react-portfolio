import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeMainContent from './_home-main-content';

describe(" HomeMainContent component",() =>{
    test("Matches the snapshot",() => {
        const galleryAdmin= create(< HomeMainContent/>);
        expect(galleryAdmin.toJSON()).toMatchSnapshot();

    })
    test("GalleryAdmmin is rendered",() => {
        const { getByTestId } = render(< HomeMainContent/>);
        expect(getByTestId("home")).toBeInTheDocument();
        
    });
   
   
   

});