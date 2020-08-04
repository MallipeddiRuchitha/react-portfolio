import React from 'react';
import { shallow, mount } from 'enzyme';
import GalleryAdmin from './_gallery-admin-main-content';
import AddImageForm from "../../molecules/_add-image-form/_add-image-form";
import EditImageForm from "../../molecules/edit-image-form/_edit-image-form";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ImageCard from "../_image-card/_image-card";
import SvgIcon from '@material-ui/icons/Edit';
//import EditImageForm from '../../molecules/edit-image-form/_edit-image-form';
describe("GalleryAdmin component", () => {
    test("Matches the snapshot", () => {
        const galleryAdmin = shallow(<GalleryAdmin />);
        expect(galleryAdmin).toMatchSnapshot();

    })
    test("GalleryAdmmin is rendered", () => {
        const galleryAdmin = shallow(<GalleryAdmin />);

        expect(galleryAdmin.find('#galleryAdmin').exists()).toEqual(true);
    });
    test("initially Add Image Form is not rendered", () => {
        const galleryAdmin = mount(<GalleryAdmin />);

        expect(galleryAdmin.find(AddImageForm).exists()).toEqual(false);
        galleryAdmin.unmount();
    });
    test("Adding Image ,on clicking Add button Add Image Form should be rendered", () => {
        const galleryAdmin = mount(<GalleryAdmin />);
        expect(galleryAdmin.find(ImageCard).length).toEqual(6);
        const button = galleryAdmin.find("#button").last();
        button.simulate('click');
        //expect(button.text()).toEqual(' Add');
        expect(galleryAdmin.find(AddImageForm).exists()).toEqual(true);
        galleryAdmin.find('#Name').last().simulate('change', { target: { value: 'forest71' } });
        galleryAdmin.find('#Url').last().simulate('change', { target: { value: 'https://www.birmingham.ac.uk/Images/News/Forest-900.jpg' } });
        galleryAdmin.find('#Name').last().simulate('change', { target: { value: 'forest7' } });
        //console.log("11111111111",galleryAdmin.debug())
        expect(galleryAdmin.find("#button").last().props()['disabled']).toBe(false)
        galleryAdmin.find("#button").last().simulate('click');

        expect(galleryAdmin.find(ImageCard).length).toEqual(7);
        galleryAdmin.unmount();
    });

    test("Editing ImageCard ", () => {
        const galleryAdmin = mount(<GalleryAdmin />);
        const imageCard = galleryAdmin.find(ImageCard).last();
        expect(galleryAdmin.find(ImageCard).last().text()).toEqual("Forest6");
        imageCard.find(SvgIcon).first().simulate('click');
        //console.log("11111111111",galleryAdmin.find(ImageCard).last().debug())   
        galleryAdmin.find(ImageCard).last().find('#Name').last().simulate('change', { target: { value: 'forest612' } });

        galleryAdmin.find(ImageCard).last().find("#button").last().simulate('click');

        expect(galleryAdmin.find(ImageCard).last().text()).toEqual("forest612");
        galleryAdmin.unmount();
    });
    test("Deleting Image Card", () => {
        const galleryAdmin = mount(<GalleryAdmin />);
        expect(galleryAdmin.find(ImageCard).length).toEqual(6);
        const imageCard = galleryAdmin.find(ImageCard).last();        
        imageCard.find("#deleteIcon").last().simulate('click');
        expect(galleryAdmin.find(ImageCard).length).toEqual(5);
        galleryAdmin.unmount();
    });








});