import React from 'react';
import { shallow ,mount} from 'enzyme';
import ImageCard from './_image-card';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
const image={id:1,name:"forest1",url:"https://www.birmingham.ac.uk/Images/News/Forest-900.jpg"}

describe("ImageCard component",() =>{
    test("Matches the snapshot",() => {
        const imageCard = shallow(<ImageCard image1={image} />);
        expect(imageCard).toMatchSnapshot();

    })
    test("Image Card  element is rendered",() => {
        const imageCard = mount(<ImageCard image1={image} />);
        expect(imageCard.find('#imagecard').exists()).toEqual(true);
        //console.log(imageCard.debug());
        
    });
    test("edit icon element is rendered",() => {
        const imageCard = shallow(<ImageCard image1={image} />);
        expect(imageCard.find(EditIcon).exists()).toEqual(true);        
    });
    
    test("delete icon element is rendered",() => {
        const imageCard = shallow(<ImageCard image1={image} />);
        expect(imageCard.find(DeleteIcon).exists()).toEqual(true);
    });
    
    test("on click of DeleteIcon",() => {
        const mockOnClick = jest.fn();
        const imageCard = shallow(<ImageCard image1={image} handleDelete={mockOnClick}/>);
        const deleteIcon=imageCard.find(DeleteIcon);
        deleteIcon.simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
    test("Editing the ImageCard",() => {
        //const galleryAdmin= shallow(<GalleryAdmin/>);        
       //galleryAdmin.find(EditIcon).first().simulate('click');
       //expect(galleryAdmin.find(EditImageForm).exists()).toEqual(true);
         
    });
    



});