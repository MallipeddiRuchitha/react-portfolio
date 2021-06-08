import React from 'react';
import { shallow ,mount} from 'enzyme';
import GalleryMain from './_gallery-main-content';
import { makeStyles } from "@material-ui/core/styles";

describe("GalleryMain component",() =>{
    test("Matches the snapshot",() => {
        const galleryMain= shallow(<GalleryMain/>);
        expect(galleryMain).toMatchSnapshot();

    })
    test("GalleryMain is rendered",() => {
        const galleryMain= shallow(<GalleryMain/>);
        expect(galleryMain.find("#galleryMain").exists()).toEqual(true);
        
    });
   
   
   

});