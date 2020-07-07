import React from 'react';
import { create } from "react-test-renderer";
import { render,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageCard from './_image-card';

const image={id:1,name:"image",url:"https://www.birmingham.ac.uk/Images/News/Forest-900.jpg"}

describe("ImageCard component",() =>{
    test("Matches the snapshot",() => {
        const imageCard = create(<imageCard image1={image} />);
        expect(imageCard.toJSON()).toMatchSnapshot();

    })
    test("Image Card  element is rendered",() => {
        const { getByTestId, getByText } = render(<ImageCard image1={image} />);
        expect(getByTestId("imageCard")).toBeInTheDocument();
        
    });
    test("edit icon element is rendered",() => {
        const { getByTestId, getByText } = render(<ImageCard image1={image} />);
        expect(getByTestId("editIcon")).toBeInTheDocument();
        
    });
    
    test("delete icon element is rendered",() => {
        const { getByTestId, getByText } = render(<ImageCard image1={image} />);
        expect(getByTestId("deleteIcon")).toBeInTheDocument();
        
    });
    
    test("on click of DeleteIcon",() => {
        const mockOnClick = jest.fn();
        const { getByTestId, getByText,getByRole } = render(<ImageCard image1={image} handleDelete={mockOnClick}/>);
        //expect(getByTestId("button")).toBeEnabled();
        fireEvent.click(getByTestId("deleteIcon"));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });


});